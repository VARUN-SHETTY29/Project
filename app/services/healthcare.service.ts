import { Observable } from '@nativescript/core';

export interface HealthcareProvider {
    name: string;
    address: string;
    phone: string;
    latitude: number;
    longitude: number;
}

export class HealthcareService extends Observable {
    private providers: HealthcareProvider[] = [];

    public addProvider(provider: HealthcareProvider): void {
        this.providers.push(provider);
        this.notifyPropertyChange('providers', this.providers);
    }

    public getProviders(): HealthcareProvider[] {
        return [...this.providers];
    }

    public getNearbyProviders(latitude: number, longitude: number, radiusKm: number = 5): HealthcareProvider[] {
        return this.providers.filter(provider => {
            const distance = this.calculateDistance(
                latitude,
                longitude,
                provider.latitude,
                provider.longitude
            );
            return distance <= radiusKm;
        });
    }

    private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const R = 6371; // Earth's radius in km
        const dLat = this.deg2rad(lat2 - lat1);
        const dLon = this.deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    private deg2rad(deg: number): number {
        return deg * (Math.PI / 180);
    }
}