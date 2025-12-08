
// Minimal UI handling for the demo lead form
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('leadForm');
  const success = document.getElementById('success');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      role: form.role.value,
      message: form.message.value.trim(),
      timestamp: new Date().toISOString()
    };
    // For now, we just store into localStorage and show success.
    // Replace this with a Zapier webhook or Google Forms endpoint for production.
    const leads = JSON.parse(localStorage.getItem('propai_leads') || '[]');
    leads.push(data);
    localStorage.setItem('propai_leads', JSON.stringify(leads));

    form.style.display = 'none';
    success.hidden = false;
  });
});
