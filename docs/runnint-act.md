# MacOS Guide:

to test github actions on your local machine

```
brew install act
```

then run:

```
act --workflows ".github/workflows/pr-checks.yml" \
    --container-architecture linux/amd64 \
    -P ubuntu-24.04=ghcr.io/catthehacker/ubuntu:act-24.04
```
