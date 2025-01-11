package com.fws.services

import android.content.Context
import android.location.Location
import android.location.LocationManager
import com.google.android.gms.location.LocationServices
import dagger.hilt.android.qualifiers.ApplicationContext
import kotlinx.coroutines.suspendCancellableCoroutine
import javax.inject.Inject
import javax.inject.Singleton
import kotlin.coroutines.resume

@Singleton
class LocationService @Inject constructor(
    @ApplicationContext private val context: Context
) {
    private val fusedLocationClient = LocationServices.getFusedLocationProviderClient(context)
    
    suspend fun getCurrentLocation(): Location = suspendCancellableCoroutine { continuation ->
        try {
            fusedLocationClient.lastLocation
                .addOnSuccessListener { location ->
                    location?.let { continuation.resume(it) }
                }
                .addOnFailureListener { continuation.resume(Location(LocationManager.GPS_PROVIDER)) }
        } catch (e: SecurityException) {
            continuation.resume(Location(LocationManager.GPS_PROVIDER))
        }
    }
    
    fun startTracking() {
        // TODO: Implement background location tracking
    }
    
    fun stopTracking() {
        // TODO: Stop background location tracking
    }
}