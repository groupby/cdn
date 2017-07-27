projects=$(echo ${GB_CDN_PROJECTS} | tr ":" "\n")

for proj in ${projects}; do
  git clone "https://github.com/groupby/${proj}.git" projects/${proj}
done

gcloud="${HOME}/google-cloud-sdk/bin/gcloud"

$gcloud -q beta app deploy app.yml --promote --project=$GCLOUD_PROJECT --verbosity=info
all_versions=`$gcloud -q beta app versions list --project=$GCLOUD_PROJECT --filter=service=cdn --sort-by=Version | tail -n +2`
version_count=`echo $all_versions | wc -l`
to_delete=`echo "$version_count - 25" | bc`

if [ "$to_delete" -gt 0 ]; then
  echo removing old versions of CDN
  versions=`echo $all_versions | head -n $to_delete | awk '{ print $2; }' | tr '\n' ' '`
  $gcloud -q beta app delete $versions --project=$GCLOUD_PROJECT --service=cdn
fi
