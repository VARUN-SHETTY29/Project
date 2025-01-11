import { Observable } from '@nativescript/core';

export class EmergencyContactsService extends Observable {
    private contacts: Array<{ name: string; phone: string }> = [];

    public addContact(name: string, phone: string): void {
        this.contacts.push({ name, phone });
        this.notifyPropertyChange('contacts', this.contacts);
    }

    public removeContact(index: number): void {
        this.contacts.splice(index, 1);
        this.notifyPropertyChange('contacts', this.contacts);
    }

    public getContacts(): Array<{ name: string; phone: string }> {
        return [...this.contacts];
    }

    public clearContacts(): void {
        this.contacts = [];
        this.notifyPropertyChange('contacts', this.contacts);
    }
}