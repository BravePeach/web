# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-10 08:21
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0015_merge_20170406_2130'),
    ]

    operations = [
        migrations.AddField(
            model_name='userrequest',
            name='guide_major',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='userrequest',
            name='trans_arrive_at',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='userrequest',
            name='trans_start_at',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='guidereview',
            name='write_date',
            field=models.DateField(default=datetime.date(2017, 4, 10)),
        ),
        migrations.AlterField(
            model_name='userrequest',
            name='landmark',
            field=models.CharField(blank=True, default='없음', max_length=200),
        ),
        migrations.AlterField(
            model_name='userreview',
            name='write_date',
            field=models.DateField(default=datetime.date(2017, 4, 10)),
        ),
    ]