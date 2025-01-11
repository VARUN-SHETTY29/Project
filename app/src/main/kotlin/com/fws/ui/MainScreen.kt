package com.fws.ui

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.fws.viewmodels.MainViewModel

@Composable
fun MainScreen(viewModel: MainViewModel) {
    var showEmergencyContacts by remember { mutableStateOf(false) }
    
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        // SOS Button
        Button(
            onClick = { viewModel.triggerSOS() },
            modifier = Modifier
                .fillMaxWidth()
                .height(80.dp),
            colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.error)
        ) {
            Text("SOS", style = MaterialTheme.typography.headlineMedium)
        }
        
        Spacer(modifier = Modifier.height(16.dp))
        
        // Location Status
        Card(
            modifier = Modifier.fillMaxWidth()
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(
                    text = "Location Tracking",
                    style = MaterialTheme.typography.titleMedium
                )
                Switch(
                    checked = viewModel.isTrackingEnabled.value,
                    onCheckedChange = { viewModel.toggleLocationTracking() }
                )
            }
        }
        
        // Emergency Contacts Section
        EmergencyContactsSection(viewModel)
        
        // Healthcare Section
        HealthcareSection(viewModel)
    }
}