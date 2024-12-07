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
      r: parseInt(jscolor.presets.default.fromString(document.getElementById('skeletonColor').value).toRgbString().slice(1, 3), 16),
      g: parseInt(jscolor.presets.default.fromString(document.getElementById('skeletonColor').value).toRgbString().slice(3, 5), 16),
      b: parseInt(jscolor.presets.default.fromString(document.getElementById('skeletonColor').value).toRgbString().slice(5, 7), 16),
      a: 255
    },
    showPlayerNames: document.getElementById('showPlayerNames').checked,
    showPlayerTypes: document.getElementById('showPlayerTypes').checked,
    showHeadCircle: document.getElementById('showHeadCircle').checked,
    showCrosshair: document.getElementById('showCrosshair').checked,
    crosshairSize: parseInt(document.getElementById('crosshairSize').value),
    crosshairColor: {
      r: parseInt(jscolor.presets.default.fromString(document.getElementById('crosshairColor').value).toRgbString().slice(1, 3), 16),
      g: parseInt(jscolor.presets.default.fromString(document.getElementById('crosshairColor').value).toRgbString().slice(3, 5), 16),
      b: parseInt(jscolor.presets.default.fromString(document.getElementById('crosshairColor').value).toRgbString().slice(5, 7), 16),
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
