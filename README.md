# Magnitude Demo Repo

Basic repository to demonstrate how to set up Magnitude test cases.

## Running locally
1. Clone repo:
```
git clone https://github.com/magnitudedev/magnitude-demo-repo.git
```

2. Install deps
```
npm i
```

3. Start local server (in a separate terminal)
```
npm run dev
```

3. Run Magnitude against the local server
```
npx magnitude
```

> Make sure you have a MAGNITUDE_API_KEY in your env, which you grab here https://app.magnitude.run/signup


## GitHub Actions
See [magnitude.yaml](.github/workflows/magnitude.yaml) for an example of how to run your Magnitude test suite with GitHub Actions.

