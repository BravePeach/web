# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-17 05:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0007_auto_20170317_1453'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guideoffer',
            name='guide',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='offers', to='webapp.Guide'),
        ),
        migrations.AlterField(
            model_name='guideoffer',
            name='request',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webapp.UserRequest'),
        ),
    ]
