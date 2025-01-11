import { Phone } from 'nativescript-phone';
import { LocalNotifications } from '@nativescript/local-notifications';

export class EmergencyService {
    private static instance: EmergencyService;
    private emergencyContacts: Array<{ name: string; phone: string }> = [];

    private constructor() {
        this.initializeNotifications();
    }

    public static getInstance(): EmergencyService {
        if (!EmergencyService.instance) {
            EmergencyService.instance = new EmergencyService();
        }
        return EmergencyService.instance;
    }

    public async sendSOS(): Promise<void> {
        this.triggerAlarm();
        await this.sendEmergencyMessages();
        await this.callEmergencyContact();
    }

    private async initializeNotifications(): Promise<void> {
        await LocalNotifications.requestPermission();
    }

    private async sendEmergencyMessages(): Promise<void> {
        for (const contact of this.emergencyContacts) {
            await Phone.sms([contact.phone], 'EMERGENCY: I need help! Check my location.');
        }
    }

    private async callEmergencyContact(): Promise<void> {
        if (this.emergencyContacts.length > 0) {
            await Phone.dial(this.emergencyContacts[0].phone, true);
        }
    }

    private triggerAlarm(): void {
        LocalNotifications.schedule([{
            id: 1,
            title: 'SOS ACTIVATED',
            body: 'Emergency contacts are being notified',
            sound: 'alarm.wav',
            forceShowWhenInForeground: true
        }]);
    }
}