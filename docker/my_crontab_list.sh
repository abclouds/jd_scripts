# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

##############短期活动##############

##############长期活动##############
# 签到
0 9 * * * cd /scripts/js/ && node jd_bean_sign_zd.js >> /scripts/logs/jd_bean_sign_zd.log 2>&1
