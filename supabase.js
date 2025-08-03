// Replace with your actual keys
const SUPABASE_URL = 'https://foqlannrpilfurvxhrmf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvcWxhbm5ycGlsZnVydnhocm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMDk1OTMsImV4cCI6MjA2OTc4NTU5M30.IoFZS9Z142yg0sJm90MQZ3AvC3tGBUvoxNRHVrHAl40';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// === Confirm Booking Logic ===
document.getElementById('confirmBooking')?.addEventListener('click', async () => {
  const user = JSON.parse(localStorage.getItem('slotchain_user'));
  if (!user) {
    alert("You must be logged in to book");
    return;
  }

  const service = document.getElementById('serviceSelect').value;
  const date = document.getElementById('bookingDate').value;
  const time = document.querySelector('.booking-slot.selected')?.textContent || '';
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'card';

  const { data, error } = await supabase
    .from('appointments')
    .insert([{
      user_name: user.name,
      user_email: user.email,
      service,
      date,
      time,
      payment_method: paymentMethod
    }]);

  if (error) {
    alert('Error: ' + error.message);
  } else {
    alert('Booking saved successfully!');
  }
});
