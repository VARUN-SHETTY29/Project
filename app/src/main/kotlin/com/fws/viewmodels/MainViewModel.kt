package com.fws.viewmodels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.fws.services.EmergencyService
import com.fws.services.LocationService
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class MainViewModel @Inject constructor(
    private val emergencyService: EmergencyService,
    private val locationService: LocationService
) : ViewModel() {
    
    val isTrackingEnabled = MutableStateFlow(false)
    
    fun triggerSOS() {
        viewModelScope.launch {
            emergencyService.sendSOS()
        }
    }
    
    fun toggleLocationTracking() {
        viewModelScope.launch {
            isTrackingEnabled.value = !isTrackingEnabled.value
            if (isTrackingEnabled.value) {
                locationService.startTracking()
            } else {
                locationService.stopTracking()
            }
        }
    }
}