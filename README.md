# Example app with next-sass

This example demonstrates how to use Next.js' built-in Global Sass/Scss imports and Component-Level Sass/Scss modules support.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-next-sass)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-next-sass with-next-sass-app
# or
yarn create next-app --example with-next-sass with-next-sass-app
```

Run production build with:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).


## Class Names!

.ba-mc
  - .ba-mc__header
    - .ba-mc__nav
      - .ba-mc__nav_month
      - .ba-mc__nav_buttons
        - .ba-mc__nav_button
        - .ba-mc__nav_button--prev
        - .ba-mc__nav_button--next
  - .ba-mc__calendar
    - .ba-mc__day_names
      - .ba-mc__day_name
    - .ba-mc__days
      - .ba-mc__day
      - .ba-mc__day--selected
        - .ba-mc__date
        - .ba-mc__date_today
        - .ba-mc__date_notAvailable
        - .ba-mc__date_notAvailable--start
        - .ba-mc__date_notAvailable--end
          - .ba-mc__date_dot
          - .ba-mc__date_dot--hasEvent
  - .ba-mc__selected_day
    - .ba-mc__selected_date
    - .ba-mc__selected_events
      - .ba-mc__block_event
      - .ba-mc__block_event--task
      - .ba-mc__block_event--notAvailable
      - .ba-mc__dot_event
        - .ba-mc__dot_event__time
        - .ba-mc__dot_event__title

  - .ba-mc__footer