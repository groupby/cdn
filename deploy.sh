projects=$(echo ${GB_CDN_PROJECTS} | tr ":" "\n")

for proj in ${projects}; do
  git clone "https://github.com/groupby/${proj}.git" projects/${proj}
done

gcloud="${HOME}/google-cloud-sdk/bin/gcloud"

$gcloud -q beta app deploy app.yml --promote --project=$GCLOUD_PROJECT --verbosity=info
total_versions=`$gcloud -q beta app versions list --filter=service=cdn --sort-by=Version | tail -n +2 | wc -l`
to_delete=`echo "$total_versions - 25" | bc`

if [ "$to_delete" -gt 0 ]; then
  versions=`$gcloud -q beta app versions list --filter=service=cdn --sort-by=Version --limit=$to_delete | tail -n +2 | awk '{ print $2; }' | tr '\n' ' '`
  $gcloud -q beta app delete $versions --service=cdn
fi
