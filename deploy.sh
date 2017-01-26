projects=$(echo ${GB_CDN_PROJECTS} | tr ":" "\n")

for proj in ${projects}; do
  git clone "https://github.com/groupby/${proj}.git" projects/${proj}
done

${HOME}/google-cloud-sdk/bin/gcloud -q beta app deploy app.yml --promote --project=$GCLOUD_PROJECT --verbosity=info
