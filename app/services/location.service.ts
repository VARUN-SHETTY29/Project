import { Geolocation } from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core';

export class LocationService {
    private static instance: LocationService;
    private watchId: number;

    private constructor() {}

    public static getInstance(): LocationService {
        if (!LocationService.instance) {
            LocationService.instance = new LocationService();
        }
        return LocationService.instance;
    }

    public async startTracking(): Promise<void> {
        const hasPermission = await this.requestPermissions();
        if (!hasPermission) return;

        this.watchId = Geolocation.watchLocation(
            (location) => {
                console.log('Location:', location);
                // Handle location update
            },
            (error) => {
                console.error('Location error:', error);
            },
            {
                desiredAccuracy: CoreTypes.Accuracy.high,
                updateDistance: 10,
                minimumUpdateTime: 1000
            }
        );
    }

    public stopTracking(): void {
        if (this.watchId) {
            Geolocation.clearWatch(this.watchId);
        }
    }

    private async requestPermissions(): Promise<boolean> {
        return await Geolocation.enableLocationRequest(true);
    }
}