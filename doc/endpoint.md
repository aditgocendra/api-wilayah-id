# Endpoint

### Province

```
GET /api/province
```

Response Body

```json
[
  {
    "id": "1",
    "name": "province_name"
  },
  {
    "id": "2",
    "name": "province_name"
  }
]
```

### Regencies

```
GET /api/regencies/:provinceId
```

Response Body

```json
[
  {
    "id": "1",
    "name": "regencies_name",
    "provinceId": "provinceId"
  },
  {
    "id": "2",
    "name": "regencies_name",
    "provinceId": "provinceId"
  }
]
```

### Districts

```
GET /api/districts/:regenciesId
```

Response Body

```json
[
  {
    "id": "1",
    "name": "district_name",
    "regenciesId": "regenciesId"
  },
  {
    "id": "2",
    "name": "district_name",
    "regenciesId": "regenciesId"
  }
]
```

### Villages

```
GET /api/villages/:districtId
```

Response Body

```json
[
  {
    "id": "1",
    "name": "village_name",
    "districtId": "districtId"
  },
  {
    "id": "2",
    "name": "village_name",
    "districtId": "districtId"
  }
]
```
