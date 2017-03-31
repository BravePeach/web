# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-30 19:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0002_auto_20170331_0408'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guideadjust',
            name='account_num',
            field=models.TextField(verbose_name=''),
        ),
        migrations.AlterField(
            model_name='guideadjust',
            name='addr',
            field=models.TextField(blank=True, default='', verbose_name=''),
        ),
        migrations.AlterField(
            model_name='guideadjust',
            name='bank',
            field=models.TextField(verbose_name='은행 이름*'),
        ),
        migrations.AlterField(
            model_name='guideadjust',
            name='branch',
            field=models.TextField(blank=True, default='', verbose_name=''),
        ),
        migrations.AlterField(
            model_name='guideadjust',
            name='name',
            field=models.TextField(verbose_name='수취인 이름*'),
        ),
        migrations.AlterField(
            model_name='guideadjust',
            name='routing_num',
            field=models.TextField(blank=True, default='', verbose_name=''),
        ),
        migrations.AlterField(
            model_name='guideadjust',
            name='swift_bic_code',
            field=models.TextField(blank=True, default='', verbose_name=''),
        ),
    ]
