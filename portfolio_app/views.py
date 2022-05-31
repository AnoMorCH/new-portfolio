from django.shortcuts import render
from django.contrib import messages
from django.core.mail import send_mail, BadHeaderError

from .forms import ContactForm, DonateForm


def portfolio(request):
    form = ContactForm()

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            from_email = form.cleaned_data['from_email']
            subject = form.cleaned_data['subject']
            message = form.get_customized_message()

            try:
                send_mail(subject, message, from_email, ['portfolio.anomorch@gmail.com'])
            except BadHeaderError:
                messages.error(request, 'Invalid header found.')

            messages.info(request, 'Your mail has been sent.')

    return render(request, 'portfolio_app/portfolio.html', {'form': form})


def donate(request):
    form = DonateForm()

    if request.method == 'POST':
        form = DonateForm(request.POST)

    return render(request, 'portfolio_app/donation.html', {'form': form})