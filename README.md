# SSR performance comparison between react@17 and react@18

## react@17

```
yarn start:prod

npx autocannon -c 50 -d 10 http://localhost:4000/ --renderStatusCodes --excludeErrorStats

Running 10s test @ http://localhost:4000/
50 connections


┌─────────┬────────┬────────┬─────────┬─────────┬───────────┬───────────┬─────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%   │ 99%     │ Avg       │ Stdev     │ Max     │
├─────────┼────────┼────────┼─────────┼─────────┼───────────┼───────────┼─────────┤
│ Latency │ 275 ms │ 893 ms │ 1895 ms │ 1895 ms │ 959.28 ms │ 373.08 ms │ 2315 ms │
└─────────┴────────┴────────┴─────────┴─────────┴───────────┴───────────┴─────────┘
┌───────────┬─────┬──────┬─────────┬─────────┬───────┬─────────┬─────────┐
│ Stat      │ 1%  │ 2.5% │ 50%     │ 97.5%   │ Avg   │ Stdev   │ Min     │
├───────────┼─────┼──────┼─────────┼─────────┼───────┼─────────┼─────────┤
│ Req/Sec   │ 0   │ 0    │ 55      │ 57      │ 49.7  │ 16.59   │ 54      │
├───────────┼─────┼──────┼─────────┼─────────┼───────┼─────────┼─────────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 14.4 MB │ 14.9 MB │ 13 MB │ 4.35 MB │ 14.1 MB │
└───────────┴─────┴──────┴─────────┴─────────┴───────┴─────────┴─────────┘
┌──────┬───────┐
│ Code │ Count │
├──────┼───────┤
│ 200  │ 497   │
└──────┴───────┘

Req/Bytes counts sampled once per second.
# of samples: 10

547 requests in 10.04s, 130 MB read
```

## react@18 legacy

```
yarn start:prod

npx autocannon -c 50 -d 10 http://localhost:4000/ --renderStatusCodes --excludeErrorStats

Running 10s test @ http://localhost:4000/
50 connections


┌─────────┬────────┬────────┬─────────┬─────────┬───────────┬──────────┬─────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%   │ 99%     │ Avg       │ Stdev    │ Max     │
├─────────┼────────┼────────┼─────────┼─────────┼───────────┼──────────┼─────────┤
│ Latency │ 264 ms │ 638 ms │ 1639 ms │ 1642 ms │ 707.71 ms │ 298.2 ms │ 2275 ms │
└─────────┴────────┴────────┴─────────┴─────────┴───────────┴──────────┴─────────┘
┌───────────┬─────┬──────┬─────────┬───────┬─────────┬───────┬─────────┐
│ Stat      │ 1%  │ 2.5% │ 50%     │ 97.5% │ Avg     │ Stdev │ Min     │
├───────────┼─────┼──────┼─────────┼───────┼─────────┼───────┼─────────┤
│ Req/Sec   │ 0   │ 0    │ 75      │ 80    │ 68.41   │ 22.91 │ 73      │
├───────────┼─────┼──────┼─────────┼───────┼─────────┼───────┼─────────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 19.7 MB │ 21 MB │ 17.9 MB │ 6 MB  │ 19.1 MB │
└───────────┴─────┴──────┴─────────┴───────┴─────────┴───────┴─────────┘
┌──────┬───────┐
│ Code │ Count │
├──────┼───────┤
│ 200  │ 684   │
└──────┴───────┘

Req/Bytes counts sampled once per second.
# of samples: 10

734 requests in 10.04s, 179 MB read
```

## react@18 stream

```
yarn start:prod

npx autocannon -c 10 -d 10 http://localhost:4000/ --renderStatusCodes --excludeErrorStats

Running 10s test @ http://localhost:4000/
10 connections


┌─────────┬─────────┬─────────┬─────────┬─────────┬────────────┬────────────┬─────────┐
│ Stat    │ 2.5%    │ 50%     │ 97.5%   │ 99%     │ Avg        │ Stdev      │ Max     │
├─────────┼─────────┼─────────┼─────────┼─────────┼────────────┼────────────┼─────────┤
│ Latency │ 2020 ms │ 4803 ms │ 5759 ms │ 5759 ms │ 4343.48 ms │ 1312.16 ms │ 5759 ms │
└─────────┴─────────┴─────────┴─────────┴─────────┴────────────┴────────────┴─────────┘
┌───────────┬─────┬──────┬─────┬─────────┬────────┬─────────┬─────────┐
│ Stat      │ 1%  │ 2.5% │ 50% │ 97.5%   │ Avg    │ Stdev   │ Min     │
├───────────┼─────┼──────┼─────┼─────────┼────────┼─────────┼─────────┤
│ Req/Sec   │ 0   │ 0    │ 0   │ 7       │ 2.1    │ 2.51    │ 2       │
├───────────┼─────┼──────┼─────┼─────────┼────────┼─────────┼─────────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 0 B │ 6.32 MB │ 1.9 MB │ 2.26 MB │ 1.81 MB │
└───────────┴─────┴──────┴─────┴─────────┴────────┴─────────┴─────────┘
┌──────┬───────┐
│ Code │ Count │
├──────┼───────┤
│ 200  │ 21    │
└──────┴───────┘

Req/Bytes counts sampled once per second.
# of samples: 10

31 requests in 11.4s, 19 MB read
```

## react@18 buffering

```
yarn start:prod

npx autocannon -c 25 -d 10 http://localhost:4000/ --renderStatusCodes --excludeErrorStats

Running 10s test @ http://localhost:4000/
25 connections


┌─────────┬────────┬─────────┬─────────┬─────────┬────────────┬───────────┬─────────┐
│ Stat    │ 2.5%   │ 50%     │ 97.5%   │ 99%     │ Avg        │ Stdev     │ Max     │
├─────────┼────────┼─────────┼─────────┼─────────┼────────────┼───────────┼─────────┤
│ Latency │ 388 ms │ 1614 ms │ 1995 ms │ 3177 ms │ 1592.93 ms │ 458.14 ms │ 3550 ms │
└─────────┴────────┴─────────┴─────────┴─────────┴────────────┴───────────┴─────────┘
┌───────────┬─────┬──────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%  │ 2.5% │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────┼──────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 0   │ 0    │ 14      │ 25      │ 14.2    │ 5.83    │ 12      │
├───────────┼─────┼──────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 0 B │ 0 B  │ 3.67 MB │ 6.55 MB │ 3.72 MB │ 1.53 MB │ 3.14 MB │
└───────────┴─────┴──────┴─────────┴─────────┴─────────┴─────────┴─────────┘
┌──────┬───────┐
│ Code │ Count │
├──────┼───────┤
│ 200  │ 142   │
└──────┴───────┘

Req/Bytes counts sampled once per second.
# of samples: 10

167 requests in 10.03s, 37.2 MB read
```