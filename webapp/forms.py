from django import forms
from django.contrib.auth.models import User


class LoginForm(forms.Form):
    email = forms.CharField(label='이메일 주소',max_length=30,min_length=5,widget=forms.TextInput(attrs={'class' : 'regist-input'}))
    password = forms.CharField(label='비밀번호',widget=forms.PasswordInput(attrs={'class' : 'regist-input'}))


class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(label = 'Password',
                               widget=forms.PasswordInput)
    password2 = forms.CharField(label = 'Confirm Password',
                                widget= forms.PasswordInput)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email')

    def clean_password2(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2']:
            raise forms.ValidationError('Passwords don\'t match.')
        return cd['password2']


class GuideSearchForm(forms.Form):
    location = forms.CharField(max_length=200, label='')
    on_day = forms.CharField()
    traveler_cnt = forms.IntegerField()