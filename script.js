// === Replace with your actual Supabase credentials ===
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// === Hook into Confirm Booking Button ===
document.getElementById('confirmBooking')?.addEventListener('click', async () => {
  const user = JSON.parse(localStorage.getItem('slotchain_user'));
  if (!user) {
    alert("User not logged in");
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
    alert('Failed to book: ' + error.message);
  } else {
    alert('Booking confirmed and saved to Supabase!');
  }
});
