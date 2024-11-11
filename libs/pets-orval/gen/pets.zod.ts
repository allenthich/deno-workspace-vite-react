/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.11
 */
import { z as zod } from 'zod';

export const updatePetBody = zod.object({
  "type": zod.enum(['dog']),
  "bark": zod.string().optional()
}).or(zod.object({
  "type": zod.enum(['cat']),
  "name": zod.string().optional()
}))

export const updatePetResponse = zod.object({
  "type": zod.enum(['dog']),
  "bark": zod.string().optional()
}).or(zod.object({
  "type": zod.enum(['cat']),
  "name": zod.string().optional()
}))


export const addPetBody = zod.object({
  "id": zod.number().optional(),
  "name": zod.string(),
  "category": zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
}).optional(),
  "photoUrls": zod.array(zod.string()),
  "tags": zod.array(zod.object({
  "id": zod.number().optional(),
  "name": zod.string().optional()
})).optional(),
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

export const addPetResponse = zod.object({
  "type": zod.enum(['dog']),
  "bark": zod.string().optional()
}).or(zod.object({
  "type": zod.enum(['cat']),
  "name": zod.string().optional()
}))


export const findPetsByStatusQueryParams = zod.object({
  "status": zod.enum(['available', 'pending', 'sold']).optional()
})

export const findPetsByStatusResponseItem = zod.object({
  "type": zod.enum(['dog']),
  "bark": zod.string().optional()
}).or(zod.object({
  "type": zod.enum(['cat']),
  "name": zod.string().optional()
}))
export const findPetsByStatusResponse = zod.array(findPetsByStatusResponseItem)


export const findPetsByTagsQueryParams = zod.object({
  "tags": zod.array(zod.string()).optional(),
  "page": zod.string().optional(),
  "pageSize": zod.string().optional()
})

export const findPetsByTagsResponseItem = zod.object({
  "type": zod.enum(['dog']),
  "bark": zod.string().optional()
}).or(zod.object({
  "type": zod.enum(['cat']),
  "name": zod.string().optional()
}))
export const findPetsByTagsResponse = zod.array(findPetsByTagsResponseItem)


export const getPetByIdParams = zod.object({
  "petId": zod.number()
})

export const getPetByIdResponse = zod.object({
  "type": zod.enum(['dog']),
  "bark": zod.string().optional()
}).or(zod.object({
  "type": zod.enum(['cat']),
  "name": zod.string().optional()
}))


export const updatePetWithFormParams = zod.object({
  "petId": zod.number()
})

export const updatePetWithFormQueryParams = zod.object({
  "name": zod.string().optional(),
  "status": zod.string().optional()
})


export const deletePetParams = zod.object({
  "petId": zod.number()
})

export const deletePetHeader = zod.object({
  "api_key": zod.string().optional()
})


export const uploadFileParams = zod.object({
  "petId": zod.number()
})

export const uploadFileQueryParams = zod.object({
  "additionalMetadata": zod.string().optional()
})

export const uploadFileResponse = zod.object({
  "code": zod.number().optional(),
  "type": zod.string().optional(),
  "message": zod.string().optional()
})


export const getInventoryResponse = zod.record(zod.string(), zod.number())


export const placeOrderBody = zod.object({
  "id": zod.number().optional(),
  "petId": zod.number().optional(),
  "quantity": zod.number().optional(),
  "shipDate": zod.string().datetime().optional(),
  "status": zod.enum(['placed', 'approved', 'delivered']).optional(),
  "http_status": zod.number().optional(),
  "complete": zod.boolean().optional()
})

export const placeOrderResponse = zod.object({
  "id": zod.number().optional(),
  "petId": zod.number().optional(),
  "quantity": zod.number().optional(),
  "shipDate": zod.string().datetime().optional(),
  "status": zod.enum(['placed', 'approved', 'delivered']).optional(),
  "http_status": zod.number().optional(),
  "complete": zod.boolean().optional()
})


export const placeOrderPatchBody = zod.object({
  "id": zod.number().optional(),
  "petId": zod.number().optional(),
  "quantity": zod.number().optional(),
  "shipDate": zod.string().datetime().optional(),
  "status": zod.enum(['placed', 'approved', 'delivered']).optional(),
  "http_status": zod.number().optional(),
  "complete": zod.boolean().optional()
})

export const placeOrderPatchResponse = zod.object({
  "id": zod.number().optional(),
  "petId": zod.number().optional(),
  "quantity": zod.number().optional(),
  "shipDate": zod.string().datetime().optional(),
  "status": zod.enum(['placed', 'approved', 'delivered']).optional(),
  "http_status": zod.number().optional(),
  "complete": zod.boolean().optional()
})


export const getOrderByIdParams = zod.object({
  "orderId": zod.number()
})

export const getOrderByIdResponse = zod.object({
  "id": zod.number().optional(),
  "petId": zod.number().optional(),
  "quantity": zod.number().optional(),
  "shipDate": zod.string().datetime().optional(),
  "status": zod.enum(['placed', 'approved', 'delivered']).optional(),
  "http_status": zod.number().optional(),
  "complete": zod.boolean().optional()
})


export const deleteOrderParams = zod.object({
  "orderId": zod.number()
})


export const createUserBody = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})


export const createUsersWithListInputBodyItem = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})
export const createUsersWithListInputBody = zod.array(createUsersWithListInputBodyItem)

export const createUsersWithListInputResponse = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})


export const loginUserQueryParams = zod.object({
  "username": zod.string().optional(),
  "password": zod.string().optional()
})

export const loginUserResponse = zod.string()



export const getUserByNameParams = zod.object({
  "username": zod.string()
})

export const getUserByNameResponse = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})


export const updateUserParams = zod.object({
  "username": zod.string()
})

export const updateUserBody = zod.object({
  "id": zod.number().optional(),
  "username": zod.string().optional(),
  "firstName": zod.string().optional(),
  "lastName": zod.string().optional(),
  "email": zod.string().optional(),
  "password": zod.string().optional(),
  "phone": zod.string().optional(),
  "userStatus": zod.number().optional()
})


export const deleteUserParams = zod.object({
  "username": zod.string().nullable()
})
