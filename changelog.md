# The Authentication Update (11/08/2021)

- Main features:
  - Add Firebase user/email authentication
  - Add `/auth` path with login form

# The Firebase Update (11/02/2021)

- Main features:
  - Created initial integration of Firebase DB (AngularFire) in `database.service.ts`
- Bonus features:
  - Shows data from backend in `listings` from new `database.service.ts`

# The POST update (10/26/2021)

- Main features:
  - Added a new `/listings/new` view that has a form to add a new listing
- Bonus features:
  - Changed the way that the `listing` model stored IDs and the database interaction therin in `job-listings.component`

# The RTDB update (10/19/2021)

- Main features:
  - Refactored the job listing information in the `job-listings.component.ts` to now grab from a new `listings.service.ts` that provides realtime data

# The ACTUAL data update (10/05/2021)

- Main features:
  - Refactored the user information in the `navbar` to obtain data from a firebase backend database

# The model update (09/28/2021)

- Main features:
  - Created a new `listing-card` component that modularizes the job listing's listing card
  - Ported the old data model from `mock-listings`/`listings.ts` to Angular's native model layout
  - Rebound everything in `job-listings.compontent.html`

# The routing update (09/21/2021)

- Main features:
  - Integrated routing backend from Angular core
  - Added view scaffolding and routes for the following pages:
    - Certifications
    - Front page
    - Reviews
    - Salaries
- Bonus features:
  - Modified styles to look more like source
  - Changed searchbar to be more modular and reusable for job listings view

# The data update (09/14/2021)

- Main features:
  - Updated main navbar to have linked Angular data
  - Added cards for job listings with linked Angular data
  - Added placeholder div for more information on each card

# The style update (09/06/2021)

- Main features:
  - Updated title of website to look less like a default app
  - Added adequate icons
  - Added searchbar
    - Added search options
- Bonus features:
  - Add images for reference (i'm tired of pulling up indeed.com every ten seconds)

# Initial release (08/25/2021)

- Main features:
  - Added navbar
  - Added footer
- Bonus features:
  - Add prettier for code standardization
