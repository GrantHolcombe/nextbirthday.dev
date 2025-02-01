This is a Wedding Website Template

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Setup Postgres server

```sql
create table public.guests
(
    guest_id     serial
        primary key,
    first_name   varchar(255) not null,
    last_name    varchar(255) not null,
    rsvp_status  varchar(255) default 'Pending'::character varying,
    notes        text,
    active       boolean      default true,
    party_number integer,
    host         char
);

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

TBD
