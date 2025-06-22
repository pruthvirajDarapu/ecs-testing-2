// WhatsApp form submission
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('sendWhatsapp');
    if (btn) {
        btn.onclick = function() {
            var form = document.getElementById('whatsappForm');
            var name = form.querySelector('input[placeholder="Your Name"]').value.trim();
            var email = form.querySelector('input[placeholder="Your Email"]').value.trim();
            var mobile = form.querySelector('input[placeholder="Your Mobile"]').value.trim();
            var service = form.querySelector('select').value;
            var note = form.querySelector('textarea').value.trim();

            // Email validation
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            // Mobile validation (10 digits)
            var mobilePattern = /^\d{10}$/;
            if (!mobilePattern.test(mobile)) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }

            var msg = "New Quote Request:%0A";
            if(name) msg += "Name: " + name + "%0A";
            if(email) msg += "Email: " + email + "%0A";
            if(mobile) msg += "Mobile: " + mobile + "%0A";
            if(service && service !== "Select A Service") msg += "Service: " + service + "%0A";
            if(note) msg += "Note: " + note + "%0A";

            var url = "https://wa.me/919493393059?text=" + msg;
            window.open(url, '_blank');
        };
    }
});
