projects=$(echo ${GB_CDN_PROJECTS} | tr ":" "\n")

for proj in ${projects}; do
  git clone "https://github.com/groupby/${proj}.git" projects/${proj}
done

gcloud="${HOME}/google-cloud-sdk/bin/gcloud"

$gcloud -q beta app deploy app.yml --promote --project=$GCLOUD_PROJECT --verbosity=info
get_versions="$gcloud -q beta app versions list --project=$GCLOUD_PROJECT --filter service=cdn --sort-by Version"
version_count=`$get_versions | tail -n +2 | wc -l | awk '{ print $1; }'`
to_delete=`expr $version_count - 25`

echo "$to_delete/$version_count versions can be deleted"

if [ "$to_delete" -gt 0 ]; then
  echo "removing old versions of CDN"
  versions=`$get_versions | tail -n +2 | head -n $to_delete | awk '{ print $2; }' | tr '\n' ' '`
  $gcloud -q beta app versions delete $versions --project=$GCLOUD_PROJECT --service=cdn
fi
