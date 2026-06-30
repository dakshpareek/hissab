# Run snapshot — andhra-pradesh-dakshin-energy-plant-fire-20260623

- Run timestamp: 2026-06-30 19:53:33 IST
- Queue claim: `andhra-pradesh-dakshin-energy-plant-fire-20260623`
- Queue source URL: `https://news.google.com/rss/articles/CBMinwJBVV95cUxNRjQ5RUVWMkVlUFZJZFdWczlObFBTUW9GT2RhZHNGSUpfc3dxbGw5QlhqUmFFUm8zb1dNeWt0SmJ0ZC1PVU1CNTJBWm5HcVhTZS0yLVppal94RkFBZTlvNEQxUDN5SnhSeTdQbDI1a0lXTC1rMHQydTQtbHF0R3VPT2FkbTlwV3hYaksyVnY2VElCUGxvOWlPLTl2S0FnTl81ejZwSHlXSWdDcWI5SGRzeTdjY2xFT3htQmZLc2JOTmdheFlTZGN6RkhrRkpkcGxOZS1IaXpqSU1ya1JRQllTZEN2cWNidzZnb0JCT0t4eHVWaUthYUJERFlBbFl3b0VPbUE3WF9vM3g1cVUwQ3Q3QTBTVTRFd3NaX0hnY0tOONIBpAJBVV95cUxPSTJGcXBVZ0FRMzFaMmlFYm8zM0hmM09VaEowU0FmSHVIU3hGNkJJa2NGbTJIYnVsUUNGWHh3UG1HODdsYmR2TWlUOUxCemk0ZUNpUTRDQlZPTHZKdGE1NWZ0RThiNTlhd1BwWlVFRjE0NzZhNllIRHBCcVJGVUljWUprQ2g1ejA0M3VpZVljSURmWkdJTzFSa0R3bmJMTjFaRGp1bVJFNFU0bU5RQ2syWlA3dzV3TTBrZ1BTanBQYTZuX3dxZnJFR0tzeldBS3RXYTJ5Qk43YUZTWk0wVi1w?oc=5`
- Duplicate check: no exact or near-duplicate case file found in `content/cases` for Dakshin Energy / Parawada / Visakhapatnam.
- Snapshot: new-case flow selected because no existing case file matched the queue signal.
- Frozen sources:
  - exact-title RSS fallback: `references/cases/andhra-pradesh-dakshin-energy-plant-fire-20260623/2026-06-30/google-news-rss-search-toi-headline.txt` (`sha256: 5b570d2be6990b2a9b9a420a2deb8970598767d1a56e95a10a903c02b0110bd0`)
  - broader Dakshin Energy cluster: `references/cases/andhra-pradesh-dakshin-energy-plant-fire-20260623/2026-06-30/google-news-rss-search-dakshin-energy.txt` (`sha256: 1ad2350f857798f0cd6474fc14f9f9c49d68fda65faa96aa106aecc0d31249a6`)
  - The Hindu headline search: `references/cases/andhra-pradesh-dakshin-energy-plant-fire-20260623/2026-06-30/google-news-rss-search-hindu-headline.txt` (`sha256: 8047393fc06eb626b8a9c53144980c45084fadcac0336b39757486a00dfadeba`)
- Fallback note: the queue-supplied Google News article wrapper returned HTTP 400, so Google News RSS search feeds were used as the frozen source artifacts.
- Identity gate: MATCH.
- Extraction: fatal industrial fire; deaths = 2; injured = null; accused_count = null; status = no-action.
- Validation: YAML parsed successfully and Hugo build completed successfully.
