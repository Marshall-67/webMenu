function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('espSection').style.display = 'block';
  document.getElementById('miscSection').style.display = 'block';
});

// Initialize jscolor with hideValue option
jscolor.presets.default = {
  hideValue: true
};
jscolor.install();

function updateConfig() {
  const config = {
    ESP: document.getElementById('ESP').checked,
    skeletonESP: document.getElementById('skeletonESP').checked,
    skeletonColor: {
      r: parseInt(document.getElementById('skeletonColor').jscolor.rgb[0]),
      g: parseInt(document.getElementById('skeletonColor').jscolor.rgb[1]),
      b: parseInt(document.getElementById('skeletonColor').jscolor.rgb[2]),
      a: 255
    },
    showPlayerNames: document.getElementById('showPlayerNames').checked,
    showPlayerTypes: document.getElementById('showPlayerTypes').checked,
    showHeadCircle: document.getElementById('showHeadCircle').checked,
    showCrosshair: document.getElementById('showCrosshair').checked,
    crosshairSize: parseInt(document.getElementById('crosshairSize').value),
    crosshairColor: {
      r: parseInt(document.getElementById('crosshairColor').jscolor.rgb[0]),
      g: parseInt(document.getElementById('crosshairColor').jscolor.rgb[1]),
      b: parseInt(document.getElementById('crosshairColor').jscolor.rgb[2]),
      a: 255
    },
    bFPSLimiter: document.getElementById('bFPSLimiter').checked,
    iFPSLimiterAmount: parseInt(document.getElementById('iFPSLimiterAmount').value),
    exfilPoints: document.getElementById('exfilPoints').checked,
    thermalVision: document.getElementById('thermalVision').checked
  };

  fetch('/update-config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(config)
  })
  .then(response => {
    if (response.ok) {
      alert('Configuration updated successfully!');
    } else {
      alert('Failed to update configuration.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred while updating configuration.');
  });
}
