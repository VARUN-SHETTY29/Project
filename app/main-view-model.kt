package org.nativescript.forwomensafety

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import com.tns.NativeScriptApplication
import org.nativescript.locationservice.BackgroundService
import java.util.*

class MainViewModel : Observable(), SensorEventListener {
    private var sensorManager: SensorManager? = null
    private var powerButtonPressCount = 0
    private var lastPressTime: Long = 0
    
    init {
        setupPowerButtonDetection()
        initializeLocationTracking()
    }
    
    private fun setupPowerButtonDetection() {
        sensorManager = NativeScriptApplication.getInstance()
            .getSystemService(Context.SENSOR_SERVICE) as SensorManager
        sensorManager?.registerListener(
            this,
            sensorManager?.getDefaultSensor(Sensor.TYPE_PROXIMITY),
            SensorManager.SENSOR_DELAY_NORMAL
        )
    }
    
    private fun initializeLocationTracking() {
        // Initialize location tracking service
        BackgroundService.getInstance().startLocationTracking()
    }
    
    fun onSOSTap() {
        sendEmergencyAlert()
    }
    
    private fun sendEmergencyAlert() {
        // Send SMS to emergency contacts
        // Trigger location sharing
        // Activate loud alarm
    }
    
    override fun onSensorChanged(event: SensorEvent?) {
        // Detect power button presses for SOS
        val currentTime = System.currentTimeMillis()
        if (currentTime - lastPressTime < 500) {
            powerButtonPressCount++
            if (powerButtonPressCount >= 2) {
                sendEmergencyAlert()
                powerButtonPressCount = 0
            }
        } else {
            powerButtonPressCount = 1
        }
        lastPressTime = currentTime
    }
    
    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {
        // Handle accuracy changes if needed
    }
}