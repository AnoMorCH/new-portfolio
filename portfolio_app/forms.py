from django import forms


class ContactForm(forms.Form):
    from_email = forms.EmailField(
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )

    subject = forms.CharField(
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )

    message = forms.CharField(
        required=True,
        widget=forms.Textarea(attrs={'class': 'form-control'}),
        max_length=500,
    )

    def get_customized_message(self):
        cleaned_data = super().clean()

        message = cleaned_data.get('message')
        from_email = cleaned_data.get('from_email')

        customized_message = f'A user with email {from_email} said:'
        customized_message += f'\n'
        customized_message += message

        return customized_message


class DonateForm(forms.Form):
    amount = forms.CharField(
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )

    email = forms.EmailField(
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )

    name = forms.CharField(
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )

    card = forms.CharField(
        required=True,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )