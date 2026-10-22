
db.createCollection(
    'courses'
)

db.createCollection(
    'audits',
    {
      validator: {
        '$jsonSchema': {
          bsonType: 'object',
          properties: {
            info: {
              bsonType: 'object',
              required: ["code", "isGenEd"],
              properties: {
                code: { bsonType: 'string' },
                isGenEd: { bsonType: 'bool' }
              }
            },
            subAudit: { bsonType: 'array'}
          }
        }
      },
      validationLevel: 'strict',
      validationAction: 'error'
    }
)



