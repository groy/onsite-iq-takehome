# onsite-iq

Greg Royan - Take home

Assumptions:
1) Loaded 50 candidates on initial load, no other candidates are added after that.
2) All candidates are listed on the screen
3) No filtering was added (by status, or search)
4) Forgot to ask what information to display for the candidates chose Name, Photo and email. Could easily expand this to include Address, Gender, Location, local
5) Rather than building a login page, defining Account details, I defaulted the logged in user to myself. Likely should have centralized the storage for that, but didn't.


Requirements:
1) Candidate data is fetched from [https://randomuser.me/api/](https://randomuser.me/api/)
2) Display candidates information for user to review
3) Uses responsive design
4) Can approve or reject candidates
5) Allow Users to write optional comment explaining the reason.
6) Persist list of approved and rejected candidates with their comments for user to review
7) Allow user to undo an approval or rejection

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Runs tests
```
yarn test
```

### Initial project generated by kyt
See [KYT Reference](https://github.com/nytimes/kyt).
