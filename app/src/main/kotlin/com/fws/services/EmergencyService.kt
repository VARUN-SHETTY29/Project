package com.fws.services

import android.content.Context
import android.telephony.SmsManager
import dagger.hilt.android.qualifiers.ApplicationContext
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class EmergencyService @Inject constructor(
    @ApplicationContext private val context: Context,
    private val locationService: LocationService
) {
    suspend fun sendSOS() {
        val location = locationService.getCurrentLocation()
        val message = "EMERGENCY! I need help! My location: " +
            "http://maps.google.com/?q=${location.latitude},${location.longitude}"
            
        getEmergencyContacts().forEach { contact ->
            SmsManager.getDefault().sendTextMessage(
                contact.phone,
                null,
                message,
                null,
                null
            )
        }
    }
    
    private fun getEmergencyContacts(): List<Contact> {
        // TODO: Implement contact storage and retrieval
        return emptyList()
    }
    
    data class Contact(val name: String, val phone: String)
}