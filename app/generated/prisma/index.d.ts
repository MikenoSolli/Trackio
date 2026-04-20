
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model alert
 * 
 */
export type alert = $Result.DefaultSelection<Prisma.$alertPayload>
/**
 * Model companies
 * 
 */
export type companies = $Result.DefaultSelection<Prisma.$companiesPayload>
/**
 * Model dailySummary
 * 
 */
export type dailySummary = $Result.DefaultSelection<Prisma.$dailySummaryPayload>
/**
 * Model driver
 * 
 */
export type driver = $Result.DefaultSelection<Prisma.$driverPayload>
/**
 * Model maintenance
 * 
 */
export type maintenance = $Result.DefaultSelection<Prisma.$maintenancePayload>
/**
 * Model maintenance_data
 * 
 */
export type maintenance_data = $Result.DefaultSelection<Prisma.$maintenance_dataPayload>
/**
 * Model status
 * 
 */
export type status = $Result.DefaultSelection<Prisma.$statusPayload>
/**
 * Model trip
 * 
 */
export type trip = $Result.DefaultSelection<Prisma.$tripPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model vehicle
 * 
 */
export type vehicle = $Result.DefaultSelection<Prisma.$vehiclePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const vehicle_Type: {
  TRACTOR: 'TRACTOR',
  TRUCK: 'TRUCK',
  CAR: 'CAR',
  BUS: 'BUS',
  MOTORCYCLE: 'MOTORCYCLE'
};

export type vehicle_Type = (typeof vehicle_Type)[keyof typeof vehicle_Type]


export const alert_type: {
  SPEEDING: 'SPEEDING',
  GEOFENCE_EXIT: 'GEOFENCE_EXIT',
  LOW_FUEL: 'LOW_FUEL',
  MAINTENANCE_DUE: 'MAINTENANCE_DUE',
  FAULT: 'FAULT',
  STOP: 'STOP'
};

export type alert_type = (typeof alert_type)[keyof typeof alert_type]


export const alert_severity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type alert_severity = (typeof alert_severity)[keyof typeof alert_severity]


export const status_state: {
  ACTIVE: 'ACTIVE',
  IDLE: 'IDLE',
  OFFLINE: 'OFFLINE'
};

export type status_state = (typeof status_state)[keyof typeof status_state]


export const users_role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type users_role = (typeof users_role)[keyof typeof users_role]

}

export type vehicle_Type = $Enums.vehicle_Type

export const vehicle_Type: typeof $Enums.vehicle_Type

export type alert_type = $Enums.alert_type

export const alert_type: typeof $Enums.alert_type

export type alert_severity = $Enums.alert_severity

export const alert_severity: typeof $Enums.alert_severity

export type status_state = $Enums.status_state

export const status_state: typeof $Enums.status_state

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Alerts
 * const alerts = await prisma.alert.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Alerts
   * const alerts = await prisma.alert.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alert`: Exposes CRUD operations for the **alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.alertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailySummary`: Exposes CRUD operations for the **dailySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailySummaries
    * const dailySummaries = await prisma.dailySummary.findMany()
    * ```
    */
  get dailySummary(): Prisma.dailySummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.driverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **maintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenances
    * const maintenances = await prisma.maintenance.findMany()
    * ```
    */
  get maintenance(): Prisma.maintenanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance_data`: Exposes CRUD operations for the **maintenance_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenance_data
    * const maintenance_data = await prisma.maintenance_data.findMany()
    * ```
    */
  get maintenance_data(): Prisma.maintenance_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.tripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.vehicleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    alert: 'alert',
    companies: 'companies',
    dailySummary: 'dailySummary',
    driver: 'driver',
    maintenance: 'maintenance',
    maintenance_data: 'maintenance_data',
    status: 'status',
    trip: 'trip',
    user: 'user',
    vehicle: 'vehicle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alert" | "companies" | "dailySummary" | "driver" | "maintenance" | "maintenance_data" | "status" | "trip" | "user" | "vehicle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      alert: {
        payload: Prisma.$alertPayload<ExtArgs>
        fields: Prisma.alertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload>
          }
          findFirst: {
            args: Prisma.alertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload>
          }
          findMany: {
            args: Prisma.alertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload>[]
          }
          create: {
            args: Prisma.alertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload>
          }
          createMany: {
            args: Prisma.alertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.alertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload>
          }
          update: {
            args: Prisma.alertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload>
          }
          deleteMany: {
            args: Prisma.alertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.alertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.alertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.alertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      companies: {
        payload: Prisma.$companiesPayload<ExtArgs>
        fields: Prisma.companiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findFirst: {
            args: Prisma.companiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findMany: {
            args: Prisma.companiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          create: {
            args: Prisma.companiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          createMany: {
            args: Prisma.companiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.companiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          update: {
            args: Prisma.companiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          deleteMany: {
            args: Prisma.companiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.companiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.companiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.companiesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      dailySummary: {
        payload: Prisma.$dailySummaryPayload<ExtArgs>
        fields: Prisma.dailySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dailySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dailySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload>
          }
          findFirst: {
            args: Prisma.dailySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dailySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload>
          }
          findMany: {
            args: Prisma.dailySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload>[]
          }
          create: {
            args: Prisma.dailySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload>
          }
          createMany: {
            args: Prisma.dailySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dailySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload>
          }
          update: {
            args: Prisma.dailySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload>
          }
          deleteMany: {
            args: Prisma.dailySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dailySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dailySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dailySummaryPayload>
          }
          aggregate: {
            args: Prisma.DailySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailySummary>
          }
          groupBy: {
            args: Prisma.dailySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.dailySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<DailySummaryCountAggregateOutputType> | number
          }
        }
      }
      driver: {
        payload: Prisma.$driverPayload<ExtArgs>
        fields: Prisma.driverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.driverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.driverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          findFirst: {
            args: Prisma.driverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.driverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          findMany: {
            args: Prisma.driverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>[]
          }
          create: {
            args: Prisma.driverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          createMany: {
            args: Prisma.driverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.driverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          update: {
            args: Prisma.driverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          deleteMany: {
            args: Prisma.driverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.driverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.driverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.driverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.driverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      maintenance: {
        payload: Prisma.$maintenancePayload<ExtArgs>
        fields: Prisma.maintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maintenanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maintenanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          findFirst: {
            args: Prisma.maintenanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maintenanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          findMany: {
            args: Prisma.maintenanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>[]
          }
          create: {
            args: Prisma.maintenanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          createMany: {
            args: Prisma.maintenanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.maintenanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          update: {
            args: Prisma.maintenanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          deleteMany: {
            args: Prisma.maintenanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.maintenanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.maintenanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance>
          }
          groupBy: {
            args: Prisma.maintenanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.maintenanceCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number
          }
        }
      }
      maintenance_data: {
        payload: Prisma.$maintenance_dataPayload<ExtArgs>
        fields: Prisma.maintenance_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maintenance_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maintenance_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload>
          }
          findFirst: {
            args: Prisma.maintenance_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maintenance_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload>
          }
          findMany: {
            args: Prisma.maintenance_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload>[]
          }
          create: {
            args: Prisma.maintenance_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload>
          }
          createMany: {
            args: Prisma.maintenance_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.maintenance_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload>
          }
          update: {
            args: Prisma.maintenance_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload>
          }
          deleteMany: {
            args: Prisma.maintenance_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.maintenance_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.maintenance_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_dataPayload>
          }
          aggregate: {
            args: Prisma.Maintenance_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance_data>
          }
          groupBy: {
            args: Prisma.maintenance_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Maintenance_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.maintenance_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Maintenance_dataCountAggregateOutputType> | number
          }
        }
      }
      status: {
        payload: Prisma.$statusPayload<ExtArgs>
        fields: Prisma.statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findFirst: {
            args: Prisma.statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findMany: {
            args: Prisma.statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          create: {
            args: Prisma.statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          createMany: {
            args: Prisma.statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          update: {
            args: Prisma.statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          deleteMany: {
            args: Prisma.statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.statusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      trip: {
        payload: Prisma.$tripPayload<ExtArgs>
        fields: Prisma.tripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          findFirst: {
            args: Prisma.tripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          findMany: {
            args: Prisma.tripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>[]
          }
          create: {
            args: Prisma.tripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          createMany: {
            args: Prisma.tripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          update: {
            args: Prisma.tripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          deleteMany: {
            args: Prisma.tripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.tripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.tripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      vehicle: {
        payload: Prisma.$vehiclePayload<ExtArgs>
        fields: Prisma.vehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          findFirst: {
            args: Prisma.vehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          findMany: {
            args: Prisma.vehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>[]
          }
          create: {
            args: Prisma.vehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          createMany: {
            args: Prisma.vehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          update: {
            args: Prisma.vehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          deleteMany: {
            args: Prisma.vehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.vehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    alert?: alertOmit
    companies?: companiesOmit
    dailySummary?: dailySummaryOmit
    driver?: driverOmit
    maintenance?: maintenanceOmit
    maintenance_data?: maintenance_dataOmit
    status?: statusOmit
    trip?: tripOmit
    user?: userOmit
    vehicle?: vehicleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    driver: number
    users: number
    vehicle: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | CompaniesCountOutputTypeCountDriverArgs
    users?: boolean | CompaniesCountOutputTypeCountUsersArgs
    vehicle?: boolean | CompaniesCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountDriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: driverWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    alert: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | DriverCountOutputTypeCountAlertArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alertWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    vehicle: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | UserCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    alert: number
    dailysummary: number
    maintenance: number
    maintenance_data: number
    status: number
    trip: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | VehicleCountOutputTypeCountAlertArgs
    dailysummary?: boolean | VehicleCountOutputTypeCountDailysummaryArgs
    maintenance?: boolean | VehicleCountOutputTypeCountMaintenanceArgs
    maintenance_data?: boolean | VehicleCountOutputTypeCountMaintenance_dataArgs
    status?: boolean | VehicleCountOutputTypeCountStatusArgs
    trip?: boolean | VehicleCountOutputTypeCountTripArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alertWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountDailysummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dailySummaryWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenanceWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenance_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenance_dataWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountTripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripWhereInput
  }


  /**
   * Models
   */

  /**
   * Model alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: $Enums.alert_type | null
    severity: $Enums.alert_severity | null
    message: string | null
    isResolved: boolean | null
    createdAt: Date | null
    DriverId: string | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: $Enums.alert_type | null
    severity: $Enums.alert_severity | null
    message: string | null
    isResolved: boolean | null
    createdAt: Date | null
    DriverId: string | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    vehicleId: number
    type: number
    severity: number
    message: number
    isResolved: number
    createdAt: number
    DriverId: number
    _all: number
  }


  export type AlertMinAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    severity?: true
    message?: true
    isResolved?: true
    createdAt?: true
    DriverId?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    severity?: true
    message?: true
    isResolved?: true
    createdAt?: true
    DriverId?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    severity?: true
    message?: true
    isResolved?: true
    createdAt?: true
    DriverId?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alert to aggregate.
     */
    where?: alertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alerts to fetch.
     */
    orderBy?: alertOrderByWithRelationInput | alertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type alertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alertWhereInput
    orderBy?: alertOrderByWithAggregationInput | alertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: alertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    vehicleId: string
    type: $Enums.alert_type
    severity: $Enums.alert_severity
    message: string
    isResolved: boolean
    createdAt: Date
    DriverId: string
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends alertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type alertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    severity?: boolean
    message?: boolean
    isResolved?: boolean
    createdAt?: boolean
    DriverId?: boolean
    driver?: boolean | driverDefaultArgs<ExtArgs>
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>



  export type alertSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    severity?: boolean
    message?: boolean
    isResolved?: boolean
    createdAt?: boolean
    DriverId?: boolean
  }

  export type alertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "type" | "severity" | "message" | "isResolved" | "createdAt" | "DriverId", ExtArgs["result"]["alert"]>
  export type alertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | driverDefaultArgs<ExtArgs>
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }

  export type $alertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alert"
    objects: {
      driver: Prisma.$driverPayload<ExtArgs>
      vehicle: Prisma.$vehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      type: $Enums.alert_type
      severity: $Enums.alert_severity
      message: string
      isResolved: boolean
      createdAt: Date
      DriverId: string
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type alertGetPayload<S extends boolean | null | undefined | alertDefaultArgs> = $Result.GetResult<Prisma.$alertPayload, S>

  type alertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface alertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alert'], meta: { name: 'alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {alertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alertFindUniqueArgs>(args: SelectSubset<T, alertFindUniqueArgs<ExtArgs>>): Prisma__alertClient<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alertFindUniqueOrThrowArgs>(args: SelectSubset<T, alertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alertClient<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alertFindFirstArgs>(args?: SelectSubset<T, alertFindFirstArgs<ExtArgs>>): Prisma__alertClient<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alertFindFirstOrThrowArgs>(args?: SelectSubset<T, alertFindFirstOrThrowArgs<ExtArgs>>): Prisma__alertClient<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends alertFindManyArgs>(args?: SelectSubset<T, alertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {alertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends alertCreateArgs>(args: SelectSubset<T, alertCreateArgs<ExtArgs>>): Prisma__alertClient<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {alertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alertCreateManyArgs>(args?: SelectSubset<T, alertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alert.
     * @param {alertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends alertDeleteArgs>(args: SelectSubset<T, alertDeleteArgs<ExtArgs>>): Prisma__alertClient<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {alertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alertUpdateArgs>(args: SelectSubset<T, alertUpdateArgs<ExtArgs>>): Prisma__alertClient<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {alertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alertDeleteManyArgs>(args?: SelectSubset<T, alertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alertUpdateManyArgs>(args: SelectSubset<T, alertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {alertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends alertUpsertArgs>(args: SelectSubset<T, alertUpsertArgs<ExtArgs>>): Prisma__alertClient<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends alertCountArgs>(
      args?: Subset<T, alertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends alertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alertGroupByArgs['orderBy'] }
        : { orderBy?: alertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, alertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alert model
   */
  readonly fields: alertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends driverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, driverDefaultArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehicleDefaultArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the alert model
   */
  interface alertFieldRefs {
    readonly id: FieldRef<"alert", 'String'>
    readonly vehicleId: FieldRef<"alert", 'String'>
    readonly type: FieldRef<"alert", 'alert_type'>
    readonly severity: FieldRef<"alert", 'alert_severity'>
    readonly message: FieldRef<"alert", 'String'>
    readonly isResolved: FieldRef<"alert", 'Boolean'>
    readonly createdAt: FieldRef<"alert", 'DateTime'>
    readonly DriverId: FieldRef<"alert", 'String'>
  }
    

  // Custom InputTypes
  /**
   * alert findUnique
   */
  export type alertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * Filter, which alert to fetch.
     */
    where: alertWhereUniqueInput
  }

  /**
   * alert findUniqueOrThrow
   */
  export type alertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * Filter, which alert to fetch.
     */
    where: alertWhereUniqueInput
  }

  /**
   * alert findFirst
   */
  export type alertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * Filter, which alert to fetch.
     */
    where?: alertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alerts to fetch.
     */
    orderBy?: alertOrderByWithRelationInput | alertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alerts.
     */
    cursor?: alertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * alert findFirstOrThrow
   */
  export type alertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * Filter, which alert to fetch.
     */
    where?: alertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alerts to fetch.
     */
    orderBy?: alertOrderByWithRelationInput | alertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alerts.
     */
    cursor?: alertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * alert findMany
   */
  export type alertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * Filter, which alerts to fetch.
     */
    where?: alertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alerts to fetch.
     */
    orderBy?: alertOrderByWithRelationInput | alertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alerts.
     */
    cursor?: alertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * alert create
   */
  export type alertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * The data needed to create a alert.
     */
    data: XOR<alertCreateInput, alertUncheckedCreateInput>
  }

  /**
   * alert createMany
   */
  export type alertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alerts.
     */
    data: alertCreateManyInput | alertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alert update
   */
  export type alertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * The data needed to update a alert.
     */
    data: XOR<alertUpdateInput, alertUncheckedUpdateInput>
    /**
     * Choose, which alert to update.
     */
    where: alertWhereUniqueInput
  }

  /**
   * alert updateMany
   */
  export type alertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alerts.
     */
    data: XOR<alertUpdateManyMutationInput, alertUncheckedUpdateManyInput>
    /**
     * Filter which alerts to update
     */
    where?: alertWhereInput
    /**
     * Limit how many alerts to update.
     */
    limit?: number
  }

  /**
   * alert upsert
   */
  export type alertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * The filter to search for the alert to update in case it exists.
     */
    where: alertWhereUniqueInput
    /**
     * In case the alert found by the `where` argument doesn't exist, create a new alert with this data.
     */
    create: XOR<alertCreateInput, alertUncheckedCreateInput>
    /**
     * In case the alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alertUpdateInput, alertUncheckedUpdateInput>
  }

  /**
   * alert delete
   */
  export type alertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    /**
     * Filter which alert to delete.
     */
    where: alertWhereUniqueInput
  }

  /**
   * alert deleteMany
   */
  export type alertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alerts to delete
     */
    where?: alertWhereInput
    /**
     * Limit how many alerts to delete.
     */
    limit?: number
  }

  /**
   * alert without action
   */
  export type alertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
  }


  /**
   * Model companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesAvgAggregateOutputType = {
    id: number | null
  }

  export type CompaniesSumAggregateOutputType = {
    id: number | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompaniesAvgAggregateInputType = {
    id?: true
  }

  export type CompaniesSumAggregateInputType = {
    id?: true
  }

  export type CompaniesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompaniesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompaniesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type companiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithAggregationInput | companiesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _avg?: CompaniesAvgAggregateInputType
    _sum?: CompaniesSumAggregateInputType
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: number
    name: string
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends companiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | companies$driverArgs<ExtArgs>
    users?: boolean | companies$usersArgs<ExtArgs>
    vehicle?: boolean | companies$vehicleArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>



  export type companiesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type companiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["companies"]>
  export type companiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | companies$driverArgs<ExtArgs>
    users?: boolean | companies$usersArgs<ExtArgs>
    vehicle?: boolean | companies$vehicleArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $companiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companies"
    objects: {
      driver: Prisma.$driverPayload<ExtArgs>[]
      users: Prisma.$userPayload<ExtArgs>[]
      vehicle: Prisma.$vehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type companiesGetPayload<S extends boolean | null | undefined | companiesDefaultArgs> = $Result.GetResult<Prisma.$companiesPayload, S>

  type companiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companies'], meta: { name: 'companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companiesFindUniqueArgs>(args: SelectSubset<T, companiesFindUniqueArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs>(args: SelectSubset<T, companiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companiesFindFirstArgs>(args?: SelectSubset<T, companiesFindFirstArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs>(args?: SelectSubset<T, companiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companiesFindManyArgs>(args?: SelectSubset<T, companiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends companiesCreateArgs>(args: SelectSubset<T, companiesCreateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companiesCreateManyArgs>(args?: SelectSubset<T, companiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends companiesDeleteArgs>(args: SelectSubset<T, companiesDeleteArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companiesUpdateArgs>(args: SelectSubset<T, companiesUpdateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companiesDeleteManyArgs>(args?: SelectSubset<T, companiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companiesUpdateManyArgs>(args: SelectSubset<T, companiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends companiesUpsertArgs>(args: SelectSubset<T, companiesUpsertArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companiesGroupByArgs['orderBy'] }
        : { orderBy?: companiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companies model
   */
  readonly fields: companiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends companies$driverArgs<ExtArgs> = {}>(args?: Subset<T, companies$driverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends companies$usersArgs<ExtArgs> = {}>(args?: Subset<T, companies$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicle<T extends companies$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, companies$vehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the companies model
   */
  interface companiesFieldRefs {
    readonly id: FieldRef<"companies", 'Int'>
    readonly name: FieldRef<"companies", 'String'>
    readonly email: FieldRef<"companies", 'String'>
    readonly phone: FieldRef<"companies", 'String'>
    readonly address: FieldRef<"companies", 'String'>
    readonly createdAt: FieldRef<"companies", 'DateTime'>
    readonly updatedAt: FieldRef<"companies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * companies findUnique
   */
  export type companiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findFirst
   */
  export type companiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findMany
   */
  export type companiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies create
   */
  export type companiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to create a companies.
     */
    data: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }

  /**
   * companies createMany
   */
  export type companiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies update
   */
  export type companiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies upsert
   */
  export type companiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }

  /**
   * companies delete
   */
  export type companiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * companies.driver
   */
  export type companies$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    where?: driverWhereInput
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    cursor?: driverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * companies.users
   */
  export type companies$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * companies.vehicle
   */
  export type companies$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    where?: vehicleWhereInput
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    cursor?: vehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * companies without action
   */
  export type companiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
  }


  /**
   * Model dailySummary
   */

  export type AggregateDailySummary = {
    _count: DailySummaryCountAggregateOutputType | null
    _avg: DailySummaryAvgAggregateOutputType | null
    _sum: DailySummarySumAggregateOutputType | null
    _min: DailySummaryMinAggregateOutputType | null
    _max: DailySummaryMaxAggregateOutputType | null
  }

  export type DailySummaryAvgAggregateOutputType = {
    modeFuelLevel: number | null
    modeOilPressure: number | null
    modeBattVoltage: number | null
    modeEngineLoad: number | null
    modeSpeed: number | null
    modeEngineRPM: number | null
    modeEngineTemp: number | null
    totalDistance: number | null
    totalFuelUsed: number | null
    totalEngineHrs: number | null
    IdleTime: number | null
    RunningTime: number | null
    sampleCount: number | null
  }

  export type DailySummarySumAggregateOutputType = {
    modeFuelLevel: number | null
    modeOilPressure: number | null
    modeBattVoltage: number | null
    modeEngineLoad: number | null
    modeSpeed: number | null
    modeEngineRPM: number | null
    modeEngineTemp: number | null
    totalDistance: number | null
    totalFuelUsed: number | null
    totalEngineHrs: number | null
    IdleTime: number | null
    RunningTime: number | null
    sampleCount: number | null
  }

  export type DailySummaryMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    date: Date | null
    modeFuelLevel: number | null
    modeOilPressure: number | null
    modeBattVoltage: number | null
    modeEngineLoad: number | null
    modeSpeed: number | null
    modeEngineRPM: number | null
    modeEngineTemp: number | null
    totalDistance: number | null
    totalFuelUsed: number | null
    totalEngineHrs: number | null
    IdleTime: number | null
    RunningTime: number | null
    sampleCount: number | null
    updatedAt: Date | null
  }

  export type DailySummaryMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    date: Date | null
    modeFuelLevel: number | null
    modeOilPressure: number | null
    modeBattVoltage: number | null
    modeEngineLoad: number | null
    modeSpeed: number | null
    modeEngineRPM: number | null
    modeEngineTemp: number | null
    totalDistance: number | null
    totalFuelUsed: number | null
    totalEngineHrs: number | null
    IdleTime: number | null
    RunningTime: number | null
    sampleCount: number | null
    updatedAt: Date | null
  }

  export type DailySummaryCountAggregateOutputType = {
    id: number
    vehicleId: number
    date: number
    modeFuelLevel: number
    modeOilPressure: number
    modeBattVoltage: number
    modeEngineLoad: number
    modeSpeed: number
    modeEngineRPM: number
    modeEngineTemp: number
    totalDistance: number
    totalFuelUsed: number
    totalEngineHrs: number
    IdleTime: number
    RunningTime: number
    sampleCount: number
    updatedAt: number
    _all: number
  }


  export type DailySummaryAvgAggregateInputType = {
    modeFuelLevel?: true
    modeOilPressure?: true
    modeBattVoltage?: true
    modeEngineLoad?: true
    modeSpeed?: true
    modeEngineRPM?: true
    modeEngineTemp?: true
    totalDistance?: true
    totalFuelUsed?: true
    totalEngineHrs?: true
    IdleTime?: true
    RunningTime?: true
    sampleCount?: true
  }

  export type DailySummarySumAggregateInputType = {
    modeFuelLevel?: true
    modeOilPressure?: true
    modeBattVoltage?: true
    modeEngineLoad?: true
    modeSpeed?: true
    modeEngineRPM?: true
    modeEngineTemp?: true
    totalDistance?: true
    totalFuelUsed?: true
    totalEngineHrs?: true
    IdleTime?: true
    RunningTime?: true
    sampleCount?: true
  }

  export type DailySummaryMinAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    modeFuelLevel?: true
    modeOilPressure?: true
    modeBattVoltage?: true
    modeEngineLoad?: true
    modeSpeed?: true
    modeEngineRPM?: true
    modeEngineTemp?: true
    totalDistance?: true
    totalFuelUsed?: true
    totalEngineHrs?: true
    IdleTime?: true
    RunningTime?: true
    sampleCount?: true
    updatedAt?: true
  }

  export type DailySummaryMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    modeFuelLevel?: true
    modeOilPressure?: true
    modeBattVoltage?: true
    modeEngineLoad?: true
    modeSpeed?: true
    modeEngineRPM?: true
    modeEngineTemp?: true
    totalDistance?: true
    totalFuelUsed?: true
    totalEngineHrs?: true
    IdleTime?: true
    RunningTime?: true
    sampleCount?: true
    updatedAt?: true
  }

  export type DailySummaryCountAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    modeFuelLevel?: true
    modeOilPressure?: true
    modeBattVoltage?: true
    modeEngineLoad?: true
    modeSpeed?: true
    modeEngineRPM?: true
    modeEngineTemp?: true
    totalDistance?: true
    totalFuelUsed?: true
    totalEngineHrs?: true
    IdleTime?: true
    RunningTime?: true
    sampleCount?: true
    updatedAt?: true
    _all?: true
  }

  export type DailySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dailySummary to aggregate.
     */
    where?: dailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dailySummaries to fetch.
     */
    orderBy?: dailySummaryOrderByWithRelationInput | dailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dailySummaries
    **/
    _count?: true | DailySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailySummaryMaxAggregateInputType
  }

  export type GetDailySummaryAggregateType<T extends DailySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateDailySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailySummary[P]>
      : GetScalarType<T[P], AggregateDailySummary[P]>
  }




  export type dailySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dailySummaryWhereInput
    orderBy?: dailySummaryOrderByWithAggregationInput | dailySummaryOrderByWithAggregationInput[]
    by: DailySummaryScalarFieldEnum[] | DailySummaryScalarFieldEnum
    having?: dailySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailySummaryCountAggregateInputType | true
    _avg?: DailySummaryAvgAggregateInputType
    _sum?: DailySummarySumAggregateInputType
    _min?: DailySummaryMinAggregateInputType
    _max?: DailySummaryMaxAggregateInputType
  }

  export type DailySummaryGroupByOutputType = {
    id: string
    vehicleId: string
    date: Date
    modeFuelLevel: number | null
    modeOilPressure: number | null
    modeBattVoltage: number | null
    modeEngineLoad: number | null
    modeSpeed: number | null
    modeEngineRPM: number | null
    modeEngineTemp: number | null
    totalDistance: number
    totalFuelUsed: number
    totalEngineHrs: number
    IdleTime: number
    RunningTime: number
    sampleCount: number
    updatedAt: Date
    _count: DailySummaryCountAggregateOutputType | null
    _avg: DailySummaryAvgAggregateOutputType | null
    _sum: DailySummarySumAggregateOutputType | null
    _min: DailySummaryMinAggregateOutputType | null
    _max: DailySummaryMaxAggregateOutputType | null
  }

  type GetDailySummaryGroupByPayload<T extends dailySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], DailySummaryGroupByOutputType[P]>
        }
      >
    >


  export type dailySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    date?: boolean
    modeFuelLevel?: boolean
    modeOilPressure?: boolean
    modeBattVoltage?: boolean
    modeEngineLoad?: boolean
    modeSpeed?: boolean
    modeEngineRPM?: boolean
    modeEngineTemp?: boolean
    totalDistance?: boolean
    totalFuelUsed?: boolean
    totalEngineHrs?: boolean
    IdleTime?: boolean
    RunningTime?: boolean
    sampleCount?: boolean
    updatedAt?: boolean
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySummary"]>



  export type dailySummarySelectScalar = {
    id?: boolean
    vehicleId?: boolean
    date?: boolean
    modeFuelLevel?: boolean
    modeOilPressure?: boolean
    modeBattVoltage?: boolean
    modeEngineLoad?: boolean
    modeSpeed?: boolean
    modeEngineRPM?: boolean
    modeEngineTemp?: boolean
    totalDistance?: boolean
    totalFuelUsed?: boolean
    totalEngineHrs?: boolean
    IdleTime?: boolean
    RunningTime?: boolean
    sampleCount?: boolean
    updatedAt?: boolean
  }

  export type dailySummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "date" | "modeFuelLevel" | "modeOilPressure" | "modeBattVoltage" | "modeEngineLoad" | "modeSpeed" | "modeEngineRPM" | "modeEngineTemp" | "totalDistance" | "totalFuelUsed" | "totalEngineHrs" | "IdleTime" | "RunningTime" | "sampleCount" | "updatedAt", ExtArgs["result"]["dailySummary"]>
  export type dailySummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }

  export type $dailySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dailySummary"
    objects: {
      vehicle: Prisma.$vehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      date: Date
      modeFuelLevel: number | null
      modeOilPressure: number | null
      modeBattVoltage: number | null
      modeEngineLoad: number | null
      modeSpeed: number | null
      modeEngineRPM: number | null
      modeEngineTemp: number | null
      totalDistance: number
      totalFuelUsed: number
      totalEngineHrs: number
      IdleTime: number
      RunningTime: number
      sampleCount: number
      updatedAt: Date
    }, ExtArgs["result"]["dailySummary"]>
    composites: {}
  }

  type dailySummaryGetPayload<S extends boolean | null | undefined | dailySummaryDefaultArgs> = $Result.GetResult<Prisma.$dailySummaryPayload, S>

  type dailySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dailySummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailySummaryCountAggregateInputType | true
    }

  export interface dailySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dailySummary'], meta: { name: 'dailySummary' } }
    /**
     * Find zero or one DailySummary that matches the filter.
     * @param {dailySummaryFindUniqueArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dailySummaryFindUniqueArgs>(args: SelectSubset<T, dailySummaryFindUniqueArgs<ExtArgs>>): Prisma__dailySummaryClient<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailySummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dailySummaryFindUniqueOrThrowArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dailySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, dailySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dailySummaryClient<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dailySummaryFindFirstArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dailySummaryFindFirstArgs>(args?: SelectSubset<T, dailySummaryFindFirstArgs<ExtArgs>>): Prisma__dailySummaryClient<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dailySummaryFindFirstOrThrowArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dailySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, dailySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__dailySummaryClient<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dailySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailySummaries
     * const dailySummaries = await prisma.dailySummary.findMany()
     * 
     * // Get first 10 DailySummaries
     * const dailySummaries = await prisma.dailySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailySummaryWithIdOnly = await prisma.dailySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dailySummaryFindManyArgs>(args?: SelectSubset<T, dailySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailySummary.
     * @param {dailySummaryCreateArgs} args - Arguments to create a DailySummary.
     * @example
     * // Create one DailySummary
     * const DailySummary = await prisma.dailySummary.create({
     *   data: {
     *     // ... data to create a DailySummary
     *   }
     * })
     * 
     */
    create<T extends dailySummaryCreateArgs>(args: SelectSubset<T, dailySummaryCreateArgs<ExtArgs>>): Prisma__dailySummaryClient<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailySummaries.
     * @param {dailySummaryCreateManyArgs} args - Arguments to create many DailySummaries.
     * @example
     * // Create many DailySummaries
     * const dailySummary = await prisma.dailySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dailySummaryCreateManyArgs>(args?: SelectSubset<T, dailySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailySummary.
     * @param {dailySummaryDeleteArgs} args - Arguments to delete one DailySummary.
     * @example
     * // Delete one DailySummary
     * const DailySummary = await prisma.dailySummary.delete({
     *   where: {
     *     // ... filter to delete one DailySummary
     *   }
     * })
     * 
     */
    delete<T extends dailySummaryDeleteArgs>(args: SelectSubset<T, dailySummaryDeleteArgs<ExtArgs>>): Prisma__dailySummaryClient<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailySummary.
     * @param {dailySummaryUpdateArgs} args - Arguments to update one DailySummary.
     * @example
     * // Update one DailySummary
     * const dailySummary = await prisma.dailySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dailySummaryUpdateArgs>(args: SelectSubset<T, dailySummaryUpdateArgs<ExtArgs>>): Prisma__dailySummaryClient<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailySummaries.
     * @param {dailySummaryDeleteManyArgs} args - Arguments to filter DailySummaries to delete.
     * @example
     * // Delete a few DailySummaries
     * const { count } = await prisma.dailySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dailySummaryDeleteManyArgs>(args?: SelectSubset<T, dailySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dailySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailySummaries
     * const dailySummary = await prisma.dailySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dailySummaryUpdateManyArgs>(args: SelectSubset<T, dailySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailySummary.
     * @param {dailySummaryUpsertArgs} args - Arguments to update or create a DailySummary.
     * @example
     * // Update or create a DailySummary
     * const dailySummary = await prisma.dailySummary.upsert({
     *   create: {
     *     // ... data to create a DailySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailySummary we want to update
     *   }
     * })
     */
    upsert<T extends dailySummaryUpsertArgs>(args: SelectSubset<T, dailySummaryUpsertArgs<ExtArgs>>): Prisma__dailySummaryClient<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dailySummaryCountArgs} args - Arguments to filter DailySummaries to count.
     * @example
     * // Count the number of DailySummaries
     * const count = await prisma.dailySummary.count({
     *   where: {
     *     // ... the filter for the DailySummaries we want to count
     *   }
     * })
    **/
    count<T extends dailySummaryCountArgs>(
      args?: Subset<T, dailySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailySummaryAggregateArgs>(args: Subset<T, DailySummaryAggregateArgs>): Prisma.PrismaPromise<GetDailySummaryAggregateType<T>>

    /**
     * Group by DailySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dailySummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dailySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dailySummaryGroupByArgs['orderBy'] }
        : { orderBy?: dailySummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dailySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dailySummary model
   */
  readonly fields: dailySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dailySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dailySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehicleDefaultArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dailySummary model
   */
  interface dailySummaryFieldRefs {
    readonly id: FieldRef<"dailySummary", 'String'>
    readonly vehicleId: FieldRef<"dailySummary", 'String'>
    readonly date: FieldRef<"dailySummary", 'DateTime'>
    readonly modeFuelLevel: FieldRef<"dailySummary", 'Float'>
    readonly modeOilPressure: FieldRef<"dailySummary", 'Float'>
    readonly modeBattVoltage: FieldRef<"dailySummary", 'Float'>
    readonly modeEngineLoad: FieldRef<"dailySummary", 'Float'>
    readonly modeSpeed: FieldRef<"dailySummary", 'Float'>
    readonly modeEngineRPM: FieldRef<"dailySummary", 'Float'>
    readonly modeEngineTemp: FieldRef<"dailySummary", 'Float'>
    readonly totalDistance: FieldRef<"dailySummary", 'Float'>
    readonly totalFuelUsed: FieldRef<"dailySummary", 'Float'>
    readonly totalEngineHrs: FieldRef<"dailySummary", 'Float'>
    readonly IdleTime: FieldRef<"dailySummary", 'Float'>
    readonly RunningTime: FieldRef<"dailySummary", 'Float'>
    readonly sampleCount: FieldRef<"dailySummary", 'Int'>
    readonly updatedAt: FieldRef<"dailySummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * dailySummary findUnique
   */
  export type dailySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which dailySummary to fetch.
     */
    where: dailySummaryWhereUniqueInput
  }

  /**
   * dailySummary findUniqueOrThrow
   */
  export type dailySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which dailySummary to fetch.
     */
    where: dailySummaryWhereUniqueInput
  }

  /**
   * dailySummary findFirst
   */
  export type dailySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which dailySummary to fetch.
     */
    where?: dailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dailySummaries to fetch.
     */
    orderBy?: dailySummaryOrderByWithRelationInput | dailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dailySummaries.
     */
    cursor?: dailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dailySummaries.
     */
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * dailySummary findFirstOrThrow
   */
  export type dailySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which dailySummary to fetch.
     */
    where?: dailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dailySummaries to fetch.
     */
    orderBy?: dailySummaryOrderByWithRelationInput | dailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dailySummaries.
     */
    cursor?: dailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dailySummaries.
     */
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * dailySummary findMany
   */
  export type dailySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which dailySummaries to fetch.
     */
    where?: dailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dailySummaries to fetch.
     */
    orderBy?: dailySummaryOrderByWithRelationInput | dailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dailySummaries.
     */
    cursor?: dailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dailySummaries.
     */
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * dailySummary create
   */
  export type dailySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a dailySummary.
     */
    data: XOR<dailySummaryCreateInput, dailySummaryUncheckedCreateInput>
  }

  /**
   * dailySummary createMany
   */
  export type dailySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dailySummaries.
     */
    data: dailySummaryCreateManyInput | dailySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dailySummary update
   */
  export type dailySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a dailySummary.
     */
    data: XOR<dailySummaryUpdateInput, dailySummaryUncheckedUpdateInput>
    /**
     * Choose, which dailySummary to update.
     */
    where: dailySummaryWhereUniqueInput
  }

  /**
   * dailySummary updateMany
   */
  export type dailySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dailySummaries.
     */
    data: XOR<dailySummaryUpdateManyMutationInput, dailySummaryUncheckedUpdateManyInput>
    /**
     * Filter which dailySummaries to update
     */
    where?: dailySummaryWhereInput
    /**
     * Limit how many dailySummaries to update.
     */
    limit?: number
  }

  /**
   * dailySummary upsert
   */
  export type dailySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the dailySummary to update in case it exists.
     */
    where: dailySummaryWhereUniqueInput
    /**
     * In case the dailySummary found by the `where` argument doesn't exist, create a new dailySummary with this data.
     */
    create: XOR<dailySummaryCreateInput, dailySummaryUncheckedCreateInput>
    /**
     * In case the dailySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dailySummaryUpdateInput, dailySummaryUncheckedUpdateInput>
  }

  /**
   * dailySummary delete
   */
  export type dailySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    /**
     * Filter which dailySummary to delete.
     */
    where: dailySummaryWhereUniqueInput
  }

  /**
   * dailySummary deleteMany
   */
  export type dailySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dailySummaries to delete
     */
    where?: dailySummaryWhereInput
    /**
     * Limit how many dailySummaries to delete.
     */
    limit?: number
  }

  /**
   * dailySummary without action
   */
  export type dailySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
  }


  /**
   * Model driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    performance: number | null
    companyId: number | null
  }

  export type DriverSumAggregateOutputType = {
    performance: number | null
    companyId: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    licenseNo: string | null
    performance: number | null
    licenceExp: Date | null
    companyId: number | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    licenseNo: string | null
    performance: number | null
    licenceExp: Date | null
    companyId: number | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    licenseNo: number
    performance: number
    licenceExp: number
    companyId: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    performance?: true
    companyId?: true
  }

  export type DriverSumAggregateInputType = {
    performance?: true
    companyId?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    licenseNo?: true
    performance?: true
    licenceExp?: true
    companyId?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    licenseNo?: true
    performance?: true
    licenceExp?: true
    companyId?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    licenseNo?: true
    performance?: true
    licenceExp?: true
    companyId?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which driver to aggregate.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type driverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: driverWhereInput
    orderBy?: driverOrderByWithAggregationInput | driverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: driverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    licenseNo: string | null
    performance: number
    licenceExp: Date | null
    companyId: number | null
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends driverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type driverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    licenseNo?: boolean
    performance?: boolean
    licenceExp?: boolean
    companyId?: boolean
    alert?: boolean | driver$alertArgs<ExtArgs>
    companies?: boolean | driver$companiesArgs<ExtArgs>
    vehicle?: boolean | driver$vehicleArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type driverSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    licenseNo?: boolean
    performance?: boolean
    licenceExp?: boolean
    companyId?: boolean
  }

  export type driverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "licenseNo" | "performance" | "licenceExp" | "companyId", ExtArgs["result"]["driver"]>
  export type driverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | driver$alertArgs<ExtArgs>
    companies?: boolean | driver$companiesArgs<ExtArgs>
    vehicle?: boolean | driver$vehicleArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $driverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "driver"
    objects: {
      alert: Prisma.$alertPayload<ExtArgs>[]
      companies: Prisma.$companiesPayload<ExtArgs> | null
      vehicle: Prisma.$vehiclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      licenseNo: string | null
      performance: number
      licenceExp: Date | null
      companyId: number | null
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type driverGetPayload<S extends boolean | null | undefined | driverDefaultArgs> = $Result.GetResult<Prisma.$driverPayload, S>

  type driverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<driverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface driverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['driver'], meta: { name: 'driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {driverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends driverFindUniqueArgs>(args: SelectSubset<T, driverFindUniqueArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {driverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends driverFindUniqueOrThrowArgs>(args: SelectSubset<T, driverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends driverFindFirstArgs>(args?: SelectSubset<T, driverFindFirstArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends driverFindFirstOrThrowArgs>(args?: SelectSubset<T, driverFindFirstOrThrowArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends driverFindManyArgs>(args?: SelectSubset<T, driverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {driverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends driverCreateArgs>(args: SelectSubset<T, driverCreateArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {driverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends driverCreateManyArgs>(args?: SelectSubset<T, driverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {driverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends driverDeleteArgs>(args: SelectSubset<T, driverDeleteArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {driverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends driverUpdateArgs>(args: SelectSubset<T, driverUpdateArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {driverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends driverDeleteManyArgs>(args?: SelectSubset<T, driverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends driverUpdateManyArgs>(args: SelectSubset<T, driverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {driverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends driverUpsertArgs>(args: SelectSubset<T, driverUpsertArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends driverCountArgs>(
      args?: Subset<T, driverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends driverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: driverGroupByArgs['orderBy'] }
        : { orderBy?: driverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, driverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the driver model
   */
  readonly fields: driverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__driverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alert<T extends driver$alertArgs<ExtArgs> = {}>(args?: Subset<T, driver$alertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companies<T extends driver$companiesArgs<ExtArgs> = {}>(args?: Subset<T, driver$companiesArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends driver$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, driver$vehicleArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the driver model
   */
  interface driverFieldRefs {
    readonly id: FieldRef<"driver", 'String'>
    readonly name: FieldRef<"driver", 'String'>
    readonly phone: FieldRef<"driver", 'String'>
    readonly licenseNo: FieldRef<"driver", 'String'>
    readonly performance: FieldRef<"driver", 'Float'>
    readonly licenceExp: FieldRef<"driver", 'DateTime'>
    readonly companyId: FieldRef<"driver", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * driver findUnique
   */
  export type driverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver findUniqueOrThrow
   */
  export type driverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver findFirst
   */
  export type driverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver findFirstOrThrow
   */
  export type driverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver findMany
   */
  export type driverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver create
   */
  export type driverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The data needed to create a driver.
     */
    data: XOR<driverCreateInput, driverUncheckedCreateInput>
  }

  /**
   * driver createMany
   */
  export type driverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drivers.
     */
    data: driverCreateManyInput | driverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * driver update
   */
  export type driverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The data needed to update a driver.
     */
    data: XOR<driverUpdateInput, driverUncheckedUpdateInput>
    /**
     * Choose, which driver to update.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver updateMany
   */
  export type driverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drivers.
     */
    data: XOR<driverUpdateManyMutationInput, driverUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
  }

  /**
   * driver upsert
   */
  export type driverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The filter to search for the driver to update in case it exists.
     */
    where: driverWhereUniqueInput
    /**
     * In case the driver found by the `where` argument doesn't exist, create a new driver with this data.
     */
    create: XOR<driverCreateInput, driverUncheckedCreateInput>
    /**
     * In case the driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<driverUpdateInput, driverUncheckedUpdateInput>
  }

  /**
   * driver delete
   */
  export type driverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter which driver to delete.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver deleteMany
   */
  export type driverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drivers to delete
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to delete.
     */
    limit?: number
  }

  /**
   * driver.alert
   */
  export type driver$alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    where?: alertWhereInput
    orderBy?: alertOrderByWithRelationInput | alertOrderByWithRelationInput[]
    cursor?: alertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * driver.companies
   */
  export type driver$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    where?: companiesWhereInput
  }

  /**
   * driver.vehicle
   */
  export type driver$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    where?: vehicleWhereInput
  }

  /**
   * driver without action
   */
  export type driverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
  }


  /**
   * Model maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  export type MaintenanceAvgAggregateOutputType = {
    cost: number | null
  }

  export type MaintenanceSumAggregateOutputType = {
    cost: number | null
  }

  export type MaintenanceMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    serviceDate: Date | null
    nextService: Date | null
    description: string | null
    cost: number | null
  }

  export type MaintenanceMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    serviceDate: Date | null
    nextService: Date | null
    description: string | null
    cost: number | null
  }

  export type MaintenanceCountAggregateOutputType = {
    id: number
    vehicleId: number
    serviceDate: number
    nextService: number
    description: number
    cost: number
    _all: number
  }


  export type MaintenanceAvgAggregateInputType = {
    cost?: true
  }

  export type MaintenanceSumAggregateInputType = {
    cost?: true
  }

  export type MaintenanceMinAggregateInputType = {
    id?: true
    vehicleId?: true
    serviceDate?: true
    nextService?: true
    description?: true
    cost?: true
  }

  export type MaintenanceMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    serviceDate?: true
    nextService?: true
    description?: true
    cost?: true
  }

  export type MaintenanceCountAggregateInputType = {
    id?: true
    vehicleId?: true
    serviceDate?: true
    nextService?: true
    description?: true
    cost?: true
    _all?: true
  }

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance to aggregate.
     */
    where?: maintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maintenances
    **/
    _count?: true | MaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceMaxAggregateInputType
  }

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>
  }




  export type maintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenanceWhereInput
    orderBy?: maintenanceOrderByWithAggregationInput | maintenanceOrderByWithAggregationInput[]
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum
    having?: maintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceCountAggregateInputType | true
    _avg?: MaintenanceAvgAggregateInputType
    _sum?: MaintenanceSumAggregateInputType
    _min?: MaintenanceMinAggregateInputType
    _max?: MaintenanceMaxAggregateInputType
  }

  export type MaintenanceGroupByOutputType = {
    id: string
    vehicleId: string
    serviceDate: Date
    nextService: Date
    description: string
    cost: number | null
    _count: MaintenanceCountAggregateOutputType | null
    _avg: MaintenanceAvgAggregateOutputType | null
    _sum: MaintenanceSumAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  type GetMaintenanceGroupByPayload<T extends maintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type maintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    serviceDate?: boolean
    nextService?: boolean
    description?: boolean
    cost?: boolean
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>



  export type maintenanceSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    serviceDate?: boolean
    nextService?: boolean
    description?: boolean
    cost?: boolean
  }

  export type maintenanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "serviceDate" | "nextService" | "description" | "cost", ExtArgs["result"]["maintenance"]>
  export type maintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }

  export type $maintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "maintenance"
    objects: {
      vehicle: Prisma.$vehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      serviceDate: Date
      nextService: Date
      description: string
      cost: number | null
    }, ExtArgs["result"]["maintenance"]>
    composites: {}
  }

  type maintenanceGetPayload<S extends boolean | null | undefined | maintenanceDefaultArgs> = $Result.GetResult<Prisma.$maintenancePayload, S>

  type maintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<maintenanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceCountAggregateInputType | true
    }

  export interface maintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maintenance'], meta: { name: 'maintenance' } }
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {maintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends maintenanceFindUniqueArgs>(args: SelectSubset<T, maintenanceFindUniqueArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {maintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends maintenanceFindUniqueOrThrowArgs>(args: SelectSubset<T, maintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends maintenanceFindFirstArgs>(args?: SelectSubset<T, maintenanceFindFirstArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends maintenanceFindFirstOrThrowArgs>(args?: SelectSubset<T, maintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     * 
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends maintenanceFindManyArgs>(args?: SelectSubset<T, maintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance.
     * @param {maintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     * 
     */
    create<T extends maintenanceCreateArgs>(args: SelectSubset<T, maintenanceCreateArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenances.
     * @param {maintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends maintenanceCreateManyArgs>(args?: SelectSubset<T, maintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maintenance.
     * @param {maintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     * 
     */
    delete<T extends maintenanceDeleteArgs>(args: SelectSubset<T, maintenanceDeleteArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance.
     * @param {maintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends maintenanceUpdateArgs>(args: SelectSubset<T, maintenanceUpdateArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenances.
     * @param {maintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends maintenanceDeleteManyArgs>(args?: SelectSubset<T, maintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends maintenanceUpdateManyArgs>(args: SelectSubset<T, maintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maintenance.
     * @param {maintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
     */
    upsert<T extends maintenanceUpsertArgs>(args: SelectSubset<T, maintenanceUpsertArgs<ExtArgs>>): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
    **/
    count<T extends maintenanceCountArgs>(
      args?: Subset<T, maintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceAggregateArgs>(args: Subset<T, MaintenanceAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends maintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maintenanceGroupByArgs['orderBy'] }
        : { orderBy?: maintenanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, maintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maintenance model
   */
  readonly fields: maintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehicleDefaultArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the maintenance model
   */
  interface maintenanceFieldRefs {
    readonly id: FieldRef<"maintenance", 'String'>
    readonly vehicleId: FieldRef<"maintenance", 'String'>
    readonly serviceDate: FieldRef<"maintenance", 'DateTime'>
    readonly nextService: FieldRef<"maintenance", 'DateTime'>
    readonly description: FieldRef<"maintenance", 'String'>
    readonly cost: FieldRef<"maintenance", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * maintenance findUnique
   */
  export type maintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * Filter, which maintenance to fetch.
     */
    where: maintenanceWhereUniqueInput
  }

  /**
   * maintenance findUniqueOrThrow
   */
  export type maintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * Filter, which maintenance to fetch.
     */
    where: maintenanceWhereUniqueInput
  }

  /**
   * maintenance findFirst
   */
  export type maintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * Filter, which maintenance to fetch.
     */
    where?: maintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintenances.
     */
    cursor?: maintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * maintenance findFirstOrThrow
   */
  export type maintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * Filter, which maintenance to fetch.
     */
    where?: maintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintenances.
     */
    cursor?: maintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * maintenance findMany
   */
  export type maintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * Filter, which maintenances to fetch.
     */
    where?: maintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maintenances.
     */
    cursor?: maintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * maintenance create
   */
  export type maintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * The data needed to create a maintenance.
     */
    data: XOR<maintenanceCreateInput, maintenanceUncheckedCreateInput>
  }

  /**
   * maintenance createMany
   */
  export type maintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maintenances.
     */
    data: maintenanceCreateManyInput | maintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * maintenance update
   */
  export type maintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * The data needed to update a maintenance.
     */
    data: XOR<maintenanceUpdateInput, maintenanceUncheckedUpdateInput>
    /**
     * Choose, which maintenance to update.
     */
    where: maintenanceWhereUniqueInput
  }

  /**
   * maintenance updateMany
   */
  export type maintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maintenances.
     */
    data: XOR<maintenanceUpdateManyMutationInput, maintenanceUncheckedUpdateManyInput>
    /**
     * Filter which maintenances to update
     */
    where?: maintenanceWhereInput
    /**
     * Limit how many maintenances to update.
     */
    limit?: number
  }

  /**
   * maintenance upsert
   */
  export type maintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * The filter to search for the maintenance to update in case it exists.
     */
    where: maintenanceWhereUniqueInput
    /**
     * In case the maintenance found by the `where` argument doesn't exist, create a new maintenance with this data.
     */
    create: XOR<maintenanceCreateInput, maintenanceUncheckedCreateInput>
    /**
     * In case the maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maintenanceUpdateInput, maintenanceUncheckedUpdateInput>
  }

  /**
   * maintenance delete
   */
  export type maintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    /**
     * Filter which maintenance to delete.
     */
    where: maintenanceWhereUniqueInput
  }

  /**
   * maintenance deleteMany
   */
  export type maintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenances to delete
     */
    where?: maintenanceWhereInput
    /**
     * Limit how many maintenances to delete.
     */
    limit?: number
  }

  /**
   * maintenance without action
   */
  export type maintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
  }


  /**
   * Model maintenance_data
   */

  export type AggregateMaintenance_data = {
    _count: Maintenance_dataCountAggregateOutputType | null
    _avg: Maintenance_dataAvgAggregateOutputType | null
    _sum: Maintenance_dataSumAggregateOutputType | null
    _min: Maintenance_dataMinAggregateOutputType | null
    _max: Maintenance_dataMaxAggregateOutputType | null
  }

  export type Maintenance_dataAvgAggregateOutputType = {
    fuelRate: number | null
    fuelEff: number | null
    EngineHours: number | null
  }

  export type Maintenance_dataSumAggregateOutputType = {
    fuelRate: number | null
    fuelEff: number | null
    EngineHours: number | null
  }

  export type Maintenance_dataMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    fuelRate: number | null
    fuelEff: number | null
    EngineHours: number | null
    updatedAt: Date | null
  }

  export type Maintenance_dataMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    fuelRate: number | null
    fuelEff: number | null
    EngineHours: number | null
    updatedAt: Date | null
  }

  export type Maintenance_dataCountAggregateOutputType = {
    id: number
    vehicleId: number
    fuelRate: number
    fuelEff: number
    EngineHours: number
    updatedAt: number
    _all: number
  }


  export type Maintenance_dataAvgAggregateInputType = {
    fuelRate?: true
    fuelEff?: true
    EngineHours?: true
  }

  export type Maintenance_dataSumAggregateInputType = {
    fuelRate?: true
    fuelEff?: true
    EngineHours?: true
  }

  export type Maintenance_dataMinAggregateInputType = {
    id?: true
    vehicleId?: true
    fuelRate?: true
    fuelEff?: true
    EngineHours?: true
    updatedAt?: true
  }

  export type Maintenance_dataMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    fuelRate?: true
    fuelEff?: true
    EngineHours?: true
    updatedAt?: true
  }

  export type Maintenance_dataCountAggregateInputType = {
    id?: true
    vehicleId?: true
    fuelRate?: true
    fuelEff?: true
    EngineHours?: true
    updatedAt?: true
    _all?: true
  }

  export type Maintenance_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance_data to aggregate.
     */
    where?: maintenance_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenance_data to fetch.
     */
    orderBy?: maintenance_dataOrderByWithRelationInput | maintenance_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maintenance_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenance_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenance_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maintenance_data
    **/
    _count?: true | Maintenance_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Maintenance_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Maintenance_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Maintenance_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Maintenance_dataMaxAggregateInputType
  }

  export type GetMaintenance_dataAggregateType<T extends Maintenance_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance_data[P]>
      : GetScalarType<T[P], AggregateMaintenance_data[P]>
  }




  export type maintenance_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenance_dataWhereInput
    orderBy?: maintenance_dataOrderByWithAggregationInput | maintenance_dataOrderByWithAggregationInput[]
    by: Maintenance_dataScalarFieldEnum[] | Maintenance_dataScalarFieldEnum
    having?: maintenance_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Maintenance_dataCountAggregateInputType | true
    _avg?: Maintenance_dataAvgAggregateInputType
    _sum?: Maintenance_dataSumAggregateInputType
    _min?: Maintenance_dataMinAggregateInputType
    _max?: Maintenance_dataMaxAggregateInputType
  }

  export type Maintenance_dataGroupByOutputType = {
    id: string
    vehicleId: string
    fuelRate: number | null
    fuelEff: number | null
    EngineHours: number | null
    updatedAt: Date
    _count: Maintenance_dataCountAggregateOutputType | null
    _avg: Maintenance_dataAvgAggregateOutputType | null
    _sum: Maintenance_dataSumAggregateOutputType | null
    _min: Maintenance_dataMinAggregateOutputType | null
    _max: Maintenance_dataMaxAggregateOutputType | null
  }

  type GetMaintenance_dataGroupByPayload<T extends maintenance_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Maintenance_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Maintenance_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Maintenance_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Maintenance_dataGroupByOutputType[P]>
        }
      >
    >


  export type maintenance_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    fuelRate?: boolean
    fuelEff?: boolean
    EngineHours?: boolean
    updatedAt?: boolean
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_data"]>



  export type maintenance_dataSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    fuelRate?: boolean
    fuelEff?: boolean
    EngineHours?: boolean
    updatedAt?: boolean
  }

  export type maintenance_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "fuelRate" | "fuelEff" | "EngineHours" | "updatedAt", ExtArgs["result"]["maintenance_data"]>
  export type maintenance_dataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }

  export type $maintenance_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "maintenance_data"
    objects: {
      vehicle: Prisma.$vehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      fuelRate: number | null
      fuelEff: number | null
      EngineHours: number | null
      updatedAt: Date
    }, ExtArgs["result"]["maintenance_data"]>
    composites: {}
  }

  type maintenance_dataGetPayload<S extends boolean | null | undefined | maintenance_dataDefaultArgs> = $Result.GetResult<Prisma.$maintenance_dataPayload, S>

  type maintenance_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<maintenance_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Maintenance_dataCountAggregateInputType | true
    }

  export interface maintenance_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maintenance_data'], meta: { name: 'maintenance_data' } }
    /**
     * Find zero or one Maintenance_data that matches the filter.
     * @param {maintenance_dataFindUniqueArgs} args - Arguments to find a Maintenance_data
     * @example
     * // Get one Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends maintenance_dataFindUniqueArgs>(args: SelectSubset<T, maintenance_dataFindUniqueArgs<ExtArgs>>): Prisma__maintenance_dataClient<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {maintenance_dataFindUniqueOrThrowArgs} args - Arguments to find a Maintenance_data
     * @example
     * // Get one Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends maintenance_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, maintenance_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__maintenance_dataClient<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_dataFindFirstArgs} args - Arguments to find a Maintenance_data
     * @example
     * // Get one Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends maintenance_dataFindFirstArgs>(args?: SelectSubset<T, maintenance_dataFindFirstArgs<ExtArgs>>): Prisma__maintenance_dataClient<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_dataFindFirstOrThrowArgs} args - Arguments to find a Maintenance_data
     * @example
     * // Get one Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends maintenance_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, maintenance_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__maintenance_dataClient<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenance_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.findMany()
     * 
     * // Get first 10 Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenance_dataWithIdOnly = await prisma.maintenance_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends maintenance_dataFindManyArgs>(args?: SelectSubset<T, maintenance_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance_data.
     * @param {maintenance_dataCreateArgs} args - Arguments to create a Maintenance_data.
     * @example
     * // Create one Maintenance_data
     * const Maintenance_data = await prisma.maintenance_data.create({
     *   data: {
     *     // ... data to create a Maintenance_data
     *   }
     * })
     * 
     */
    create<T extends maintenance_dataCreateArgs>(args: SelectSubset<T, maintenance_dataCreateArgs<ExtArgs>>): Prisma__maintenance_dataClient<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenance_data.
     * @param {maintenance_dataCreateManyArgs} args - Arguments to create many Maintenance_data.
     * @example
     * // Create many Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends maintenance_dataCreateManyArgs>(args?: SelectSubset<T, maintenance_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maintenance_data.
     * @param {maintenance_dataDeleteArgs} args - Arguments to delete one Maintenance_data.
     * @example
     * // Delete one Maintenance_data
     * const Maintenance_data = await prisma.maintenance_data.delete({
     *   where: {
     *     // ... filter to delete one Maintenance_data
     *   }
     * })
     * 
     */
    delete<T extends maintenance_dataDeleteArgs>(args: SelectSubset<T, maintenance_dataDeleteArgs<ExtArgs>>): Prisma__maintenance_dataClient<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance_data.
     * @param {maintenance_dataUpdateArgs} args - Arguments to update one Maintenance_data.
     * @example
     * // Update one Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends maintenance_dataUpdateArgs>(args: SelectSubset<T, maintenance_dataUpdateArgs<ExtArgs>>): Prisma__maintenance_dataClient<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenance_data.
     * @param {maintenance_dataDeleteManyArgs} args - Arguments to filter Maintenance_data to delete.
     * @example
     * // Delete a few Maintenance_data
     * const { count } = await prisma.maintenance_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends maintenance_dataDeleteManyArgs>(args?: SelectSubset<T, maintenance_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenance_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends maintenance_dataUpdateManyArgs>(args: SelectSubset<T, maintenance_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maintenance_data.
     * @param {maintenance_dataUpsertArgs} args - Arguments to update or create a Maintenance_data.
     * @example
     * // Update or create a Maintenance_data
     * const maintenance_data = await prisma.maintenance_data.upsert({
     *   create: {
     *     // ... data to create a Maintenance_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance_data we want to update
     *   }
     * })
     */
    upsert<T extends maintenance_dataUpsertArgs>(args: SelectSubset<T, maintenance_dataUpsertArgs<ExtArgs>>): Prisma__maintenance_dataClient<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenance_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_dataCountArgs} args - Arguments to filter Maintenance_data to count.
     * @example
     * // Count the number of Maintenance_data
     * const count = await prisma.maintenance_data.count({
     *   where: {
     *     // ... the filter for the Maintenance_data we want to count
     *   }
     * })
    **/
    count<T extends maintenance_dataCountArgs>(
      args?: Subset<T, maintenance_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Maintenance_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Maintenance_dataAggregateArgs>(args: Subset<T, Maintenance_dataAggregateArgs>): Prisma.PrismaPromise<GetMaintenance_dataAggregateType<T>>

    /**
     * Group by Maintenance_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends maintenance_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maintenance_dataGroupByArgs['orderBy'] }
        : { orderBy?: maintenance_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, maintenance_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenance_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maintenance_data model
   */
  readonly fields: maintenance_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maintenance_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maintenance_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehicleDefaultArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the maintenance_data model
   */
  interface maintenance_dataFieldRefs {
    readonly id: FieldRef<"maintenance_data", 'String'>
    readonly vehicleId: FieldRef<"maintenance_data", 'String'>
    readonly fuelRate: FieldRef<"maintenance_data", 'Float'>
    readonly fuelEff: FieldRef<"maintenance_data", 'Float'>
    readonly EngineHours: FieldRef<"maintenance_data", 'Float'>
    readonly updatedAt: FieldRef<"maintenance_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * maintenance_data findUnique
   */
  export type maintenance_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_data to fetch.
     */
    where: maintenance_dataWhereUniqueInput
  }

  /**
   * maintenance_data findUniqueOrThrow
   */
  export type maintenance_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_data to fetch.
     */
    where: maintenance_dataWhereUniqueInput
  }

  /**
   * maintenance_data findFirst
   */
  export type maintenance_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_data to fetch.
     */
    where?: maintenance_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenance_data to fetch.
     */
    orderBy?: maintenance_dataOrderByWithRelationInput | maintenance_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintenance_data.
     */
    cursor?: maintenance_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenance_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenance_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenance_data.
     */
    distinct?: Maintenance_dataScalarFieldEnum | Maintenance_dataScalarFieldEnum[]
  }

  /**
   * maintenance_data findFirstOrThrow
   */
  export type maintenance_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_data to fetch.
     */
    where?: maintenance_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenance_data to fetch.
     */
    orderBy?: maintenance_dataOrderByWithRelationInput | maintenance_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintenance_data.
     */
    cursor?: maintenance_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenance_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenance_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenance_data.
     */
    distinct?: Maintenance_dataScalarFieldEnum | Maintenance_dataScalarFieldEnum[]
  }

  /**
   * maintenance_data findMany
   */
  export type maintenance_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_data to fetch.
     */
    where?: maintenance_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenance_data to fetch.
     */
    orderBy?: maintenance_dataOrderByWithRelationInput | maintenance_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maintenance_data.
     */
    cursor?: maintenance_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenance_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenance_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenance_data.
     */
    distinct?: Maintenance_dataScalarFieldEnum | Maintenance_dataScalarFieldEnum[]
  }

  /**
   * maintenance_data create
   */
  export type maintenance_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * The data needed to create a maintenance_data.
     */
    data: XOR<maintenance_dataCreateInput, maintenance_dataUncheckedCreateInput>
  }

  /**
   * maintenance_data createMany
   */
  export type maintenance_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maintenance_data.
     */
    data: maintenance_dataCreateManyInput | maintenance_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * maintenance_data update
   */
  export type maintenance_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * The data needed to update a maintenance_data.
     */
    data: XOR<maintenance_dataUpdateInput, maintenance_dataUncheckedUpdateInput>
    /**
     * Choose, which maintenance_data to update.
     */
    where: maintenance_dataWhereUniqueInput
  }

  /**
   * maintenance_data updateMany
   */
  export type maintenance_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maintenance_data.
     */
    data: XOR<maintenance_dataUpdateManyMutationInput, maintenance_dataUncheckedUpdateManyInput>
    /**
     * Filter which maintenance_data to update
     */
    where?: maintenance_dataWhereInput
    /**
     * Limit how many maintenance_data to update.
     */
    limit?: number
  }

  /**
   * maintenance_data upsert
   */
  export type maintenance_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * The filter to search for the maintenance_data to update in case it exists.
     */
    where: maintenance_dataWhereUniqueInput
    /**
     * In case the maintenance_data found by the `where` argument doesn't exist, create a new maintenance_data with this data.
     */
    create: XOR<maintenance_dataCreateInput, maintenance_dataUncheckedCreateInput>
    /**
     * In case the maintenance_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maintenance_dataUpdateInput, maintenance_dataUncheckedUpdateInput>
  }

  /**
   * maintenance_data delete
   */
  export type maintenance_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    /**
     * Filter which maintenance_data to delete.
     */
    where: maintenance_dataWhereUniqueInput
  }

  /**
   * maintenance_data deleteMany
   */
  export type maintenance_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance_data to delete
     */
    where?: maintenance_dataWhereInput
    /**
     * Limit how many maintenance_data to delete.
     */
    limit?: number
  }

  /**
   * maintenance_data without action
   */
  export type maintenance_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
  }


  /**
   * Model status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    lastLat: number | null
    lastLng: number | null
    lastSpeed: number | null
    fuelLevel: number | null
    engineHours: number | null
    BattVoltage: number | null
    EngineLoad: number | null
    OilPressure: number | null
    distance: number | null
    engineRPM: number | null
    engineTemp: number | null
    fuelUsed: number | null
  }

  export type StatusSumAggregateOutputType = {
    lastLat: number | null
    lastLng: number | null
    lastSpeed: number | null
    fuelLevel: number | null
    engineHours: number | null
    BattVoltage: number | null
    EngineLoad: number | null
    OilPressure: number | null
    distance: number | null
    engineRPM: number | null
    engineTemp: number | null
    fuelUsed: number | null
  }

  export type StatusMinAggregateOutputType = {
    id: string | null
    lastLat: number | null
    lastLng: number | null
    lastSpeed: number | null
    state: $Enums.status_state | null
    fuelLevel: number | null
    engineHours: number | null
    lastUpdate: Date | null
    vehicleId: string | null
    BattVoltage: number | null
    EngineLoad: number | null
    OilPressure: number | null
    distance: number | null
    engineRPM: number | null
    engineTemp: number | null
    fuelUsed: number | null
  }

  export type StatusMaxAggregateOutputType = {
    id: string | null
    lastLat: number | null
    lastLng: number | null
    lastSpeed: number | null
    state: $Enums.status_state | null
    fuelLevel: number | null
    engineHours: number | null
    lastUpdate: Date | null
    vehicleId: string | null
    BattVoltage: number | null
    EngineLoad: number | null
    OilPressure: number | null
    distance: number | null
    engineRPM: number | null
    engineTemp: number | null
    fuelUsed: number | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    lastLat: number
    lastLng: number
    lastSpeed: number
    state: number
    fuelLevel: number
    engineHours: number
    lastUpdate: number
    vehicleId: number
    BattVoltage: number
    EngineLoad: number
    OilPressure: number
    distance: number
    engineRPM: number
    engineTemp: number
    fuelUsed: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    lastLat?: true
    lastLng?: true
    lastSpeed?: true
    fuelLevel?: true
    engineHours?: true
    BattVoltage?: true
    EngineLoad?: true
    OilPressure?: true
    distance?: true
    engineRPM?: true
    engineTemp?: true
    fuelUsed?: true
  }

  export type StatusSumAggregateInputType = {
    lastLat?: true
    lastLng?: true
    lastSpeed?: true
    fuelLevel?: true
    engineHours?: true
    BattVoltage?: true
    EngineLoad?: true
    OilPressure?: true
    distance?: true
    engineRPM?: true
    engineTemp?: true
    fuelUsed?: true
  }

  export type StatusMinAggregateInputType = {
    id?: true
    lastLat?: true
    lastLng?: true
    lastSpeed?: true
    state?: true
    fuelLevel?: true
    engineHours?: true
    lastUpdate?: true
    vehicleId?: true
    BattVoltage?: true
    EngineLoad?: true
    OilPressure?: true
    distance?: true
    engineRPM?: true
    engineTemp?: true
    fuelUsed?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    lastLat?: true
    lastLng?: true
    lastSpeed?: true
    state?: true
    fuelLevel?: true
    engineHours?: true
    lastUpdate?: true
    vehicleId?: true
    BattVoltage?: true
    EngineLoad?: true
    OilPressure?: true
    distance?: true
    engineRPM?: true
    engineTemp?: true
    fuelUsed?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    lastLat?: true
    lastLng?: true
    lastSpeed?: true
    state?: true
    fuelLevel?: true
    engineHours?: true
    lastUpdate?: true
    vehicleId?: true
    BattVoltage?: true
    EngineLoad?: true
    OilPressure?: true
    distance?: true
    engineRPM?: true
    engineTemp?: true
    fuelUsed?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which status to aggregate.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusWhereInput
    orderBy?: statusOrderByWithAggregationInput | statusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: string
    lastLat: number | null
    lastLng: number | null
    lastSpeed: number | null
    state: $Enums.status_state
    fuelLevel: number | null
    engineHours: number | null
    lastUpdate: Date
    vehicleId: string
    BattVoltage: number | null
    EngineLoad: number | null
    OilPressure: number | null
    distance: number | null
    engineRPM: number | null
    engineTemp: number | null
    fuelUsed: number | null
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastLat?: boolean
    lastLng?: boolean
    lastSpeed?: boolean
    state?: boolean
    fuelLevel?: boolean
    engineHours?: boolean
    lastUpdate?: boolean
    vehicleId?: boolean
    BattVoltage?: boolean
    EngineLoad?: boolean
    OilPressure?: boolean
    distance?: boolean
    engineRPM?: boolean
    engineTemp?: boolean
    fuelUsed?: boolean
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>



  export type statusSelectScalar = {
    id?: boolean
    lastLat?: boolean
    lastLng?: boolean
    lastSpeed?: boolean
    state?: boolean
    fuelLevel?: boolean
    engineHours?: boolean
    lastUpdate?: boolean
    vehicleId?: boolean
    BattVoltage?: boolean
    EngineLoad?: boolean
    OilPressure?: boolean
    distance?: boolean
    engineRPM?: boolean
    engineTemp?: boolean
    fuelUsed?: boolean
  }

  export type statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastLat" | "lastLng" | "lastSpeed" | "state" | "fuelLevel" | "engineHours" | "lastUpdate" | "vehicleId" | "BattVoltage" | "EngineLoad" | "OilPressure" | "distance" | "engineRPM" | "engineTemp" | "fuelUsed", ExtArgs["result"]["status"]>
  export type statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }

  export type $statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "status"
    objects: {
      vehicle: Prisma.$vehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastLat: number | null
      lastLng: number | null
      lastSpeed: number | null
      state: $Enums.status_state
      fuelLevel: number | null
      engineHours: number | null
      lastUpdate: Date
      vehicleId: string
      BattVoltage: number | null
      EngineLoad: number | null
      OilPressure: number | null
      distance: number | null
      engineRPM: number | null
      engineTemp: number | null
      fuelUsed: number | null
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type statusGetPayload<S extends boolean | null | undefined | statusDefaultArgs> = $Result.GetResult<Prisma.$statusPayload, S>

  type statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['status'], meta: { name: 'status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {statusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends statusFindUniqueArgs>(args: SelectSubset<T, statusFindUniqueArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {statusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends statusFindUniqueOrThrowArgs>(args: SelectSubset<T, statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends statusFindFirstArgs>(args?: SelectSubset<T, statusFindFirstArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends statusFindFirstOrThrowArgs>(args?: SelectSubset<T, statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends statusFindManyArgs>(args?: SelectSubset<T, statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {statusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends statusCreateArgs>(args: SelectSubset<T, statusCreateArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {statusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends statusCreateManyArgs>(args?: SelectSubset<T, statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status.
     * @param {statusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends statusDeleteArgs>(args: SelectSubset<T, statusDeleteArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {statusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends statusUpdateArgs>(args: SelectSubset<T, statusUpdateArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {statusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends statusDeleteManyArgs>(args?: SelectSubset<T, statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends statusUpdateManyArgs>(args: SelectSubset<T, statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status.
     * @param {statusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends statusUpsertArgs>(args: SelectSubset<T, statusUpsertArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends statusCountArgs>(
      args?: Subset<T, statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statusGroupByArgs['orderBy'] }
        : { orderBy?: statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the status model
   */
  readonly fields: statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehicleDefaultArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the status model
   */
  interface statusFieldRefs {
    readonly id: FieldRef<"status", 'String'>
    readonly lastLat: FieldRef<"status", 'Float'>
    readonly lastLng: FieldRef<"status", 'Float'>
    readonly lastSpeed: FieldRef<"status", 'Float'>
    readonly state: FieldRef<"status", 'status_state'>
    readonly fuelLevel: FieldRef<"status", 'Float'>
    readonly engineHours: FieldRef<"status", 'Float'>
    readonly lastUpdate: FieldRef<"status", 'DateTime'>
    readonly vehicleId: FieldRef<"status", 'String'>
    readonly BattVoltage: FieldRef<"status", 'Float'>
    readonly EngineLoad: FieldRef<"status", 'Float'>
    readonly OilPressure: FieldRef<"status", 'Float'>
    readonly distance: FieldRef<"status", 'Float'>
    readonly engineRPM: FieldRef<"status", 'Int'>
    readonly engineTemp: FieldRef<"status", 'Float'>
    readonly fuelUsed: FieldRef<"status", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * status findUnique
   */
  export type statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status findUniqueOrThrow
   */
  export type statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status findFirst
   */
  export type statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status findFirstOrThrow
   */
  export type statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status findMany
   */
  export type statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status create
   */
  export type statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to create a status.
     */
    data: XOR<statusCreateInput, statusUncheckedCreateInput>
  }

  /**
   * status createMany
   */
  export type statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statuses.
     */
    data: statusCreateManyInput | statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * status update
   */
  export type statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to update a status.
     */
    data: XOR<statusUpdateInput, statusUncheckedUpdateInput>
    /**
     * Choose, which status to update.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status updateMany
   */
  export type statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statuses.
     */
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyInput>
    /**
     * Filter which statuses to update
     */
    where?: statusWhereInput
    /**
     * Limit how many statuses to update.
     */
    limit?: number
  }

  /**
   * status upsert
   */
  export type statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The filter to search for the status to update in case it exists.
     */
    where: statusWhereUniqueInput
    /**
     * In case the status found by the `where` argument doesn't exist, create a new status with this data.
     */
    create: XOR<statusCreateInput, statusUncheckedCreateInput>
    /**
     * In case the status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statusUpdateInput, statusUncheckedUpdateInput>
  }

  /**
   * status delete
   */
  export type statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter which status to delete.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status deleteMany
   */
  export type statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuses to delete
     */
    where?: statusWhereInput
    /**
     * Limit how many statuses to delete.
     */
    limit?: number
  }

  /**
   * status without action
   */
  export type statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
  }


  /**
   * Model trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    distance: number | null
    fuelUsed: number | null
  }

  export type TripSumAggregateOutputType = {
    distance: number | null
    fuelUsed: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    startTime: Date | null
    endTime: Date | null
    distance: number | null
    fuelUsed: number | null
    startLoc: string | null
    endLoc: string | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    startTime: Date | null
    endTime: Date | null
    distance: number | null
    fuelUsed: number | null
    startLoc: string | null
    endLoc: string | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    vehicleId: number
    startTime: number
    endTime: number
    distance: number
    fuelUsed: number
    startLoc: number
    endLoc: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    distance?: true
    fuelUsed?: true
  }

  export type TripSumAggregateInputType = {
    distance?: true
    fuelUsed?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    vehicleId?: true
    startTime?: true
    endTime?: true
    distance?: true
    fuelUsed?: true
    startLoc?: true
    endLoc?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    startTime?: true
    endTime?: true
    distance?: true
    fuelUsed?: true
    startLoc?: true
    endLoc?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    vehicleId?: true
    startTime?: true
    endTime?: true
    distance?: true
    fuelUsed?: true
    startLoc?: true
    endLoc?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trip to aggregate.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type tripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripWhereInput
    orderBy?: tripOrderByWithAggregationInput | tripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: tripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    vehicleId: string
    startTime: Date
    endTime: Date | null
    distance: number
    fuelUsed: number
    startLoc: string | null
    endLoc: string | null
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends tripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type tripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    startTime?: boolean
    endTime?: boolean
    distance?: boolean
    fuelUsed?: boolean
    startLoc?: boolean
    endLoc?: boolean
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>



  export type tripSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    startTime?: boolean
    endTime?: boolean
    distance?: boolean
    fuelUsed?: boolean
    startLoc?: boolean
    endLoc?: boolean
  }

  export type tripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "startTime" | "endTime" | "distance" | "fuelUsed" | "startLoc" | "endLoc", ExtArgs["result"]["trip"]>
  export type tripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }

  export type $tripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trip"
    objects: {
      vehicle: Prisma.$vehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      startTime: Date
      endTime: Date | null
      distance: number
      fuelUsed: number
      startLoc: string | null
      endLoc: string | null
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type tripGetPayload<S extends boolean | null | undefined | tripDefaultArgs> = $Result.GetResult<Prisma.$tripPayload, S>

  type tripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface tripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trip'], meta: { name: 'trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {tripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tripFindUniqueArgs>(args: SelectSubset<T, tripFindUniqueArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tripFindUniqueOrThrowArgs>(args: SelectSubset<T, tripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tripFindFirstArgs>(args?: SelectSubset<T, tripFindFirstArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tripFindFirstOrThrowArgs>(args?: SelectSubset<T, tripFindFirstOrThrowArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tripFindManyArgs>(args?: SelectSubset<T, tripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {tripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends tripCreateArgs>(args: SelectSubset<T, tripCreateArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {tripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tripCreateManyArgs>(args?: SelectSubset<T, tripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {tripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends tripDeleteArgs>(args: SelectSubset<T, tripDeleteArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {tripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tripUpdateArgs>(args: SelectSubset<T, tripUpdateArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {tripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tripDeleteManyArgs>(args?: SelectSubset<T, tripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tripUpdateManyArgs>(args: SelectSubset<T, tripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {tripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends tripUpsertArgs>(args: SelectSubset<T, tripUpsertArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends tripCountArgs>(
      args?: Subset<T, tripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tripGroupByArgs['orderBy'] }
        : { orderBy?: tripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trip model
   */
  readonly fields: tripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehicleDefaultArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trip model
   */
  interface tripFieldRefs {
    readonly id: FieldRef<"trip", 'String'>
    readonly vehicleId: FieldRef<"trip", 'String'>
    readonly startTime: FieldRef<"trip", 'DateTime'>
    readonly endTime: FieldRef<"trip", 'DateTime'>
    readonly distance: FieldRef<"trip", 'Float'>
    readonly fuelUsed: FieldRef<"trip", 'Float'>
    readonly startLoc: FieldRef<"trip", 'String'>
    readonly endLoc: FieldRef<"trip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * trip findUnique
   */
  export type tripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trip to fetch.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip findUniqueOrThrow
   */
  export type tripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trip to fetch.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip findFirst
   */
  export type tripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trip to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * trip findFirstOrThrow
   */
  export type tripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trip to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * trip findMany
   */
  export type tripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * trip create
   */
  export type tripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * The data needed to create a trip.
     */
    data: XOR<tripCreateInput, tripUncheckedCreateInput>
  }

  /**
   * trip createMany
   */
  export type tripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trips.
     */
    data: tripCreateManyInput | tripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trip update
   */
  export type tripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * The data needed to update a trip.
     */
    data: XOR<tripUpdateInput, tripUncheckedUpdateInput>
    /**
     * Choose, which trip to update.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip updateMany
   */
  export type tripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trips.
     */
    data: XOR<tripUpdateManyMutationInput, tripUncheckedUpdateManyInput>
    /**
     * Filter which trips to update
     */
    where?: tripWhereInput
    /**
     * Limit how many trips to update.
     */
    limit?: number
  }

  /**
   * trip upsert
   */
  export type tripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * The filter to search for the trip to update in case it exists.
     */
    where: tripWhereUniqueInput
    /**
     * In case the trip found by the `where` argument doesn't exist, create a new trip with this data.
     */
    create: XOR<tripCreateInput, tripUncheckedCreateInput>
    /**
     * In case the trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tripUpdateInput, tripUncheckedUpdateInput>
  }

  /**
   * trip delete
   */
  export type tripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter which trip to delete.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip deleteMany
   */
  export type tripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trips to delete
     */
    where?: tripWhereInput
    /**
     * Limit how many trips to delete.
     */
    limit?: number
  }

  /**
   * trip without action
   */
  export type tripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.users_role | null
    created_data: Date | null
    updatedAt: Date | null
    companyId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.users_role | null
    created_data: Date | null
    updatedAt: Date | null
    companyId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    created_data: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_data?: true
    updatedAt?: true
    companyId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_data?: true
    updatedAt?: true
    companyId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    created_data?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    password: string
    role: $Enums.users_role
    created_data: Date
    updatedAt: Date
    companyId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_data?: boolean
    updatedAt?: boolean
    companyId?: boolean
    companies?: boolean | user$companiesArgs<ExtArgs>
    vehicle?: boolean | user$vehicleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_data?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "created_data" | "updatedAt" | "companyId", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | user$companiesArgs<ExtArgs>
    vehicle?: boolean | user$vehicleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      companies: Prisma.$companiesPayload<ExtArgs> | null
      vehicle: Prisma.$vehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
      role: $Enums.users_role
      created_data: Date
      updatedAt: Date
      companyId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends user$companiesArgs<ExtArgs> = {}>(args?: Subset<T, user$companiesArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends user$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, user$vehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'users_role'>
    readonly created_data: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly companyId: FieldRef<"user", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.companies
   */
  export type user$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    where?: companiesWhereInput
  }

  /**
   * user.vehicle
   */
  export type user$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    where?: vehicleWhereInput
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    cursor?: vehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    ownerId: number | null
    capacity: number | null
    companyId: number | null
  }

  export type VehicleSumAggregateOutputType = {
    ownerId: number | null
    capacity: number | null
    companyId: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    Type: $Enums.vehicle_Type | null
    plateNumber: string | null
    make: string | null
    model: string | null
    driverId: string | null
    ownerId: number | null
    capacity: number | null
    companyId: number | null
    Imei: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    Type: $Enums.vehicle_Type | null
    plateNumber: string | null
    make: string | null
    model: string | null
    driverId: string | null
    ownerId: number | null
    capacity: number | null
    companyId: number | null
    Imei: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    Type: number
    plateNumber: number
    make: number
    model: number
    driverId: number
    ownerId: number
    capacity: number
    companyId: number
    Imei: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    ownerId?: true
    capacity?: true
    companyId?: true
  }

  export type VehicleSumAggregateInputType = {
    ownerId?: true
    capacity?: true
    companyId?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    Type?: true
    plateNumber?: true
    make?: true
    model?: true
    driverId?: true
    ownerId?: true
    capacity?: true
    companyId?: true
    Imei?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    Type?: true
    plateNumber?: true
    make?: true
    model?: true
    driverId?: true
    ownerId?: true
    capacity?: true
    companyId?: true
    Imei?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    Type?: true
    plateNumber?: true
    make?: true
    model?: true
    driverId?: true
    ownerId?: true
    capacity?: true
    companyId?: true
    Imei?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle to aggregate.
     */
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type vehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput
    orderBy?: vehicleOrderByWithAggregationInput | vehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: vehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    Type: $Enums.vehicle_Type
    plateNumber: string | null
    make: string | null
    model: string | null
    driverId: string | null
    ownerId: number
    capacity: number | null
    companyId: number | null
    Imei: string | null
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends vehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type vehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Type?: boolean
    plateNumber?: boolean
    make?: boolean
    model?: boolean
    driverId?: boolean
    ownerId?: boolean
    capacity?: boolean
    companyId?: boolean
    Imei?: boolean
    alert?: boolean | vehicle$alertArgs<ExtArgs>
    dailysummary?: boolean | vehicle$dailysummaryArgs<ExtArgs>
    maintenance?: boolean | vehicle$maintenanceArgs<ExtArgs>
    maintenance_data?: boolean | vehicle$maintenance_dataArgs<ExtArgs>
    status?: boolean | vehicle$statusArgs<ExtArgs>
    trip?: boolean | vehicle$tripArgs<ExtArgs>
    companies?: boolean | vehicle$companiesArgs<ExtArgs>
    driver?: boolean | vehicle$driverArgs<ExtArgs>
    users?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>



  export type vehicleSelectScalar = {
    id?: boolean
    Type?: boolean
    plateNumber?: boolean
    make?: boolean
    model?: boolean
    driverId?: boolean
    ownerId?: boolean
    capacity?: boolean
    companyId?: boolean
    Imei?: boolean
  }

  export type vehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Type" | "plateNumber" | "make" | "model" | "driverId" | "ownerId" | "capacity" | "companyId" | "Imei", ExtArgs["result"]["vehicle"]>
  export type vehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alert?: boolean | vehicle$alertArgs<ExtArgs>
    dailysummary?: boolean | vehicle$dailysummaryArgs<ExtArgs>
    maintenance?: boolean | vehicle$maintenanceArgs<ExtArgs>
    maintenance_data?: boolean | vehicle$maintenance_dataArgs<ExtArgs>
    status?: boolean | vehicle$statusArgs<ExtArgs>
    trip?: boolean | vehicle$tripArgs<ExtArgs>
    companies?: boolean | vehicle$companiesArgs<ExtArgs>
    driver?: boolean | vehicle$driverArgs<ExtArgs>
    users?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehicle"
    objects: {
      alert: Prisma.$alertPayload<ExtArgs>[]
      dailysummary: Prisma.$dailySummaryPayload<ExtArgs>[]
      maintenance: Prisma.$maintenancePayload<ExtArgs>[]
      maintenance_data: Prisma.$maintenance_dataPayload<ExtArgs>[]
      status: Prisma.$statusPayload<ExtArgs>[]
      trip: Prisma.$tripPayload<ExtArgs>[]
      companies: Prisma.$companiesPayload<ExtArgs> | null
      driver: Prisma.$driverPayload<ExtArgs> | null
      users: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Type: $Enums.vehicle_Type
      plateNumber: string | null
      make: string | null
      model: string | null
      driverId: string | null
      ownerId: number
      capacity: number | null
      companyId: number | null
      Imei: string | null
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type vehicleGetPayload<S extends boolean | null | undefined | vehicleDefaultArgs> = $Result.GetResult<Prisma.$vehiclePayload, S>

  type vehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface vehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle'], meta: { name: 'vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {vehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehicleFindUniqueArgs>(args: SelectSubset<T, vehicleFindUniqueArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, vehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehicleFindFirstArgs>(args?: SelectSubset<T, vehicleFindFirstArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, vehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vehicleFindManyArgs>(args?: SelectSubset<T, vehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {vehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends vehicleCreateArgs>(args: SelectSubset<T, vehicleCreateArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {vehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehicleCreateManyArgs>(args?: SelectSubset<T, vehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {vehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends vehicleDeleteArgs>(args: SelectSubset<T, vehicleDeleteArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {vehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehicleUpdateArgs>(args: SelectSubset<T, vehicleUpdateArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {vehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehicleDeleteManyArgs>(args?: SelectSubset<T, vehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehicleUpdateManyArgs>(args: SelectSubset<T, vehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {vehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends vehicleUpsertArgs>(args: SelectSubset<T, vehicleUpsertArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends vehicleCountArgs>(
      args?: Subset<T, vehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicleGroupByArgs['orderBy'] }
        : { orderBy?: vehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehicle model
   */
  readonly fields: vehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alert<T extends vehicle$alertArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$alertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailysummary<T extends vehicle$dailysummaryArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$dailysummaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dailySummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenance<T extends vehicle$maintenanceArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$maintenanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenance_data<T extends vehicle$maintenance_dataArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$maintenance_dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    status<T extends vehicle$statusArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trip<T extends vehicle$tripArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$tripArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companies<T extends vehicle$companiesArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$companiesArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    driver<T extends vehicle$driverArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$driverArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vehicle model
   */
  interface vehicleFieldRefs {
    readonly id: FieldRef<"vehicle", 'String'>
    readonly Type: FieldRef<"vehicle", 'vehicle_Type'>
    readonly plateNumber: FieldRef<"vehicle", 'String'>
    readonly make: FieldRef<"vehicle", 'String'>
    readonly model: FieldRef<"vehicle", 'String'>
    readonly driverId: FieldRef<"vehicle", 'String'>
    readonly ownerId: FieldRef<"vehicle", 'Int'>
    readonly capacity: FieldRef<"vehicle", 'Int'>
    readonly companyId: FieldRef<"vehicle", 'Int'>
    readonly Imei: FieldRef<"vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vehicle findUnique
   */
  export type vehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle findUniqueOrThrow
   */
  export type vehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle findFirst
   */
  export type vehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * vehicle findFirstOrThrow
   */
  export type vehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * vehicle findMany
   */
  export type vehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicles.
     */
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * vehicle create
   */
  export type vehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a vehicle.
     */
    data: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>
  }

  /**
   * vehicle createMany
   */
  export type vehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicles.
     */
    data: vehicleCreateManyInput | vehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicle update
   */
  export type vehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a vehicle.
     */
    data: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>
    /**
     * Choose, which vehicle to update.
     */
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle updateMany
   */
  export type vehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyInput>
    /**
     * Filter which vehicles to update
     */
    where?: vehicleWhereInput
    /**
     * Limit how many vehicles to update.
     */
    limit?: number
  }

  /**
   * vehicle upsert
   */
  export type vehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the vehicle to update in case it exists.
     */
    where: vehicleWhereUniqueInput
    /**
     * In case the vehicle found by the `where` argument doesn't exist, create a new vehicle with this data.
     */
    create: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>
    /**
     * In case the vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>
  }

  /**
   * vehicle delete
   */
  export type vehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter which vehicle to delete.
     */
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle deleteMany
   */
  export type vehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to delete
     */
    where?: vehicleWhereInput
    /**
     * Limit how many vehicles to delete.
     */
    limit?: number
  }

  /**
   * vehicle.alert
   */
  export type vehicle$alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alert
     */
    select?: alertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alert
     */
    omit?: alertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alertInclude<ExtArgs> | null
    where?: alertWhereInput
    orderBy?: alertOrderByWithRelationInput | alertOrderByWithRelationInput[]
    cursor?: alertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * vehicle.dailysummary
   */
  export type vehicle$dailysummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dailySummary
     */
    select?: dailySummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dailySummary
     */
    omit?: dailySummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dailySummaryInclude<ExtArgs> | null
    where?: dailySummaryWhereInput
    orderBy?: dailySummaryOrderByWithRelationInput | dailySummaryOrderByWithRelationInput[]
    cursor?: dailySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * vehicle.maintenance
   */
  export type vehicle$maintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance
     */
    omit?: maintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenanceInclude<ExtArgs> | null
    where?: maintenanceWhereInput
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[]
    cursor?: maintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * vehicle.maintenance_data
   */
  export type vehicle$maintenance_dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_data
     */
    select?: maintenance_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_data
     */
    omit?: maintenance_dataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_dataInclude<ExtArgs> | null
    where?: maintenance_dataWhereInput
    orderBy?: maintenance_dataOrderByWithRelationInput | maintenance_dataOrderByWithRelationInput[]
    cursor?: maintenance_dataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Maintenance_dataScalarFieldEnum | Maintenance_dataScalarFieldEnum[]
  }

  /**
   * vehicle.status
   */
  export type vehicle$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    where?: statusWhereInput
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    cursor?: statusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * vehicle.trip
   */
  export type vehicle$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    where?: tripWhereInput
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    cursor?: tripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * vehicle.companies
   */
  export type vehicle$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    where?: companiesWhereInput
  }

  /**
   * vehicle.driver
   */
  export type vehicle$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    where?: driverWhereInput
  }

  /**
   * vehicle without action
   */
  export type vehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlertScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    type: 'type',
    severity: 'severity',
    message: 'message',
    isResolved: 'isResolved',
    createdAt: 'createdAt',
    DriverId: 'DriverId'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const DailySummaryScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    date: 'date',
    modeFuelLevel: 'modeFuelLevel',
    modeOilPressure: 'modeOilPressure',
    modeBattVoltage: 'modeBattVoltage',
    modeEngineLoad: 'modeEngineLoad',
    modeSpeed: 'modeSpeed',
    modeEngineRPM: 'modeEngineRPM',
    modeEngineTemp: 'modeEngineTemp',
    totalDistance: 'totalDistance',
    totalFuelUsed: 'totalFuelUsed',
    totalEngineHrs: 'totalEngineHrs',
    IdleTime: 'IdleTime',
    RunningTime: 'RunningTime',
    sampleCount: 'sampleCount',
    updatedAt: 'updatedAt'
  };

  export type DailySummaryScalarFieldEnum = (typeof DailySummaryScalarFieldEnum)[keyof typeof DailySummaryScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    licenseNo: 'licenseNo',
    performance: 'performance',
    licenceExp: 'licenceExp',
    companyId: 'companyId'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const MaintenanceScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    serviceDate: 'serviceDate',
    nextService: 'nextService',
    description: 'description',
    cost: 'cost'
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum]


  export const Maintenance_dataScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    fuelRate: 'fuelRate',
    fuelEff: 'fuelEff',
    EngineHours: 'EngineHours',
    updatedAt: 'updatedAt'
  };

  export type Maintenance_dataScalarFieldEnum = (typeof Maintenance_dataScalarFieldEnum)[keyof typeof Maintenance_dataScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    lastLat: 'lastLat',
    lastLng: 'lastLng',
    lastSpeed: 'lastSpeed',
    state: 'state',
    fuelLevel: 'fuelLevel',
    engineHours: 'engineHours',
    lastUpdate: 'lastUpdate',
    vehicleId: 'vehicleId',
    BattVoltage: 'BattVoltage',
    EngineLoad: 'EngineLoad',
    OilPressure: 'OilPressure',
    distance: 'distance',
    engineRPM: 'engineRPM',
    engineTemp: 'engineTemp',
    fuelUsed: 'fuelUsed'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    startTime: 'startTime',
    endTime: 'endTime',
    distance: 'distance',
    fuelUsed: 'fuelUsed',
    startLoc: 'startLoc',
    endLoc: 'endLoc'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    created_data: 'created_data',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    Type: 'Type',
    plateNumber: 'plateNumber',
    make: 'make',
    model: 'model',
    driverId: 'driverId',
    ownerId: 'ownerId',
    capacity: 'capacity',
    companyId: 'companyId',
    Imei: 'Imei'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const alertOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    message: 'message',
    DriverId: 'DriverId'
  };

  export type alertOrderByRelevanceFieldEnum = (typeof alertOrderByRelevanceFieldEnum)[keyof typeof alertOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const companiesOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address'
  };

  export type companiesOrderByRelevanceFieldEnum = (typeof companiesOrderByRelevanceFieldEnum)[keyof typeof companiesOrderByRelevanceFieldEnum]


  export const dailySummaryOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId'
  };

  export type dailySummaryOrderByRelevanceFieldEnum = (typeof dailySummaryOrderByRelevanceFieldEnum)[keyof typeof dailySummaryOrderByRelevanceFieldEnum]


  export const driverOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    licenseNo: 'licenseNo'
  };

  export type driverOrderByRelevanceFieldEnum = (typeof driverOrderByRelevanceFieldEnum)[keyof typeof driverOrderByRelevanceFieldEnum]


  export const maintenanceOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    description: 'description'
  };

  export type maintenanceOrderByRelevanceFieldEnum = (typeof maintenanceOrderByRelevanceFieldEnum)[keyof typeof maintenanceOrderByRelevanceFieldEnum]


  export const maintenance_dataOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId'
  };

  export type maintenance_dataOrderByRelevanceFieldEnum = (typeof maintenance_dataOrderByRelevanceFieldEnum)[keyof typeof maintenance_dataOrderByRelevanceFieldEnum]


  export const statusOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId'
  };

  export type statusOrderByRelevanceFieldEnum = (typeof statusOrderByRelevanceFieldEnum)[keyof typeof statusOrderByRelevanceFieldEnum]


  export const tripOrderByRelevanceFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    startLoc: 'startLoc',
    endLoc: 'endLoc'
  };

  export type tripOrderByRelevanceFieldEnum = (typeof tripOrderByRelevanceFieldEnum)[keyof typeof tripOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const vehicleOrderByRelevanceFieldEnum: {
    id: 'id',
    plateNumber: 'plateNumber',
    make: 'make',
    model: 'model',
    driverId: 'driverId',
    Imei: 'Imei'
  };

  export type vehicleOrderByRelevanceFieldEnum = (typeof vehicleOrderByRelevanceFieldEnum)[keyof typeof vehicleOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'alert_type'
   */
  export type Enumalert_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'alert_type'>
    


  /**
   * Reference to a field of type 'alert_severity'
   */
  export type Enumalert_severityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'alert_severity'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'status_state'
   */
  export type Enumstatus_stateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_state'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'vehicle_Type'
   */
  export type Enumvehicle_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'vehicle_Type'>
    
  /**
   * Deep Input Types
   */


  export type alertWhereInput = {
    AND?: alertWhereInput | alertWhereInput[]
    OR?: alertWhereInput[]
    NOT?: alertWhereInput | alertWhereInput[]
    id?: StringFilter<"alert"> | string
    vehicleId?: StringFilter<"alert"> | string
    type?: Enumalert_typeFilter<"alert"> | $Enums.alert_type
    severity?: Enumalert_severityFilter<"alert"> | $Enums.alert_severity
    message?: StringFilter<"alert"> | string
    isResolved?: BoolFilter<"alert"> | boolean
    createdAt?: DateTimeFilter<"alert"> | Date | string
    DriverId?: StringFilter<"alert"> | string
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }

  export type alertOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    DriverId?: SortOrder
    driver?: driverOrderByWithRelationInput
    vehicle?: vehicleOrderByWithRelationInput
    _relevance?: alertOrderByRelevanceInput
  }

  export type alertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: alertWhereInput | alertWhereInput[]
    OR?: alertWhereInput[]
    NOT?: alertWhereInput | alertWhereInput[]
    vehicleId?: StringFilter<"alert"> | string
    type?: Enumalert_typeFilter<"alert"> | $Enums.alert_type
    severity?: Enumalert_severityFilter<"alert"> | $Enums.alert_severity
    message?: StringFilter<"alert"> | string
    isResolved?: BoolFilter<"alert"> | boolean
    createdAt?: DateTimeFilter<"alert"> | Date | string
    DriverId?: StringFilter<"alert"> | string
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }, "id">

  export type alertOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    DriverId?: SortOrder
    _count?: alertCountOrderByAggregateInput
    _max?: alertMaxOrderByAggregateInput
    _min?: alertMinOrderByAggregateInput
  }

  export type alertScalarWhereWithAggregatesInput = {
    AND?: alertScalarWhereWithAggregatesInput | alertScalarWhereWithAggregatesInput[]
    OR?: alertScalarWhereWithAggregatesInput[]
    NOT?: alertScalarWhereWithAggregatesInput | alertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"alert"> | string
    vehicleId?: StringWithAggregatesFilter<"alert"> | string
    type?: Enumalert_typeWithAggregatesFilter<"alert"> | $Enums.alert_type
    severity?: Enumalert_severityWithAggregatesFilter<"alert"> | $Enums.alert_severity
    message?: StringWithAggregatesFilter<"alert"> | string
    isResolved?: BoolWithAggregatesFilter<"alert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"alert"> | Date | string
    DriverId?: StringWithAggregatesFilter<"alert"> | string
  }

  export type companiesWhereInput = {
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    id?: IntFilter<"companies"> | number
    name?: StringFilter<"companies"> | string
    email?: StringNullableFilter<"companies"> | string | null
    phone?: StringNullableFilter<"companies"> | string | null
    address?: StringNullableFilter<"companies"> | string | null
    createdAt?: DateTimeFilter<"companies"> | Date | string
    updatedAt?: DateTimeFilter<"companies"> | Date | string
    driver?: DriverListRelationFilter
    users?: UserListRelationFilter
    vehicle?: VehicleListRelationFilter
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: driverOrderByRelationAggregateInput
    users?: userOrderByRelationAggregateInput
    vehicle?: vehicleOrderByRelationAggregateInput
    _relevance?: companiesOrderByRelevanceInput
  }

  export type companiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    name?: StringFilter<"companies"> | string
    email?: StringNullableFilter<"companies"> | string | null
    phone?: StringNullableFilter<"companies"> | string | null
    address?: StringNullableFilter<"companies"> | string | null
    createdAt?: DateTimeFilter<"companies"> | Date | string
    updatedAt?: DateTimeFilter<"companies"> | Date | string
    driver?: DriverListRelationFilter
    users?: UserListRelationFilter
    vehicle?: VehicleListRelationFilter
  }, "id">

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: companiesCountOrderByAggregateInput
    _avg?: companiesAvgOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
    _sum?: companiesSumOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    OR?: companiesScalarWhereWithAggregatesInput[]
    NOT?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"companies"> | number
    name?: StringWithAggregatesFilter<"companies"> | string
    email?: StringNullableWithAggregatesFilter<"companies"> | string | null
    phone?: StringNullableWithAggregatesFilter<"companies"> | string | null
    address?: StringNullableWithAggregatesFilter<"companies"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"companies"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"companies"> | Date | string
  }

  export type dailySummaryWhereInput = {
    AND?: dailySummaryWhereInput | dailySummaryWhereInput[]
    OR?: dailySummaryWhereInput[]
    NOT?: dailySummaryWhereInput | dailySummaryWhereInput[]
    id?: StringFilter<"dailySummary"> | string
    vehicleId?: StringFilter<"dailySummary"> | string
    date?: DateTimeFilter<"dailySummary"> | Date | string
    modeFuelLevel?: FloatNullableFilter<"dailySummary"> | number | null
    modeOilPressure?: FloatNullableFilter<"dailySummary"> | number | null
    modeBattVoltage?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineLoad?: FloatNullableFilter<"dailySummary"> | number | null
    modeSpeed?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineRPM?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineTemp?: FloatNullableFilter<"dailySummary"> | number | null
    totalDistance?: FloatFilter<"dailySummary"> | number
    totalFuelUsed?: FloatFilter<"dailySummary"> | number
    totalEngineHrs?: FloatFilter<"dailySummary"> | number
    IdleTime?: FloatFilter<"dailySummary"> | number
    RunningTime?: FloatFilter<"dailySummary"> | number
    sampleCount?: IntFilter<"dailySummary"> | number
    updatedAt?: DateTimeFilter<"dailySummary"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }

  export type dailySummaryOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    modeFuelLevel?: SortOrderInput | SortOrder
    modeOilPressure?: SortOrderInput | SortOrder
    modeBattVoltage?: SortOrderInput | SortOrder
    modeEngineLoad?: SortOrderInput | SortOrder
    modeSpeed?: SortOrderInput | SortOrder
    modeEngineRPM?: SortOrderInput | SortOrder
    modeEngineTemp?: SortOrderInput | SortOrder
    totalDistance?: SortOrder
    totalFuelUsed?: SortOrder
    totalEngineHrs?: SortOrder
    IdleTime?: SortOrder
    RunningTime?: SortOrder
    sampleCount?: SortOrder
    updatedAt?: SortOrder
    vehicle?: vehicleOrderByWithRelationInput
    _relevance?: dailySummaryOrderByRelevanceInput
  }

  export type dailySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehicleId_date?: dailySummaryVehicleIdDateCompoundUniqueInput
    AND?: dailySummaryWhereInput | dailySummaryWhereInput[]
    OR?: dailySummaryWhereInput[]
    NOT?: dailySummaryWhereInput | dailySummaryWhereInput[]
    vehicleId?: StringFilter<"dailySummary"> | string
    date?: DateTimeFilter<"dailySummary"> | Date | string
    modeFuelLevel?: FloatNullableFilter<"dailySummary"> | number | null
    modeOilPressure?: FloatNullableFilter<"dailySummary"> | number | null
    modeBattVoltage?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineLoad?: FloatNullableFilter<"dailySummary"> | number | null
    modeSpeed?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineRPM?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineTemp?: FloatNullableFilter<"dailySummary"> | number | null
    totalDistance?: FloatFilter<"dailySummary"> | number
    totalFuelUsed?: FloatFilter<"dailySummary"> | number
    totalEngineHrs?: FloatFilter<"dailySummary"> | number
    IdleTime?: FloatFilter<"dailySummary"> | number
    RunningTime?: FloatFilter<"dailySummary"> | number
    sampleCount?: IntFilter<"dailySummary"> | number
    updatedAt?: DateTimeFilter<"dailySummary"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }, "id" | "vehicleId_date">

  export type dailySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    modeFuelLevel?: SortOrderInput | SortOrder
    modeOilPressure?: SortOrderInput | SortOrder
    modeBattVoltage?: SortOrderInput | SortOrder
    modeEngineLoad?: SortOrderInput | SortOrder
    modeSpeed?: SortOrderInput | SortOrder
    modeEngineRPM?: SortOrderInput | SortOrder
    modeEngineTemp?: SortOrderInput | SortOrder
    totalDistance?: SortOrder
    totalFuelUsed?: SortOrder
    totalEngineHrs?: SortOrder
    IdleTime?: SortOrder
    RunningTime?: SortOrder
    sampleCount?: SortOrder
    updatedAt?: SortOrder
    _count?: dailySummaryCountOrderByAggregateInput
    _avg?: dailySummaryAvgOrderByAggregateInput
    _max?: dailySummaryMaxOrderByAggregateInput
    _min?: dailySummaryMinOrderByAggregateInput
    _sum?: dailySummarySumOrderByAggregateInput
  }

  export type dailySummaryScalarWhereWithAggregatesInput = {
    AND?: dailySummaryScalarWhereWithAggregatesInput | dailySummaryScalarWhereWithAggregatesInput[]
    OR?: dailySummaryScalarWhereWithAggregatesInput[]
    NOT?: dailySummaryScalarWhereWithAggregatesInput | dailySummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"dailySummary"> | string
    vehicleId?: StringWithAggregatesFilter<"dailySummary"> | string
    date?: DateTimeWithAggregatesFilter<"dailySummary"> | Date | string
    modeFuelLevel?: FloatNullableWithAggregatesFilter<"dailySummary"> | number | null
    modeOilPressure?: FloatNullableWithAggregatesFilter<"dailySummary"> | number | null
    modeBattVoltage?: FloatNullableWithAggregatesFilter<"dailySummary"> | number | null
    modeEngineLoad?: FloatNullableWithAggregatesFilter<"dailySummary"> | number | null
    modeSpeed?: FloatNullableWithAggregatesFilter<"dailySummary"> | number | null
    modeEngineRPM?: FloatNullableWithAggregatesFilter<"dailySummary"> | number | null
    modeEngineTemp?: FloatNullableWithAggregatesFilter<"dailySummary"> | number | null
    totalDistance?: FloatWithAggregatesFilter<"dailySummary"> | number
    totalFuelUsed?: FloatWithAggregatesFilter<"dailySummary"> | number
    totalEngineHrs?: FloatWithAggregatesFilter<"dailySummary"> | number
    IdleTime?: FloatWithAggregatesFilter<"dailySummary"> | number
    RunningTime?: FloatWithAggregatesFilter<"dailySummary"> | number
    sampleCount?: IntWithAggregatesFilter<"dailySummary"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"dailySummary"> | Date | string
  }

  export type driverWhereInput = {
    AND?: driverWhereInput | driverWhereInput[]
    OR?: driverWhereInput[]
    NOT?: driverWhereInput | driverWhereInput[]
    id?: StringFilter<"driver"> | string
    name?: StringFilter<"driver"> | string
    phone?: StringNullableFilter<"driver"> | string | null
    licenseNo?: StringNullableFilter<"driver"> | string | null
    performance?: FloatFilter<"driver"> | number
    licenceExp?: DateTimeNullableFilter<"driver"> | Date | string | null
    companyId?: IntNullableFilter<"driver"> | number | null
    alert?: AlertListRelationFilter
    companies?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    vehicle?: XOR<VehicleNullableScalarRelationFilter, vehicleWhereInput> | null
  }

  export type driverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    licenseNo?: SortOrderInput | SortOrder
    performance?: SortOrder
    licenceExp?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    alert?: alertOrderByRelationAggregateInput
    companies?: companiesOrderByWithRelationInput
    vehicle?: vehicleOrderByWithRelationInput
    _relevance?: driverOrderByRelevanceInput
  }

  export type driverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: driverWhereInput | driverWhereInput[]
    OR?: driverWhereInput[]
    NOT?: driverWhereInput | driverWhereInput[]
    name?: StringFilter<"driver"> | string
    phone?: StringNullableFilter<"driver"> | string | null
    licenseNo?: StringNullableFilter<"driver"> | string | null
    performance?: FloatFilter<"driver"> | number
    licenceExp?: DateTimeNullableFilter<"driver"> | Date | string | null
    companyId?: IntNullableFilter<"driver"> | number | null
    alert?: AlertListRelationFilter
    companies?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    vehicle?: XOR<VehicleNullableScalarRelationFilter, vehicleWhereInput> | null
  }, "id">

  export type driverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    licenseNo?: SortOrderInput | SortOrder
    performance?: SortOrder
    licenceExp?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    _count?: driverCountOrderByAggregateInput
    _avg?: driverAvgOrderByAggregateInput
    _max?: driverMaxOrderByAggregateInput
    _min?: driverMinOrderByAggregateInput
    _sum?: driverSumOrderByAggregateInput
  }

  export type driverScalarWhereWithAggregatesInput = {
    AND?: driverScalarWhereWithAggregatesInput | driverScalarWhereWithAggregatesInput[]
    OR?: driverScalarWhereWithAggregatesInput[]
    NOT?: driverScalarWhereWithAggregatesInput | driverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"driver"> | string
    name?: StringWithAggregatesFilter<"driver"> | string
    phone?: StringNullableWithAggregatesFilter<"driver"> | string | null
    licenseNo?: StringNullableWithAggregatesFilter<"driver"> | string | null
    performance?: FloatWithAggregatesFilter<"driver"> | number
    licenceExp?: DateTimeNullableWithAggregatesFilter<"driver"> | Date | string | null
    companyId?: IntNullableWithAggregatesFilter<"driver"> | number | null
  }

  export type maintenanceWhereInput = {
    AND?: maintenanceWhereInput | maintenanceWhereInput[]
    OR?: maintenanceWhereInput[]
    NOT?: maintenanceWhereInput | maintenanceWhereInput[]
    id?: StringFilter<"maintenance"> | string
    vehicleId?: StringFilter<"maintenance"> | string
    serviceDate?: DateTimeFilter<"maintenance"> | Date | string
    nextService?: DateTimeFilter<"maintenance"> | Date | string
    description?: StringFilter<"maintenance"> | string
    cost?: FloatNullableFilter<"maintenance"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }

  export type maintenanceOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    serviceDate?: SortOrder
    nextService?: SortOrder
    description?: SortOrder
    cost?: SortOrderInput | SortOrder
    vehicle?: vehicleOrderByWithRelationInput
    _relevance?: maintenanceOrderByRelevanceInput
  }

  export type maintenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: maintenanceWhereInput | maintenanceWhereInput[]
    OR?: maintenanceWhereInput[]
    NOT?: maintenanceWhereInput | maintenanceWhereInput[]
    vehicleId?: StringFilter<"maintenance"> | string
    serviceDate?: DateTimeFilter<"maintenance"> | Date | string
    nextService?: DateTimeFilter<"maintenance"> | Date | string
    description?: StringFilter<"maintenance"> | string
    cost?: FloatNullableFilter<"maintenance"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }, "id">

  export type maintenanceOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    serviceDate?: SortOrder
    nextService?: SortOrder
    description?: SortOrder
    cost?: SortOrderInput | SortOrder
    _count?: maintenanceCountOrderByAggregateInput
    _avg?: maintenanceAvgOrderByAggregateInput
    _max?: maintenanceMaxOrderByAggregateInput
    _min?: maintenanceMinOrderByAggregateInput
    _sum?: maintenanceSumOrderByAggregateInput
  }

  export type maintenanceScalarWhereWithAggregatesInput = {
    AND?: maintenanceScalarWhereWithAggregatesInput | maintenanceScalarWhereWithAggregatesInput[]
    OR?: maintenanceScalarWhereWithAggregatesInput[]
    NOT?: maintenanceScalarWhereWithAggregatesInput | maintenanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"maintenance"> | string
    vehicleId?: StringWithAggregatesFilter<"maintenance"> | string
    serviceDate?: DateTimeWithAggregatesFilter<"maintenance"> | Date | string
    nextService?: DateTimeWithAggregatesFilter<"maintenance"> | Date | string
    description?: StringWithAggregatesFilter<"maintenance"> | string
    cost?: FloatNullableWithAggregatesFilter<"maintenance"> | number | null
  }

  export type maintenance_dataWhereInput = {
    AND?: maintenance_dataWhereInput | maintenance_dataWhereInput[]
    OR?: maintenance_dataWhereInput[]
    NOT?: maintenance_dataWhereInput | maintenance_dataWhereInput[]
    id?: StringFilter<"maintenance_data"> | string
    vehicleId?: StringFilter<"maintenance_data"> | string
    fuelRate?: FloatNullableFilter<"maintenance_data"> | number | null
    fuelEff?: FloatNullableFilter<"maintenance_data"> | number | null
    EngineHours?: FloatNullableFilter<"maintenance_data"> | number | null
    updatedAt?: DateTimeFilter<"maintenance_data"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }

  export type maintenance_dataOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fuelRate?: SortOrderInput | SortOrder
    fuelEff?: SortOrderInput | SortOrder
    EngineHours?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    vehicle?: vehicleOrderByWithRelationInput
    _relevance?: maintenance_dataOrderByRelevanceInput
  }

  export type maintenance_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: maintenance_dataWhereInput | maintenance_dataWhereInput[]
    OR?: maintenance_dataWhereInput[]
    NOT?: maintenance_dataWhereInput | maintenance_dataWhereInput[]
    vehicleId?: StringFilter<"maintenance_data"> | string
    fuelRate?: FloatNullableFilter<"maintenance_data"> | number | null
    fuelEff?: FloatNullableFilter<"maintenance_data"> | number | null
    EngineHours?: FloatNullableFilter<"maintenance_data"> | number | null
    updatedAt?: DateTimeFilter<"maintenance_data"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }, "id">

  export type maintenance_dataOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fuelRate?: SortOrderInput | SortOrder
    fuelEff?: SortOrderInput | SortOrder
    EngineHours?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: maintenance_dataCountOrderByAggregateInput
    _avg?: maintenance_dataAvgOrderByAggregateInput
    _max?: maintenance_dataMaxOrderByAggregateInput
    _min?: maintenance_dataMinOrderByAggregateInput
    _sum?: maintenance_dataSumOrderByAggregateInput
  }

  export type maintenance_dataScalarWhereWithAggregatesInput = {
    AND?: maintenance_dataScalarWhereWithAggregatesInput | maintenance_dataScalarWhereWithAggregatesInput[]
    OR?: maintenance_dataScalarWhereWithAggregatesInput[]
    NOT?: maintenance_dataScalarWhereWithAggregatesInput | maintenance_dataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"maintenance_data"> | string
    vehicleId?: StringWithAggregatesFilter<"maintenance_data"> | string
    fuelRate?: FloatNullableWithAggregatesFilter<"maintenance_data"> | number | null
    fuelEff?: FloatNullableWithAggregatesFilter<"maintenance_data"> | number | null
    EngineHours?: FloatNullableWithAggregatesFilter<"maintenance_data"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"maintenance_data"> | Date | string
  }

  export type statusWhereInput = {
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    id?: StringFilter<"status"> | string
    lastLat?: FloatNullableFilter<"status"> | number | null
    lastLng?: FloatNullableFilter<"status"> | number | null
    lastSpeed?: FloatNullableFilter<"status"> | number | null
    state?: Enumstatus_stateFilter<"status"> | $Enums.status_state
    fuelLevel?: FloatNullableFilter<"status"> | number | null
    engineHours?: FloatNullableFilter<"status"> | number | null
    lastUpdate?: DateTimeFilter<"status"> | Date | string
    vehicleId?: StringFilter<"status"> | string
    BattVoltage?: FloatNullableFilter<"status"> | number | null
    EngineLoad?: FloatNullableFilter<"status"> | number | null
    OilPressure?: FloatNullableFilter<"status"> | number | null
    distance?: FloatNullableFilter<"status"> | number | null
    engineRPM?: IntNullableFilter<"status"> | number | null
    engineTemp?: FloatNullableFilter<"status"> | number | null
    fuelUsed?: FloatNullableFilter<"status"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }

  export type statusOrderByWithRelationInput = {
    id?: SortOrder
    lastLat?: SortOrderInput | SortOrder
    lastLng?: SortOrderInput | SortOrder
    lastSpeed?: SortOrderInput | SortOrder
    state?: SortOrder
    fuelLevel?: SortOrderInput | SortOrder
    engineHours?: SortOrderInput | SortOrder
    lastUpdate?: SortOrder
    vehicleId?: SortOrder
    BattVoltage?: SortOrderInput | SortOrder
    EngineLoad?: SortOrderInput | SortOrder
    OilPressure?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    engineRPM?: SortOrderInput | SortOrder
    engineTemp?: SortOrderInput | SortOrder
    fuelUsed?: SortOrderInput | SortOrder
    vehicle?: vehicleOrderByWithRelationInput
    _relevance?: statusOrderByRelevanceInput
  }

  export type statusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    lastLat?: FloatNullableFilter<"status"> | number | null
    lastLng?: FloatNullableFilter<"status"> | number | null
    lastSpeed?: FloatNullableFilter<"status"> | number | null
    state?: Enumstatus_stateFilter<"status"> | $Enums.status_state
    fuelLevel?: FloatNullableFilter<"status"> | number | null
    engineHours?: FloatNullableFilter<"status"> | number | null
    lastUpdate?: DateTimeFilter<"status"> | Date | string
    vehicleId?: StringFilter<"status"> | string
    BattVoltage?: FloatNullableFilter<"status"> | number | null
    EngineLoad?: FloatNullableFilter<"status"> | number | null
    OilPressure?: FloatNullableFilter<"status"> | number | null
    distance?: FloatNullableFilter<"status"> | number | null
    engineRPM?: IntNullableFilter<"status"> | number | null
    engineTemp?: FloatNullableFilter<"status"> | number | null
    fuelUsed?: FloatNullableFilter<"status"> | number | null
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }, "id">

  export type statusOrderByWithAggregationInput = {
    id?: SortOrder
    lastLat?: SortOrderInput | SortOrder
    lastLng?: SortOrderInput | SortOrder
    lastSpeed?: SortOrderInput | SortOrder
    state?: SortOrder
    fuelLevel?: SortOrderInput | SortOrder
    engineHours?: SortOrderInput | SortOrder
    lastUpdate?: SortOrder
    vehicleId?: SortOrder
    BattVoltage?: SortOrderInput | SortOrder
    EngineLoad?: SortOrderInput | SortOrder
    OilPressure?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    engineRPM?: SortOrderInput | SortOrder
    engineTemp?: SortOrderInput | SortOrder
    fuelUsed?: SortOrderInput | SortOrder
    _count?: statusCountOrderByAggregateInput
    _avg?: statusAvgOrderByAggregateInput
    _max?: statusMaxOrderByAggregateInput
    _min?: statusMinOrderByAggregateInput
    _sum?: statusSumOrderByAggregateInput
  }

  export type statusScalarWhereWithAggregatesInput = {
    AND?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    OR?: statusScalarWhereWithAggregatesInput[]
    NOT?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"status"> | string
    lastLat?: FloatNullableWithAggregatesFilter<"status"> | number | null
    lastLng?: FloatNullableWithAggregatesFilter<"status"> | number | null
    lastSpeed?: FloatNullableWithAggregatesFilter<"status"> | number | null
    state?: Enumstatus_stateWithAggregatesFilter<"status"> | $Enums.status_state
    fuelLevel?: FloatNullableWithAggregatesFilter<"status"> | number | null
    engineHours?: FloatNullableWithAggregatesFilter<"status"> | number | null
    lastUpdate?: DateTimeWithAggregatesFilter<"status"> | Date | string
    vehicleId?: StringWithAggregatesFilter<"status"> | string
    BattVoltage?: FloatNullableWithAggregatesFilter<"status"> | number | null
    EngineLoad?: FloatNullableWithAggregatesFilter<"status"> | number | null
    OilPressure?: FloatNullableWithAggregatesFilter<"status"> | number | null
    distance?: FloatNullableWithAggregatesFilter<"status"> | number | null
    engineRPM?: IntNullableWithAggregatesFilter<"status"> | number | null
    engineTemp?: FloatNullableWithAggregatesFilter<"status"> | number | null
    fuelUsed?: FloatNullableWithAggregatesFilter<"status"> | number | null
  }

  export type tripWhereInput = {
    AND?: tripWhereInput | tripWhereInput[]
    OR?: tripWhereInput[]
    NOT?: tripWhereInput | tripWhereInput[]
    id?: StringFilter<"trip"> | string
    vehicleId?: StringFilter<"trip"> | string
    startTime?: DateTimeFilter<"trip"> | Date | string
    endTime?: DateTimeNullableFilter<"trip"> | Date | string | null
    distance?: FloatFilter<"trip"> | number
    fuelUsed?: FloatFilter<"trip"> | number
    startLoc?: StringNullableFilter<"trip"> | string | null
    endLoc?: StringNullableFilter<"trip"> | string | null
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }

  export type tripOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    distance?: SortOrder
    fuelUsed?: SortOrder
    startLoc?: SortOrderInput | SortOrder
    endLoc?: SortOrderInput | SortOrder
    vehicle?: vehicleOrderByWithRelationInput
    _relevance?: tripOrderByRelevanceInput
  }

  export type tripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tripWhereInput | tripWhereInput[]
    OR?: tripWhereInput[]
    NOT?: tripWhereInput | tripWhereInput[]
    vehicleId?: StringFilter<"trip"> | string
    startTime?: DateTimeFilter<"trip"> | Date | string
    endTime?: DateTimeNullableFilter<"trip"> | Date | string | null
    distance?: FloatFilter<"trip"> | number
    fuelUsed?: FloatFilter<"trip"> | number
    startLoc?: StringNullableFilter<"trip"> | string | null
    endLoc?: StringNullableFilter<"trip"> | string | null
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
  }, "id">

  export type tripOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    distance?: SortOrder
    fuelUsed?: SortOrder
    startLoc?: SortOrderInput | SortOrder
    endLoc?: SortOrderInput | SortOrder
    _count?: tripCountOrderByAggregateInput
    _avg?: tripAvgOrderByAggregateInput
    _max?: tripMaxOrderByAggregateInput
    _min?: tripMinOrderByAggregateInput
    _sum?: tripSumOrderByAggregateInput
  }

  export type tripScalarWhereWithAggregatesInput = {
    AND?: tripScalarWhereWithAggregatesInput | tripScalarWhereWithAggregatesInput[]
    OR?: tripScalarWhereWithAggregatesInput[]
    NOT?: tripScalarWhereWithAggregatesInput | tripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"trip"> | string
    vehicleId?: StringWithAggregatesFilter<"trip"> | string
    startTime?: DateTimeWithAggregatesFilter<"trip"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"trip"> | Date | string | null
    distance?: FloatWithAggregatesFilter<"trip"> | number
    fuelUsed?: FloatWithAggregatesFilter<"trip"> | number
    startLoc?: StringNullableWithAggregatesFilter<"trip"> | string | null
    endLoc?: StringNullableWithAggregatesFilter<"trip"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumusers_roleFilter<"user"> | $Enums.users_role
    created_data?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    companyId?: IntNullableFilter<"user"> | number | null
    companies?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    vehicle?: VehicleListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_data?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrderInput | SortOrder
    companies?: companiesOrderByWithRelationInput
    vehicle?: vehicleOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    role?: Enumusers_roleFilter<"user"> | $Enums.users_role
    created_data?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    companyId?: IntNullableFilter<"user"> | number | null
    companies?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    vehicle?: VehicleListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_data?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: Enumusers_roleWithAggregatesFilter<"user"> | $Enums.users_role
    created_data?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    companyId?: IntNullableWithAggregatesFilter<"user"> | number | null
  }

  export type vehicleWhereInput = {
    AND?: vehicleWhereInput | vehicleWhereInput[]
    OR?: vehicleWhereInput[]
    NOT?: vehicleWhereInput | vehicleWhereInput[]
    id?: StringFilter<"vehicle"> | string
    Type?: Enumvehicle_TypeFilter<"vehicle"> | $Enums.vehicle_Type
    plateNumber?: StringNullableFilter<"vehicle"> | string | null
    make?: StringNullableFilter<"vehicle"> | string | null
    model?: StringNullableFilter<"vehicle"> | string | null
    driverId?: StringNullableFilter<"vehicle"> | string | null
    ownerId?: IntFilter<"vehicle"> | number
    capacity?: IntNullableFilter<"vehicle"> | number | null
    companyId?: IntNullableFilter<"vehicle"> | number | null
    Imei?: StringNullableFilter<"vehicle"> | string | null
    alert?: AlertListRelationFilter
    dailysummary?: DailySummaryListRelationFilter
    maintenance?: MaintenanceListRelationFilter
    maintenance_data?: Maintenance_dataListRelationFilter
    status?: StatusListRelationFilter
    trip?: TripListRelationFilter
    companies?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    driver?: XOR<DriverNullableScalarRelationFilter, driverWhereInput> | null
    users?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type vehicleOrderByWithRelationInput = {
    id?: SortOrder
    Type?: SortOrder
    plateNumber?: SortOrderInput | SortOrder
    make?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    driverId?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    capacity?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    Imei?: SortOrderInput | SortOrder
    alert?: alertOrderByRelationAggregateInput
    dailysummary?: dailySummaryOrderByRelationAggregateInput
    maintenance?: maintenanceOrderByRelationAggregateInput
    maintenance_data?: maintenance_dataOrderByRelationAggregateInput
    status?: statusOrderByRelationAggregateInput
    trip?: tripOrderByRelationAggregateInput
    companies?: companiesOrderByWithRelationInput
    driver?: driverOrderByWithRelationInput
    users?: userOrderByWithRelationInput
    _relevance?: vehicleOrderByRelevanceInput
  }

  export type vehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plateNumber?: string
    driverId?: string
    AND?: vehicleWhereInput | vehicleWhereInput[]
    OR?: vehicleWhereInput[]
    NOT?: vehicleWhereInput | vehicleWhereInput[]
    Type?: Enumvehicle_TypeFilter<"vehicle"> | $Enums.vehicle_Type
    make?: StringNullableFilter<"vehicle"> | string | null
    model?: StringNullableFilter<"vehicle"> | string | null
    ownerId?: IntFilter<"vehicle"> | number
    capacity?: IntNullableFilter<"vehicle"> | number | null
    companyId?: IntNullableFilter<"vehicle"> | number | null
    Imei?: StringNullableFilter<"vehicle"> | string | null
    alert?: AlertListRelationFilter
    dailysummary?: DailySummaryListRelationFilter
    maintenance?: MaintenanceListRelationFilter
    maintenance_data?: Maintenance_dataListRelationFilter
    status?: StatusListRelationFilter
    trip?: TripListRelationFilter
    companies?: XOR<CompaniesNullableScalarRelationFilter, companiesWhereInput> | null
    driver?: XOR<DriverNullableScalarRelationFilter, driverWhereInput> | null
    users?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "plateNumber" | "driverId">

  export type vehicleOrderByWithAggregationInput = {
    id?: SortOrder
    Type?: SortOrder
    plateNumber?: SortOrderInput | SortOrder
    make?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    driverId?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    capacity?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    Imei?: SortOrderInput | SortOrder
    _count?: vehicleCountOrderByAggregateInput
    _avg?: vehicleAvgOrderByAggregateInput
    _max?: vehicleMaxOrderByAggregateInput
    _min?: vehicleMinOrderByAggregateInput
    _sum?: vehicleSumOrderByAggregateInput
  }

  export type vehicleScalarWhereWithAggregatesInput = {
    AND?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[]
    OR?: vehicleScalarWhereWithAggregatesInput[]
    NOT?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vehicle"> | string
    Type?: Enumvehicle_TypeWithAggregatesFilter<"vehicle"> | $Enums.vehicle_Type
    plateNumber?: StringNullableWithAggregatesFilter<"vehicle"> | string | null
    make?: StringNullableWithAggregatesFilter<"vehicle"> | string | null
    model?: StringNullableWithAggregatesFilter<"vehicle"> | string | null
    driverId?: StringNullableWithAggregatesFilter<"vehicle"> | string | null
    ownerId?: IntWithAggregatesFilter<"vehicle"> | number
    capacity?: IntNullableWithAggregatesFilter<"vehicle"> | number | null
    companyId?: IntNullableWithAggregatesFilter<"vehicle"> | number | null
    Imei?: StringNullableWithAggregatesFilter<"vehicle"> | string | null
  }

  export type alertCreateInput = {
    id?: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    driver: driverCreateNestedOneWithoutAlertInput
    vehicle: vehicleCreateNestedOneWithoutAlertInput
  }

  export type alertUncheckedCreateInput = {
    id?: string
    vehicleId: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    DriverId: string
  }

  export type alertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUpdateOneRequiredWithoutAlertNestedInput
    vehicle?: vehicleUpdateOneRequiredWithoutAlertNestedInput
  }

  export type alertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DriverId?: StringFieldUpdateOperationsInput | string
  }

  export type alertCreateManyInput = {
    id?: string
    vehicleId: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    DriverId: string
  }

  export type alertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DriverId?: StringFieldUpdateOperationsInput | string
  }

  export type companiesCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    driver?: driverCreateNestedManyWithoutCompaniesInput
    users?: userCreateNestedManyWithoutCompaniesInput
    vehicle?: vehicleCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    driver?: driverUncheckedCreateNestedManyWithoutCompaniesInput
    users?: userUncheckedCreateNestedManyWithoutCompaniesInput
    vehicle?: vehicleUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUpdateManyWithoutCompaniesNestedInput
    users?: userUpdateManyWithoutCompaniesNestedInput
    vehicle?: vehicleUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUncheckedUpdateManyWithoutCompaniesNestedInput
    users?: userUncheckedUpdateManyWithoutCompaniesNestedInput
    vehicle?: vehicleUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type companiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dailySummaryCreateInput = {
    id?: string
    date: Date | string
    modeFuelLevel?: number | null
    modeOilPressure?: number | null
    modeBattVoltage?: number | null
    modeEngineLoad?: number | null
    modeSpeed?: number | null
    modeEngineRPM?: number | null
    modeEngineTemp?: number | null
    totalDistance?: number
    totalFuelUsed?: number
    totalEngineHrs?: number
    IdleTime?: number
    RunningTime?: number
    sampleCount?: number
    updatedAt: Date | string
    vehicle: vehicleCreateNestedOneWithoutDailysummaryInput
  }

  export type dailySummaryUncheckedCreateInput = {
    id?: string
    vehicleId: string
    date: Date | string
    modeFuelLevel?: number | null
    modeOilPressure?: number | null
    modeBattVoltage?: number | null
    modeEngineLoad?: number | null
    modeSpeed?: number | null
    modeEngineRPM?: number | null
    modeEngineTemp?: number | null
    totalDistance?: number
    totalFuelUsed?: number
    totalEngineHrs?: number
    IdleTime?: number
    RunningTime?: number
    sampleCount?: number
    updatedAt: Date | string
  }

  export type dailySummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    modeFuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    modeOilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    modeBattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    modeSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineRPM?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalFuelUsed?: FloatFieldUpdateOperationsInput | number
    totalEngineHrs?: FloatFieldUpdateOperationsInput | number
    IdleTime?: FloatFieldUpdateOperationsInput | number
    RunningTime?: FloatFieldUpdateOperationsInput | number
    sampleCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: vehicleUpdateOneRequiredWithoutDailysummaryNestedInput
  }

  export type dailySummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    modeFuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    modeOilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    modeBattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    modeSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineRPM?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalFuelUsed?: FloatFieldUpdateOperationsInput | number
    totalEngineHrs?: FloatFieldUpdateOperationsInput | number
    IdleTime?: FloatFieldUpdateOperationsInput | number
    RunningTime?: FloatFieldUpdateOperationsInput | number
    sampleCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dailySummaryCreateManyInput = {
    id?: string
    vehicleId: string
    date: Date | string
    modeFuelLevel?: number | null
    modeOilPressure?: number | null
    modeBattVoltage?: number | null
    modeEngineLoad?: number | null
    modeSpeed?: number | null
    modeEngineRPM?: number | null
    modeEngineTemp?: number | null
    totalDistance?: number
    totalFuelUsed?: number
    totalEngineHrs?: number
    IdleTime?: number
    RunningTime?: number
    sampleCount?: number
    updatedAt: Date | string
  }

  export type dailySummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    modeFuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    modeOilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    modeBattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    modeSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineRPM?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalFuelUsed?: FloatFieldUpdateOperationsInput | number
    totalEngineHrs?: FloatFieldUpdateOperationsInput | number
    IdleTime?: FloatFieldUpdateOperationsInput | number
    RunningTime?: FloatFieldUpdateOperationsInput | number
    sampleCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dailySummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    modeFuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    modeOilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    modeBattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    modeSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineRPM?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalFuelUsed?: FloatFieldUpdateOperationsInput | number
    totalEngineHrs?: FloatFieldUpdateOperationsInput | number
    IdleTime?: FloatFieldUpdateOperationsInput | number
    RunningTime?: FloatFieldUpdateOperationsInput | number
    sampleCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type driverCreateInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    alert?: alertCreateNestedManyWithoutDriverInput
    companies?: companiesCreateNestedOneWithoutDriverInput
    vehicle?: vehicleCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    companyId?: number | null
    alert?: alertUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: vehicleUncheckedCreateNestedOneWithoutDriverInput
  }

  export type driverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alert?: alertUpdateManyWithoutDriverNestedInput
    companies?: companiesUpdateOneWithoutDriverNestedInput
    vehicle?: vehicleUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    alert?: alertUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: vehicleUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type driverCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    companyId?: number | null
  }

  export type driverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type driverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type maintenanceCreateInput = {
    id?: string
    serviceDate: Date | string
    nextService: Date | string
    description: string
    cost?: number | null
    vehicle: vehicleCreateNestedOneWithoutMaintenanceInput
  }

  export type maintenanceUncheckedCreateInput = {
    id?: string
    vehicleId: string
    serviceDate: Date | string
    nextService: Date | string
    description: string
    cost?: number | null
  }

  export type maintenanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextService?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicle?: vehicleUpdateOneRequiredWithoutMaintenanceNestedInput
  }

  export type maintenanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextService?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type maintenanceCreateManyInput = {
    id?: string
    vehicleId: string
    serviceDate: Date | string
    nextService: Date | string
    description: string
    cost?: number | null
  }

  export type maintenanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextService?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type maintenanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextService?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type maintenance_dataCreateInput = {
    id?: string
    fuelRate?: number | null
    fuelEff?: number | null
    EngineHours?: number | null
    updatedAt?: Date | string
    vehicle: vehicleCreateNestedOneWithoutMaintenance_dataInput
  }

  export type maintenance_dataUncheckedCreateInput = {
    id?: string
    vehicleId: string
    fuelRate?: number | null
    fuelEff?: number | null
    EngineHours?: number | null
    updatedAt?: Date | string
  }

  export type maintenance_dataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuelRate?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelEff?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: vehicleUpdateOneRequiredWithoutMaintenance_dataNestedInput
  }

  export type maintenance_dataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fuelRate?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelEff?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenance_dataCreateManyInput = {
    id?: string
    vehicleId: string
    fuelRate?: number | null
    fuelEff?: number | null
    EngineHours?: number | null
    updatedAt?: Date | string
  }

  export type maintenance_dataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuelRate?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelEff?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenance_dataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    fuelRate?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelEff?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusCreateInput = {
    id?: string
    lastLat?: number | null
    lastLng?: number | null
    lastSpeed?: number | null
    state?: $Enums.status_state
    fuelLevel?: number | null
    engineHours?: number | null
    lastUpdate?: Date | string
    BattVoltage?: number | null
    EngineLoad?: number | null
    OilPressure?: number | null
    distance?: number | null
    engineRPM?: number | null
    engineTemp?: number | null
    fuelUsed?: number | null
    vehicle: vehicleCreateNestedOneWithoutStatusInput
  }

  export type statusUncheckedCreateInput = {
    id?: string
    lastLat?: number | null
    lastLng?: number | null
    lastSpeed?: number | null
    state?: $Enums.status_state
    fuelLevel?: number | null
    engineHours?: number | null
    lastUpdate?: Date | string
    vehicleId: string
    BattVoltage?: number | null
    EngineLoad?: number | null
    OilPressure?: number | null
    distance?: number | null
    engineRPM?: number | null
    engineTemp?: number | null
    fuelUsed?: number | null
  }

  export type statusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastLat?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLng?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: Enumstatus_stateFieldUpdateOperationsInput | $Enums.status_state
    fuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    engineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    BattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    OilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    engineRPM?: NullableIntFieldUpdateOperationsInput | number | null
    engineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelUsed?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicle?: vehicleUpdateOneRequiredWithoutStatusNestedInput
  }

  export type statusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastLat?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLng?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: Enumstatus_stateFieldUpdateOperationsInput | $Enums.status_state
    fuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    engineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    BattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    OilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    engineRPM?: NullableIntFieldUpdateOperationsInput | number | null
    engineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelUsed?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type statusCreateManyInput = {
    id?: string
    lastLat?: number | null
    lastLng?: number | null
    lastSpeed?: number | null
    state?: $Enums.status_state
    fuelLevel?: number | null
    engineHours?: number | null
    lastUpdate?: Date | string
    vehicleId: string
    BattVoltage?: number | null
    EngineLoad?: number | null
    OilPressure?: number | null
    distance?: number | null
    engineRPM?: number | null
    engineTemp?: number | null
    fuelUsed?: number | null
  }

  export type statusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastLat?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLng?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: Enumstatus_stateFieldUpdateOperationsInput | $Enums.status_state
    fuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    engineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    BattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    OilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    engineRPM?: NullableIntFieldUpdateOperationsInput | number | null
    engineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelUsed?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type statusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastLat?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLng?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: Enumstatus_stateFieldUpdateOperationsInput | $Enums.status_state
    fuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    engineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    BattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    OilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    engineRPM?: NullableIntFieldUpdateOperationsInput | number | null
    engineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelUsed?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tripCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number
    fuelUsed?: number
    startLoc?: string | null
    endLoc?: string | null
    vehicle: vehicleCreateNestedOneWithoutTripInput
  }

  export type tripUncheckedCreateInput = {
    id?: string
    vehicleId: string
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number
    fuelUsed?: number
    startLoc?: string | null
    endLoc?: string | null
  }

  export type tripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fuelUsed?: FloatFieldUpdateOperationsInput | number
    startLoc?: NullableStringFieldUpdateOperationsInput | string | null
    endLoc?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle?: vehicleUpdateOneRequiredWithoutTripNestedInput
  }

  export type tripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fuelUsed?: FloatFieldUpdateOperationsInput | number
    startLoc?: NullableStringFieldUpdateOperationsInput | string | null
    endLoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tripCreateManyInput = {
    id?: string
    vehicleId: string
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number
    fuelUsed?: number
    startLoc?: string | null
    endLoc?: string | null
  }

  export type tripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fuelUsed?: FloatFieldUpdateOperationsInput | number
    startLoc?: NullableStringFieldUpdateOperationsInput | string | null
    endLoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fuelUsed?: FloatFieldUpdateOperationsInput | number
    startLoc?: NullableStringFieldUpdateOperationsInput | string | null
    endLoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.users_role
    created_data?: Date | string
    updatedAt: Date | string
    companies?: companiesCreateNestedOneWithoutUsersInput
    vehicle?: vehicleCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.users_role
    created_data?: Date | string
    updatedAt: Date | string
    companyId?: number | null
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: companiesUpdateOneWithoutUsersNestedInput
    vehicle?: vehicleUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    vehicle?: vehicleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.users_role
    created_data?: Date | string
    updatedAt: Date | string
    companyId?: number | null
  }

  export type userUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type vehicleCreateInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleCreateManyInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
  }

  export type vehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumalert_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.alert_type | Enumalert_typeFieldRefInput<$PrismaModel>
    in?: $Enums.alert_type[]
    notIn?: $Enums.alert_type[]
    not?: NestedEnumalert_typeFilter<$PrismaModel> | $Enums.alert_type
  }

  export type Enumalert_severityFilter<$PrismaModel = never> = {
    equals?: $Enums.alert_severity | Enumalert_severityFieldRefInput<$PrismaModel>
    in?: $Enums.alert_severity[]
    notIn?: $Enums.alert_severity[]
    not?: NestedEnumalert_severityFilter<$PrismaModel> | $Enums.alert_severity
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DriverScalarRelationFilter = {
    is?: driverWhereInput
    isNot?: driverWhereInput
  }

  export type VehicleScalarRelationFilter = {
    is?: vehicleWhereInput
    isNot?: vehicleWhereInput
  }

  export type alertOrderByRelevanceInput = {
    fields: alertOrderByRelevanceFieldEnum | alertOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type alertCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    DriverId?: SortOrder
  }

  export type alertMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    DriverId?: SortOrder
  }

  export type alertMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    message?: SortOrder
    isResolved?: SortOrder
    createdAt?: SortOrder
    DriverId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumalert_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.alert_type | Enumalert_typeFieldRefInput<$PrismaModel>
    in?: $Enums.alert_type[]
    notIn?: $Enums.alert_type[]
    not?: NestedEnumalert_typeWithAggregatesFilter<$PrismaModel> | $Enums.alert_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumalert_typeFilter<$PrismaModel>
    _max?: NestedEnumalert_typeFilter<$PrismaModel>
  }

  export type Enumalert_severityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.alert_severity | Enumalert_severityFieldRefInput<$PrismaModel>
    in?: $Enums.alert_severity[]
    notIn?: $Enums.alert_severity[]
    not?: NestedEnumalert_severityWithAggregatesFilter<$PrismaModel> | $Enums.alert_severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumalert_severityFilter<$PrismaModel>
    _max?: NestedEnumalert_severityFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DriverListRelationFilter = {
    every?: driverWhereInput
    some?: driverWhereInput
    none?: driverWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type VehicleListRelationFilter = {
    every?: vehicleWhereInput
    some?: vehicleWhereInput
    none?: vehicleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type driverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companiesOrderByRelevanceInput = {
    fields: companiesOrderByRelevanceFieldEnum | companiesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type companiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type companiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type dailySummaryOrderByRelevanceInput = {
    fields: dailySummaryOrderByRelevanceFieldEnum | dailySummaryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type dailySummaryVehicleIdDateCompoundUniqueInput = {
    vehicleId: string
    date: Date | string
  }

  export type dailySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    modeFuelLevel?: SortOrder
    modeOilPressure?: SortOrder
    modeBattVoltage?: SortOrder
    modeEngineLoad?: SortOrder
    modeSpeed?: SortOrder
    modeEngineRPM?: SortOrder
    modeEngineTemp?: SortOrder
    totalDistance?: SortOrder
    totalFuelUsed?: SortOrder
    totalEngineHrs?: SortOrder
    IdleTime?: SortOrder
    RunningTime?: SortOrder
    sampleCount?: SortOrder
    updatedAt?: SortOrder
  }

  export type dailySummaryAvgOrderByAggregateInput = {
    modeFuelLevel?: SortOrder
    modeOilPressure?: SortOrder
    modeBattVoltage?: SortOrder
    modeEngineLoad?: SortOrder
    modeSpeed?: SortOrder
    modeEngineRPM?: SortOrder
    modeEngineTemp?: SortOrder
    totalDistance?: SortOrder
    totalFuelUsed?: SortOrder
    totalEngineHrs?: SortOrder
    IdleTime?: SortOrder
    RunningTime?: SortOrder
    sampleCount?: SortOrder
  }

  export type dailySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    modeFuelLevel?: SortOrder
    modeOilPressure?: SortOrder
    modeBattVoltage?: SortOrder
    modeEngineLoad?: SortOrder
    modeSpeed?: SortOrder
    modeEngineRPM?: SortOrder
    modeEngineTemp?: SortOrder
    totalDistance?: SortOrder
    totalFuelUsed?: SortOrder
    totalEngineHrs?: SortOrder
    IdleTime?: SortOrder
    RunningTime?: SortOrder
    sampleCount?: SortOrder
    updatedAt?: SortOrder
  }

  export type dailySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    modeFuelLevel?: SortOrder
    modeOilPressure?: SortOrder
    modeBattVoltage?: SortOrder
    modeEngineLoad?: SortOrder
    modeSpeed?: SortOrder
    modeEngineRPM?: SortOrder
    modeEngineTemp?: SortOrder
    totalDistance?: SortOrder
    totalFuelUsed?: SortOrder
    totalEngineHrs?: SortOrder
    IdleTime?: SortOrder
    RunningTime?: SortOrder
    sampleCount?: SortOrder
    updatedAt?: SortOrder
  }

  export type dailySummarySumOrderByAggregateInput = {
    modeFuelLevel?: SortOrder
    modeOilPressure?: SortOrder
    modeBattVoltage?: SortOrder
    modeEngineLoad?: SortOrder
    modeSpeed?: SortOrder
    modeEngineRPM?: SortOrder
    modeEngineTemp?: SortOrder
    totalDistance?: SortOrder
    totalFuelUsed?: SortOrder
    totalEngineHrs?: SortOrder
    IdleTime?: SortOrder
    RunningTime?: SortOrder
    sampleCount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AlertListRelationFilter = {
    every?: alertWhereInput
    some?: alertWhereInput
    none?: alertWhereInput
  }

  export type CompaniesNullableScalarRelationFilter = {
    is?: companiesWhereInput | null
    isNot?: companiesWhereInput | null
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: vehicleWhereInput | null
    isNot?: vehicleWhereInput | null
  }

  export type alertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type driverOrderByRelevanceInput = {
    fields: driverOrderByRelevanceFieldEnum | driverOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type driverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    licenseNo?: SortOrder
    performance?: SortOrder
    licenceExp?: SortOrder
    companyId?: SortOrder
  }

  export type driverAvgOrderByAggregateInput = {
    performance?: SortOrder
    companyId?: SortOrder
  }

  export type driverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    licenseNo?: SortOrder
    performance?: SortOrder
    licenceExp?: SortOrder
    companyId?: SortOrder
  }

  export type driverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    licenseNo?: SortOrder
    performance?: SortOrder
    licenceExp?: SortOrder
    companyId?: SortOrder
  }

  export type driverSumOrderByAggregateInput = {
    performance?: SortOrder
    companyId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type maintenanceOrderByRelevanceInput = {
    fields: maintenanceOrderByRelevanceFieldEnum | maintenanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type maintenanceCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    serviceDate?: SortOrder
    nextService?: SortOrder
    description?: SortOrder
    cost?: SortOrder
  }

  export type maintenanceAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type maintenanceMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    serviceDate?: SortOrder
    nextService?: SortOrder
    description?: SortOrder
    cost?: SortOrder
  }

  export type maintenanceMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    serviceDate?: SortOrder
    nextService?: SortOrder
    description?: SortOrder
    cost?: SortOrder
  }

  export type maintenanceSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type maintenance_dataOrderByRelevanceInput = {
    fields: maintenance_dataOrderByRelevanceFieldEnum | maintenance_dataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type maintenance_dataCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fuelRate?: SortOrder
    fuelEff?: SortOrder
    EngineHours?: SortOrder
    updatedAt?: SortOrder
  }

  export type maintenance_dataAvgOrderByAggregateInput = {
    fuelRate?: SortOrder
    fuelEff?: SortOrder
    EngineHours?: SortOrder
  }

  export type maintenance_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fuelRate?: SortOrder
    fuelEff?: SortOrder
    EngineHours?: SortOrder
    updatedAt?: SortOrder
  }

  export type maintenance_dataMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    fuelRate?: SortOrder
    fuelEff?: SortOrder
    EngineHours?: SortOrder
    updatedAt?: SortOrder
  }

  export type maintenance_dataSumOrderByAggregateInput = {
    fuelRate?: SortOrder
    fuelEff?: SortOrder
    EngineHours?: SortOrder
  }

  export type Enumstatus_stateFilter<$PrismaModel = never> = {
    equals?: $Enums.status_state | Enumstatus_stateFieldRefInput<$PrismaModel>
    in?: $Enums.status_state[]
    notIn?: $Enums.status_state[]
    not?: NestedEnumstatus_stateFilter<$PrismaModel> | $Enums.status_state
  }

  export type statusOrderByRelevanceInput = {
    fields: statusOrderByRelevanceFieldEnum | statusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type statusCountOrderByAggregateInput = {
    id?: SortOrder
    lastLat?: SortOrder
    lastLng?: SortOrder
    lastSpeed?: SortOrder
    state?: SortOrder
    fuelLevel?: SortOrder
    engineHours?: SortOrder
    lastUpdate?: SortOrder
    vehicleId?: SortOrder
    BattVoltage?: SortOrder
    EngineLoad?: SortOrder
    OilPressure?: SortOrder
    distance?: SortOrder
    engineRPM?: SortOrder
    engineTemp?: SortOrder
    fuelUsed?: SortOrder
  }

  export type statusAvgOrderByAggregateInput = {
    lastLat?: SortOrder
    lastLng?: SortOrder
    lastSpeed?: SortOrder
    fuelLevel?: SortOrder
    engineHours?: SortOrder
    BattVoltage?: SortOrder
    EngineLoad?: SortOrder
    OilPressure?: SortOrder
    distance?: SortOrder
    engineRPM?: SortOrder
    engineTemp?: SortOrder
    fuelUsed?: SortOrder
  }

  export type statusMaxOrderByAggregateInput = {
    id?: SortOrder
    lastLat?: SortOrder
    lastLng?: SortOrder
    lastSpeed?: SortOrder
    state?: SortOrder
    fuelLevel?: SortOrder
    engineHours?: SortOrder
    lastUpdate?: SortOrder
    vehicleId?: SortOrder
    BattVoltage?: SortOrder
    EngineLoad?: SortOrder
    OilPressure?: SortOrder
    distance?: SortOrder
    engineRPM?: SortOrder
    engineTemp?: SortOrder
    fuelUsed?: SortOrder
  }

  export type statusMinOrderByAggregateInput = {
    id?: SortOrder
    lastLat?: SortOrder
    lastLng?: SortOrder
    lastSpeed?: SortOrder
    state?: SortOrder
    fuelLevel?: SortOrder
    engineHours?: SortOrder
    lastUpdate?: SortOrder
    vehicleId?: SortOrder
    BattVoltage?: SortOrder
    EngineLoad?: SortOrder
    OilPressure?: SortOrder
    distance?: SortOrder
    engineRPM?: SortOrder
    engineTemp?: SortOrder
    fuelUsed?: SortOrder
  }

  export type statusSumOrderByAggregateInput = {
    lastLat?: SortOrder
    lastLng?: SortOrder
    lastSpeed?: SortOrder
    fuelLevel?: SortOrder
    engineHours?: SortOrder
    BattVoltage?: SortOrder
    EngineLoad?: SortOrder
    OilPressure?: SortOrder
    distance?: SortOrder
    engineRPM?: SortOrder
    engineTemp?: SortOrder
    fuelUsed?: SortOrder
  }

  export type Enumstatus_stateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_state | Enumstatus_stateFieldRefInput<$PrismaModel>
    in?: $Enums.status_state[]
    notIn?: $Enums.status_state[]
    not?: NestedEnumstatus_stateWithAggregatesFilter<$PrismaModel> | $Enums.status_state
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_stateFilter<$PrismaModel>
    _max?: NestedEnumstatus_stateFilter<$PrismaModel>
  }

  export type tripOrderByRelevanceInput = {
    fields: tripOrderByRelevanceFieldEnum | tripOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tripCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    distance?: SortOrder
    fuelUsed?: SortOrder
    startLoc?: SortOrder
    endLoc?: SortOrder
  }

  export type tripAvgOrderByAggregateInput = {
    distance?: SortOrder
    fuelUsed?: SortOrder
  }

  export type tripMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    distance?: SortOrder
    fuelUsed?: SortOrder
    startLoc?: SortOrder
    endLoc?: SortOrder
  }

  export type tripMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    distance?: SortOrder
    fuelUsed?: SortOrder
    startLoc?: SortOrder
    endLoc?: SortOrder
  }

  export type tripSumOrderByAggregateInput = {
    distance?: SortOrder
    fuelUsed?: SortOrder
  }

  export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_data?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_data?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_data?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type Enumvehicle_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.vehicle_Type | Enumvehicle_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.vehicle_Type[]
    notIn?: $Enums.vehicle_Type[]
    not?: NestedEnumvehicle_TypeFilter<$PrismaModel> | $Enums.vehicle_Type
  }

  export type DailySummaryListRelationFilter = {
    every?: dailySummaryWhereInput
    some?: dailySummaryWhereInput
    none?: dailySummaryWhereInput
  }

  export type MaintenanceListRelationFilter = {
    every?: maintenanceWhereInput
    some?: maintenanceWhereInput
    none?: maintenanceWhereInput
  }

  export type Maintenance_dataListRelationFilter = {
    every?: maintenance_dataWhereInput
    some?: maintenance_dataWhereInput
    none?: maintenance_dataWhereInput
  }

  export type StatusListRelationFilter = {
    every?: statusWhereInput
    some?: statusWhereInput
    none?: statusWhereInput
  }

  export type TripListRelationFilter = {
    every?: tripWhereInput
    some?: tripWhereInput
    none?: tripWhereInput
  }

  export type DriverNullableScalarRelationFilter = {
    is?: driverWhereInput | null
    isNot?: driverWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type dailySummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type maintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type maintenance_dataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type statusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vehicleOrderByRelevanceInput = {
    fields: vehicleOrderByRelevanceFieldEnum | vehicleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vehicleCountOrderByAggregateInput = {
    id?: SortOrder
    Type?: SortOrder
    plateNumber?: SortOrder
    make?: SortOrder
    model?: SortOrder
    driverId?: SortOrder
    ownerId?: SortOrder
    capacity?: SortOrder
    companyId?: SortOrder
    Imei?: SortOrder
  }

  export type vehicleAvgOrderByAggregateInput = {
    ownerId?: SortOrder
    capacity?: SortOrder
    companyId?: SortOrder
  }

  export type vehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    Type?: SortOrder
    plateNumber?: SortOrder
    make?: SortOrder
    model?: SortOrder
    driverId?: SortOrder
    ownerId?: SortOrder
    capacity?: SortOrder
    companyId?: SortOrder
    Imei?: SortOrder
  }

  export type vehicleMinOrderByAggregateInput = {
    id?: SortOrder
    Type?: SortOrder
    plateNumber?: SortOrder
    make?: SortOrder
    model?: SortOrder
    driverId?: SortOrder
    ownerId?: SortOrder
    capacity?: SortOrder
    companyId?: SortOrder
    Imei?: SortOrder
  }

  export type vehicleSumOrderByAggregateInput = {
    ownerId?: SortOrder
    capacity?: SortOrder
    companyId?: SortOrder
  }

  export type Enumvehicle_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vehicle_Type | Enumvehicle_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.vehicle_Type[]
    notIn?: $Enums.vehicle_Type[]
    not?: NestedEnumvehicle_TypeWithAggregatesFilter<$PrismaModel> | $Enums.vehicle_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvehicle_TypeFilter<$PrismaModel>
    _max?: NestedEnumvehicle_TypeFilter<$PrismaModel>
  }

  export type driverCreateNestedOneWithoutAlertInput = {
    create?: XOR<driverCreateWithoutAlertInput, driverUncheckedCreateWithoutAlertInput>
    connectOrCreate?: driverCreateOrConnectWithoutAlertInput
    connect?: driverWhereUniqueInput
  }

  export type vehicleCreateNestedOneWithoutAlertInput = {
    create?: XOR<vehicleCreateWithoutAlertInput, vehicleUncheckedCreateWithoutAlertInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutAlertInput
    connect?: vehicleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumalert_typeFieldUpdateOperationsInput = {
    set?: $Enums.alert_type
  }

  export type Enumalert_severityFieldUpdateOperationsInput = {
    set?: $Enums.alert_severity
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type driverUpdateOneRequiredWithoutAlertNestedInput = {
    create?: XOR<driverCreateWithoutAlertInput, driverUncheckedCreateWithoutAlertInput>
    connectOrCreate?: driverCreateOrConnectWithoutAlertInput
    upsert?: driverUpsertWithoutAlertInput
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutAlertInput, driverUpdateWithoutAlertInput>, driverUncheckedUpdateWithoutAlertInput>
  }

  export type vehicleUpdateOneRequiredWithoutAlertNestedInput = {
    create?: XOR<vehicleCreateWithoutAlertInput, vehicleUncheckedCreateWithoutAlertInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutAlertInput
    upsert?: vehicleUpsertWithoutAlertInput
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutAlertInput, vehicleUpdateWithoutAlertInput>, vehicleUncheckedUpdateWithoutAlertInput>
  }

  export type driverCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<driverCreateWithoutCompaniesInput, driverUncheckedCreateWithoutCompaniesInput> | driverCreateWithoutCompaniesInput[] | driverUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: driverCreateOrConnectWithoutCompaniesInput | driverCreateOrConnectWithoutCompaniesInput[]
    createMany?: driverCreateManyCompaniesInputEnvelope
    connect?: driverWhereUniqueInput | driverWhereUniqueInput[]
  }

  export type userCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput> | userCreateWithoutCompaniesInput[] | userUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: userCreateOrConnectWithoutCompaniesInput | userCreateOrConnectWithoutCompaniesInput[]
    createMany?: userCreateManyCompaniesInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type vehicleCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<vehicleCreateWithoutCompaniesInput, vehicleUncheckedCreateWithoutCompaniesInput> | vehicleCreateWithoutCompaniesInput[] | vehicleUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutCompaniesInput | vehicleCreateOrConnectWithoutCompaniesInput[]
    createMany?: vehicleCreateManyCompaniesInputEnvelope
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
  }

  export type driverUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<driverCreateWithoutCompaniesInput, driverUncheckedCreateWithoutCompaniesInput> | driverCreateWithoutCompaniesInput[] | driverUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: driverCreateOrConnectWithoutCompaniesInput | driverCreateOrConnectWithoutCompaniesInput[]
    createMany?: driverCreateManyCompaniesInputEnvelope
    connect?: driverWhereUniqueInput | driverWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput> | userCreateWithoutCompaniesInput[] | userUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: userCreateOrConnectWithoutCompaniesInput | userCreateOrConnectWithoutCompaniesInput[]
    createMany?: userCreateManyCompaniesInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type vehicleUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<vehicleCreateWithoutCompaniesInput, vehicleUncheckedCreateWithoutCompaniesInput> | vehicleCreateWithoutCompaniesInput[] | vehicleUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutCompaniesInput | vehicleCreateOrConnectWithoutCompaniesInput[]
    createMany?: vehicleCreateManyCompaniesInputEnvelope
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type driverUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<driverCreateWithoutCompaniesInput, driverUncheckedCreateWithoutCompaniesInput> | driverCreateWithoutCompaniesInput[] | driverUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: driverCreateOrConnectWithoutCompaniesInput | driverCreateOrConnectWithoutCompaniesInput[]
    upsert?: driverUpsertWithWhereUniqueWithoutCompaniesInput | driverUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: driverCreateManyCompaniesInputEnvelope
    set?: driverWhereUniqueInput | driverWhereUniqueInput[]
    disconnect?: driverWhereUniqueInput | driverWhereUniqueInput[]
    delete?: driverWhereUniqueInput | driverWhereUniqueInput[]
    connect?: driverWhereUniqueInput | driverWhereUniqueInput[]
    update?: driverUpdateWithWhereUniqueWithoutCompaniesInput | driverUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: driverUpdateManyWithWhereWithoutCompaniesInput | driverUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: driverScalarWhereInput | driverScalarWhereInput[]
  }

  export type userUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput> | userCreateWithoutCompaniesInput[] | userUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: userCreateOrConnectWithoutCompaniesInput | userCreateOrConnectWithoutCompaniesInput[]
    upsert?: userUpsertWithWhereUniqueWithoutCompaniesInput | userUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: userCreateManyCompaniesInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutCompaniesInput | userUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: userUpdateManyWithWhereWithoutCompaniesInput | userUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type vehicleUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<vehicleCreateWithoutCompaniesInput, vehicleUncheckedCreateWithoutCompaniesInput> | vehicleCreateWithoutCompaniesInput[] | vehicleUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutCompaniesInput | vehicleCreateOrConnectWithoutCompaniesInput[]
    upsert?: vehicleUpsertWithWhereUniqueWithoutCompaniesInput | vehicleUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: vehicleCreateManyCompaniesInputEnvelope
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    update?: vehicleUpdateWithWhereUniqueWithoutCompaniesInput | vehicleUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: vehicleUpdateManyWithWhereWithoutCompaniesInput | vehicleUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type driverUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<driverCreateWithoutCompaniesInput, driverUncheckedCreateWithoutCompaniesInput> | driverCreateWithoutCompaniesInput[] | driverUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: driverCreateOrConnectWithoutCompaniesInput | driverCreateOrConnectWithoutCompaniesInput[]
    upsert?: driverUpsertWithWhereUniqueWithoutCompaniesInput | driverUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: driverCreateManyCompaniesInputEnvelope
    set?: driverWhereUniqueInput | driverWhereUniqueInput[]
    disconnect?: driverWhereUniqueInput | driverWhereUniqueInput[]
    delete?: driverWhereUniqueInput | driverWhereUniqueInput[]
    connect?: driverWhereUniqueInput | driverWhereUniqueInput[]
    update?: driverUpdateWithWhereUniqueWithoutCompaniesInput | driverUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: driverUpdateManyWithWhereWithoutCompaniesInput | driverUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: driverScalarWhereInput | driverScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput> | userCreateWithoutCompaniesInput[] | userUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: userCreateOrConnectWithoutCompaniesInput | userCreateOrConnectWithoutCompaniesInput[]
    upsert?: userUpsertWithWhereUniqueWithoutCompaniesInput | userUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: userCreateManyCompaniesInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutCompaniesInput | userUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: userUpdateManyWithWhereWithoutCompaniesInput | userUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type vehicleUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<vehicleCreateWithoutCompaniesInput, vehicleUncheckedCreateWithoutCompaniesInput> | vehicleCreateWithoutCompaniesInput[] | vehicleUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutCompaniesInput | vehicleCreateOrConnectWithoutCompaniesInput[]
    upsert?: vehicleUpsertWithWhereUniqueWithoutCompaniesInput | vehicleUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: vehicleCreateManyCompaniesInputEnvelope
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    update?: vehicleUpdateWithWhereUniqueWithoutCompaniesInput | vehicleUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: vehicleUpdateManyWithWhereWithoutCompaniesInput | vehicleUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
  }

  export type vehicleCreateNestedOneWithoutDailysummaryInput = {
    create?: XOR<vehicleCreateWithoutDailysummaryInput, vehicleUncheckedCreateWithoutDailysummaryInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutDailysummaryInput
    connect?: vehicleWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type vehicleUpdateOneRequiredWithoutDailysummaryNestedInput = {
    create?: XOR<vehicleCreateWithoutDailysummaryInput, vehicleUncheckedCreateWithoutDailysummaryInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutDailysummaryInput
    upsert?: vehicleUpsertWithoutDailysummaryInput
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutDailysummaryInput, vehicleUpdateWithoutDailysummaryInput>, vehicleUncheckedUpdateWithoutDailysummaryInput>
  }

  export type alertCreateNestedManyWithoutDriverInput = {
    create?: XOR<alertCreateWithoutDriverInput, alertUncheckedCreateWithoutDriverInput> | alertCreateWithoutDriverInput[] | alertUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: alertCreateOrConnectWithoutDriverInput | alertCreateOrConnectWithoutDriverInput[]
    createMany?: alertCreateManyDriverInputEnvelope
    connect?: alertWhereUniqueInput | alertWhereUniqueInput[]
  }

  export type companiesCreateNestedOneWithoutDriverInput = {
    create?: XOR<companiesCreateWithoutDriverInput, companiesUncheckedCreateWithoutDriverInput>
    connectOrCreate?: companiesCreateOrConnectWithoutDriverInput
    connect?: companiesWhereUniqueInput
  }

  export type vehicleCreateNestedOneWithoutDriverInput = {
    create?: XOR<vehicleCreateWithoutDriverInput, vehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutDriverInput
    connect?: vehicleWhereUniqueInput
  }

  export type alertUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<alertCreateWithoutDriverInput, alertUncheckedCreateWithoutDriverInput> | alertCreateWithoutDriverInput[] | alertUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: alertCreateOrConnectWithoutDriverInput | alertCreateOrConnectWithoutDriverInput[]
    createMany?: alertCreateManyDriverInputEnvelope
    connect?: alertWhereUniqueInput | alertWhereUniqueInput[]
  }

  export type vehicleUncheckedCreateNestedOneWithoutDriverInput = {
    create?: XOR<vehicleCreateWithoutDriverInput, vehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutDriverInput
    connect?: vehicleWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type alertUpdateManyWithoutDriverNestedInput = {
    create?: XOR<alertCreateWithoutDriverInput, alertUncheckedCreateWithoutDriverInput> | alertCreateWithoutDriverInput[] | alertUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: alertCreateOrConnectWithoutDriverInput | alertCreateOrConnectWithoutDriverInput[]
    upsert?: alertUpsertWithWhereUniqueWithoutDriverInput | alertUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: alertCreateManyDriverInputEnvelope
    set?: alertWhereUniqueInput | alertWhereUniqueInput[]
    disconnect?: alertWhereUniqueInput | alertWhereUniqueInput[]
    delete?: alertWhereUniqueInput | alertWhereUniqueInput[]
    connect?: alertWhereUniqueInput | alertWhereUniqueInput[]
    update?: alertUpdateWithWhereUniqueWithoutDriverInput | alertUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: alertUpdateManyWithWhereWithoutDriverInput | alertUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: alertScalarWhereInput | alertScalarWhereInput[]
  }

  export type companiesUpdateOneWithoutDriverNestedInput = {
    create?: XOR<companiesCreateWithoutDriverInput, companiesUncheckedCreateWithoutDriverInput>
    connectOrCreate?: companiesCreateOrConnectWithoutDriverInput
    upsert?: companiesUpsertWithoutDriverInput
    disconnect?: companiesWhereInput | boolean
    delete?: companiesWhereInput | boolean
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutDriverInput, companiesUpdateWithoutDriverInput>, companiesUncheckedUpdateWithoutDriverInput>
  }

  export type vehicleUpdateOneWithoutDriverNestedInput = {
    create?: XOR<vehicleCreateWithoutDriverInput, vehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutDriverInput
    upsert?: vehicleUpsertWithoutDriverInput
    disconnect?: vehicleWhereInput | boolean
    delete?: vehicleWhereInput | boolean
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutDriverInput, vehicleUpdateWithoutDriverInput>, vehicleUncheckedUpdateWithoutDriverInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type alertUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<alertCreateWithoutDriverInput, alertUncheckedCreateWithoutDriverInput> | alertCreateWithoutDriverInput[] | alertUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: alertCreateOrConnectWithoutDriverInput | alertCreateOrConnectWithoutDriverInput[]
    upsert?: alertUpsertWithWhereUniqueWithoutDriverInput | alertUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: alertCreateManyDriverInputEnvelope
    set?: alertWhereUniqueInput | alertWhereUniqueInput[]
    disconnect?: alertWhereUniqueInput | alertWhereUniqueInput[]
    delete?: alertWhereUniqueInput | alertWhereUniqueInput[]
    connect?: alertWhereUniqueInput | alertWhereUniqueInput[]
    update?: alertUpdateWithWhereUniqueWithoutDriverInput | alertUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: alertUpdateManyWithWhereWithoutDriverInput | alertUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: alertScalarWhereInput | alertScalarWhereInput[]
  }

  export type vehicleUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: XOR<vehicleCreateWithoutDriverInput, vehicleUncheckedCreateWithoutDriverInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutDriverInput
    upsert?: vehicleUpsertWithoutDriverInput
    disconnect?: vehicleWhereInput | boolean
    delete?: vehicleWhereInput | boolean
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutDriverInput, vehicleUpdateWithoutDriverInput>, vehicleUncheckedUpdateWithoutDriverInput>
  }

  export type vehicleCreateNestedOneWithoutMaintenanceInput = {
    create?: XOR<vehicleCreateWithoutMaintenanceInput, vehicleUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutMaintenanceInput
    connect?: vehicleWhereUniqueInput
  }

  export type vehicleUpdateOneRequiredWithoutMaintenanceNestedInput = {
    create?: XOR<vehicleCreateWithoutMaintenanceInput, vehicleUncheckedCreateWithoutMaintenanceInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutMaintenanceInput
    upsert?: vehicleUpsertWithoutMaintenanceInput
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutMaintenanceInput, vehicleUpdateWithoutMaintenanceInput>, vehicleUncheckedUpdateWithoutMaintenanceInput>
  }

  export type vehicleCreateNestedOneWithoutMaintenance_dataInput = {
    create?: XOR<vehicleCreateWithoutMaintenance_dataInput, vehicleUncheckedCreateWithoutMaintenance_dataInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutMaintenance_dataInput
    connect?: vehicleWhereUniqueInput
  }

  export type vehicleUpdateOneRequiredWithoutMaintenance_dataNestedInput = {
    create?: XOR<vehicleCreateWithoutMaintenance_dataInput, vehicleUncheckedCreateWithoutMaintenance_dataInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutMaintenance_dataInput
    upsert?: vehicleUpsertWithoutMaintenance_dataInput
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutMaintenance_dataInput, vehicleUpdateWithoutMaintenance_dataInput>, vehicleUncheckedUpdateWithoutMaintenance_dataInput>
  }

  export type vehicleCreateNestedOneWithoutStatusInput = {
    create?: XOR<vehicleCreateWithoutStatusInput, vehicleUncheckedCreateWithoutStatusInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutStatusInput
    connect?: vehicleWhereUniqueInput
  }

  export type Enumstatus_stateFieldUpdateOperationsInput = {
    set?: $Enums.status_state
  }

  export type vehicleUpdateOneRequiredWithoutStatusNestedInput = {
    create?: XOR<vehicleCreateWithoutStatusInput, vehicleUncheckedCreateWithoutStatusInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutStatusInput
    upsert?: vehicleUpsertWithoutStatusInput
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutStatusInput, vehicleUpdateWithoutStatusInput>, vehicleUncheckedUpdateWithoutStatusInput>
  }

  export type vehicleCreateNestedOneWithoutTripInput = {
    create?: XOR<vehicleCreateWithoutTripInput, vehicleUncheckedCreateWithoutTripInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutTripInput
    connect?: vehicleWhereUniqueInput
  }

  export type vehicleUpdateOneRequiredWithoutTripNestedInput = {
    create?: XOR<vehicleCreateWithoutTripInput, vehicleUncheckedCreateWithoutTripInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutTripInput
    upsert?: vehicleUpsertWithoutTripInput
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutTripInput, vehicleUpdateWithoutTripInput>, vehicleUncheckedUpdateWithoutTripInput>
  }

  export type companiesCreateNestedOneWithoutUsersInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput
    connect?: companiesWhereUniqueInput
  }

  export type vehicleCreateNestedManyWithoutUsersInput = {
    create?: XOR<vehicleCreateWithoutUsersInput, vehicleUncheckedCreateWithoutUsersInput> | vehicleCreateWithoutUsersInput[] | vehicleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutUsersInput | vehicleCreateOrConnectWithoutUsersInput[]
    createMany?: vehicleCreateManyUsersInputEnvelope
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
  }

  export type vehicleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<vehicleCreateWithoutUsersInput, vehicleUncheckedCreateWithoutUsersInput> | vehicleCreateWithoutUsersInput[] | vehicleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutUsersInput | vehicleCreateOrConnectWithoutUsersInput[]
    createMany?: vehicleCreateManyUsersInputEnvelope
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
  }

  export type Enumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role
  }

  export type companiesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput
    upsert?: companiesUpsertWithoutUsersInput
    disconnect?: companiesWhereInput | boolean
    delete?: companiesWhereInput | boolean
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutUsersInput, companiesUpdateWithoutUsersInput>, companiesUncheckedUpdateWithoutUsersInput>
  }

  export type vehicleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<vehicleCreateWithoutUsersInput, vehicleUncheckedCreateWithoutUsersInput> | vehicleCreateWithoutUsersInput[] | vehicleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutUsersInput | vehicleCreateOrConnectWithoutUsersInput[]
    upsert?: vehicleUpsertWithWhereUniqueWithoutUsersInput | vehicleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: vehicleCreateManyUsersInputEnvelope
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    update?: vehicleUpdateWithWhereUniqueWithoutUsersInput | vehicleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: vehicleUpdateManyWithWhereWithoutUsersInput | vehicleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
  }

  export type vehicleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<vehicleCreateWithoutUsersInput, vehicleUncheckedCreateWithoutUsersInput> | vehicleCreateWithoutUsersInput[] | vehicleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutUsersInput | vehicleCreateOrConnectWithoutUsersInput[]
    upsert?: vehicleUpsertWithWhereUniqueWithoutUsersInput | vehicleUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: vehicleCreateManyUsersInputEnvelope
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    update?: vehicleUpdateWithWhereUniqueWithoutUsersInput | vehicleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: vehicleUpdateManyWithWhereWithoutUsersInput | vehicleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
  }

  export type alertCreateNestedManyWithoutVehicleInput = {
    create?: XOR<alertCreateWithoutVehicleInput, alertUncheckedCreateWithoutVehicleInput> | alertCreateWithoutVehicleInput[] | alertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: alertCreateOrConnectWithoutVehicleInput | alertCreateOrConnectWithoutVehicleInput[]
    createMany?: alertCreateManyVehicleInputEnvelope
    connect?: alertWhereUniqueInput | alertWhereUniqueInput[]
  }

  export type dailySummaryCreateNestedManyWithoutVehicleInput = {
    create?: XOR<dailySummaryCreateWithoutVehicleInput, dailySummaryUncheckedCreateWithoutVehicleInput> | dailySummaryCreateWithoutVehicleInput[] | dailySummaryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: dailySummaryCreateOrConnectWithoutVehicleInput | dailySummaryCreateOrConnectWithoutVehicleInput[]
    createMany?: dailySummaryCreateManyVehicleInputEnvelope
    connect?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
  }

  export type maintenanceCreateNestedManyWithoutVehicleInput = {
    create?: XOR<maintenanceCreateWithoutVehicleInput, maintenanceUncheckedCreateWithoutVehicleInput> | maintenanceCreateWithoutVehicleInput[] | maintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: maintenanceCreateOrConnectWithoutVehicleInput | maintenanceCreateOrConnectWithoutVehicleInput[]
    createMany?: maintenanceCreateManyVehicleInputEnvelope
    connect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
  }

  export type maintenance_dataCreateNestedManyWithoutVehicleInput = {
    create?: XOR<maintenance_dataCreateWithoutVehicleInput, maintenance_dataUncheckedCreateWithoutVehicleInput> | maintenance_dataCreateWithoutVehicleInput[] | maintenance_dataUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: maintenance_dataCreateOrConnectWithoutVehicleInput | maintenance_dataCreateOrConnectWithoutVehicleInput[]
    createMany?: maintenance_dataCreateManyVehicleInputEnvelope
    connect?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
  }

  export type statusCreateNestedManyWithoutVehicleInput = {
    create?: XOR<statusCreateWithoutVehicleInput, statusUncheckedCreateWithoutVehicleInput> | statusCreateWithoutVehicleInput[] | statusUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: statusCreateOrConnectWithoutVehicleInput | statusCreateOrConnectWithoutVehicleInput[]
    createMany?: statusCreateManyVehicleInputEnvelope
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
  }

  export type tripCreateNestedManyWithoutVehicleInput = {
    create?: XOR<tripCreateWithoutVehicleInput, tripUncheckedCreateWithoutVehicleInput> | tripCreateWithoutVehicleInput[] | tripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: tripCreateOrConnectWithoutVehicleInput | tripCreateOrConnectWithoutVehicleInput[]
    createMany?: tripCreateManyVehicleInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type companiesCreateNestedOneWithoutVehicleInput = {
    create?: XOR<companiesCreateWithoutVehicleInput, companiesUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: companiesCreateOrConnectWithoutVehicleInput
    connect?: companiesWhereUniqueInput
  }

  export type driverCreateNestedOneWithoutVehicleInput = {
    create?: XOR<driverCreateWithoutVehicleInput, driverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: driverCreateOrConnectWithoutVehicleInput
    connect?: driverWhereUniqueInput
  }

  export type userCreateNestedOneWithoutVehicleInput = {
    create?: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: userCreateOrConnectWithoutVehicleInput
    connect?: userWhereUniqueInput
  }

  export type alertUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<alertCreateWithoutVehicleInput, alertUncheckedCreateWithoutVehicleInput> | alertCreateWithoutVehicleInput[] | alertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: alertCreateOrConnectWithoutVehicleInput | alertCreateOrConnectWithoutVehicleInput[]
    createMany?: alertCreateManyVehicleInputEnvelope
    connect?: alertWhereUniqueInput | alertWhereUniqueInput[]
  }

  export type dailySummaryUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<dailySummaryCreateWithoutVehicleInput, dailySummaryUncheckedCreateWithoutVehicleInput> | dailySummaryCreateWithoutVehicleInput[] | dailySummaryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: dailySummaryCreateOrConnectWithoutVehicleInput | dailySummaryCreateOrConnectWithoutVehicleInput[]
    createMany?: dailySummaryCreateManyVehicleInputEnvelope
    connect?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
  }

  export type maintenanceUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<maintenanceCreateWithoutVehicleInput, maintenanceUncheckedCreateWithoutVehicleInput> | maintenanceCreateWithoutVehicleInput[] | maintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: maintenanceCreateOrConnectWithoutVehicleInput | maintenanceCreateOrConnectWithoutVehicleInput[]
    createMany?: maintenanceCreateManyVehicleInputEnvelope
    connect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
  }

  export type maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<maintenance_dataCreateWithoutVehicleInput, maintenance_dataUncheckedCreateWithoutVehicleInput> | maintenance_dataCreateWithoutVehicleInput[] | maintenance_dataUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: maintenance_dataCreateOrConnectWithoutVehicleInput | maintenance_dataCreateOrConnectWithoutVehicleInput[]
    createMany?: maintenance_dataCreateManyVehicleInputEnvelope
    connect?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
  }

  export type statusUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<statusCreateWithoutVehicleInput, statusUncheckedCreateWithoutVehicleInput> | statusCreateWithoutVehicleInput[] | statusUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: statusCreateOrConnectWithoutVehicleInput | statusCreateOrConnectWithoutVehicleInput[]
    createMany?: statusCreateManyVehicleInputEnvelope
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
  }

  export type tripUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<tripCreateWithoutVehicleInput, tripUncheckedCreateWithoutVehicleInput> | tripCreateWithoutVehicleInput[] | tripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: tripCreateOrConnectWithoutVehicleInput | tripCreateOrConnectWithoutVehicleInput[]
    createMany?: tripCreateManyVehicleInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type Enumvehicle_TypeFieldUpdateOperationsInput = {
    set?: $Enums.vehicle_Type
  }

  export type alertUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<alertCreateWithoutVehicleInput, alertUncheckedCreateWithoutVehicleInput> | alertCreateWithoutVehicleInput[] | alertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: alertCreateOrConnectWithoutVehicleInput | alertCreateOrConnectWithoutVehicleInput[]
    upsert?: alertUpsertWithWhereUniqueWithoutVehicleInput | alertUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: alertCreateManyVehicleInputEnvelope
    set?: alertWhereUniqueInput | alertWhereUniqueInput[]
    disconnect?: alertWhereUniqueInput | alertWhereUniqueInput[]
    delete?: alertWhereUniqueInput | alertWhereUniqueInput[]
    connect?: alertWhereUniqueInput | alertWhereUniqueInput[]
    update?: alertUpdateWithWhereUniqueWithoutVehicleInput | alertUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: alertUpdateManyWithWhereWithoutVehicleInput | alertUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: alertScalarWhereInput | alertScalarWhereInput[]
  }

  export type dailySummaryUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<dailySummaryCreateWithoutVehicleInput, dailySummaryUncheckedCreateWithoutVehicleInput> | dailySummaryCreateWithoutVehicleInput[] | dailySummaryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: dailySummaryCreateOrConnectWithoutVehicleInput | dailySummaryCreateOrConnectWithoutVehicleInput[]
    upsert?: dailySummaryUpsertWithWhereUniqueWithoutVehicleInput | dailySummaryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: dailySummaryCreateManyVehicleInputEnvelope
    set?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
    disconnect?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
    delete?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
    connect?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
    update?: dailySummaryUpdateWithWhereUniqueWithoutVehicleInput | dailySummaryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: dailySummaryUpdateManyWithWhereWithoutVehicleInput | dailySummaryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: dailySummaryScalarWhereInput | dailySummaryScalarWhereInput[]
  }

  export type maintenanceUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<maintenanceCreateWithoutVehicleInput, maintenanceUncheckedCreateWithoutVehicleInput> | maintenanceCreateWithoutVehicleInput[] | maintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: maintenanceCreateOrConnectWithoutVehicleInput | maintenanceCreateOrConnectWithoutVehicleInput[]
    upsert?: maintenanceUpsertWithWhereUniqueWithoutVehicleInput | maintenanceUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: maintenanceCreateManyVehicleInputEnvelope
    set?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
    disconnect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
    delete?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
    connect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
    update?: maintenanceUpdateWithWhereUniqueWithoutVehicleInput | maintenanceUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: maintenanceUpdateManyWithWhereWithoutVehicleInput | maintenanceUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: maintenanceScalarWhereInput | maintenanceScalarWhereInput[]
  }

  export type maintenance_dataUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<maintenance_dataCreateWithoutVehicleInput, maintenance_dataUncheckedCreateWithoutVehicleInput> | maintenance_dataCreateWithoutVehicleInput[] | maintenance_dataUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: maintenance_dataCreateOrConnectWithoutVehicleInput | maintenance_dataCreateOrConnectWithoutVehicleInput[]
    upsert?: maintenance_dataUpsertWithWhereUniqueWithoutVehicleInput | maintenance_dataUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: maintenance_dataCreateManyVehicleInputEnvelope
    set?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
    disconnect?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
    delete?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
    connect?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
    update?: maintenance_dataUpdateWithWhereUniqueWithoutVehicleInput | maintenance_dataUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: maintenance_dataUpdateManyWithWhereWithoutVehicleInput | maintenance_dataUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: maintenance_dataScalarWhereInput | maintenance_dataScalarWhereInput[]
  }

  export type statusUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<statusCreateWithoutVehicleInput, statusUncheckedCreateWithoutVehicleInput> | statusCreateWithoutVehicleInput[] | statusUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: statusCreateOrConnectWithoutVehicleInput | statusCreateOrConnectWithoutVehicleInput[]
    upsert?: statusUpsertWithWhereUniqueWithoutVehicleInput | statusUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: statusCreateManyVehicleInputEnvelope
    set?: statusWhereUniqueInput | statusWhereUniqueInput[]
    disconnect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    delete?: statusWhereUniqueInput | statusWhereUniqueInput[]
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    update?: statusUpdateWithWhereUniqueWithoutVehicleInput | statusUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: statusUpdateManyWithWhereWithoutVehicleInput | statusUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: statusScalarWhereInput | statusScalarWhereInput[]
  }

  export type tripUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<tripCreateWithoutVehicleInput, tripUncheckedCreateWithoutVehicleInput> | tripCreateWithoutVehicleInput[] | tripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: tripCreateOrConnectWithoutVehicleInput | tripCreateOrConnectWithoutVehicleInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutVehicleInput | tripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: tripCreateManyVehicleInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutVehicleInput | tripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: tripUpdateManyWithWhereWithoutVehicleInput | tripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type companiesUpdateOneWithoutVehicleNestedInput = {
    create?: XOR<companiesCreateWithoutVehicleInput, companiesUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: companiesCreateOrConnectWithoutVehicleInput
    upsert?: companiesUpsertWithoutVehicleInput
    disconnect?: companiesWhereInput | boolean
    delete?: companiesWhereInput | boolean
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutVehicleInput, companiesUpdateWithoutVehicleInput>, companiesUncheckedUpdateWithoutVehicleInput>
  }

  export type driverUpdateOneWithoutVehicleNestedInput = {
    create?: XOR<driverCreateWithoutVehicleInput, driverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: driverCreateOrConnectWithoutVehicleInput
    upsert?: driverUpsertWithoutVehicleInput
    disconnect?: driverWhereInput | boolean
    delete?: driverWhereInput | boolean
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutVehicleInput, driverUpdateWithoutVehicleInput>, driverUncheckedUpdateWithoutVehicleInput>
  }

  export type userUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: userCreateOrConnectWithoutVehicleInput
    upsert?: userUpsertWithoutVehicleInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutVehicleInput, userUpdateWithoutVehicleInput>, userUncheckedUpdateWithoutVehicleInput>
  }

  export type alertUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<alertCreateWithoutVehicleInput, alertUncheckedCreateWithoutVehicleInput> | alertCreateWithoutVehicleInput[] | alertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: alertCreateOrConnectWithoutVehicleInput | alertCreateOrConnectWithoutVehicleInput[]
    upsert?: alertUpsertWithWhereUniqueWithoutVehicleInput | alertUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: alertCreateManyVehicleInputEnvelope
    set?: alertWhereUniqueInput | alertWhereUniqueInput[]
    disconnect?: alertWhereUniqueInput | alertWhereUniqueInput[]
    delete?: alertWhereUniqueInput | alertWhereUniqueInput[]
    connect?: alertWhereUniqueInput | alertWhereUniqueInput[]
    update?: alertUpdateWithWhereUniqueWithoutVehicleInput | alertUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: alertUpdateManyWithWhereWithoutVehicleInput | alertUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: alertScalarWhereInput | alertScalarWhereInput[]
  }

  export type dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<dailySummaryCreateWithoutVehicleInput, dailySummaryUncheckedCreateWithoutVehicleInput> | dailySummaryCreateWithoutVehicleInput[] | dailySummaryUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: dailySummaryCreateOrConnectWithoutVehicleInput | dailySummaryCreateOrConnectWithoutVehicleInput[]
    upsert?: dailySummaryUpsertWithWhereUniqueWithoutVehicleInput | dailySummaryUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: dailySummaryCreateManyVehicleInputEnvelope
    set?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
    disconnect?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
    delete?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
    connect?: dailySummaryWhereUniqueInput | dailySummaryWhereUniqueInput[]
    update?: dailySummaryUpdateWithWhereUniqueWithoutVehicleInput | dailySummaryUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: dailySummaryUpdateManyWithWhereWithoutVehicleInput | dailySummaryUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: dailySummaryScalarWhereInput | dailySummaryScalarWhereInput[]
  }

  export type maintenanceUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<maintenanceCreateWithoutVehicleInput, maintenanceUncheckedCreateWithoutVehicleInput> | maintenanceCreateWithoutVehicleInput[] | maintenanceUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: maintenanceCreateOrConnectWithoutVehicleInput | maintenanceCreateOrConnectWithoutVehicleInput[]
    upsert?: maintenanceUpsertWithWhereUniqueWithoutVehicleInput | maintenanceUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: maintenanceCreateManyVehicleInputEnvelope
    set?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
    disconnect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
    delete?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
    connect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[]
    update?: maintenanceUpdateWithWhereUniqueWithoutVehicleInput | maintenanceUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: maintenanceUpdateManyWithWhereWithoutVehicleInput | maintenanceUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: maintenanceScalarWhereInput | maintenanceScalarWhereInput[]
  }

  export type maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<maintenance_dataCreateWithoutVehicleInput, maintenance_dataUncheckedCreateWithoutVehicleInput> | maintenance_dataCreateWithoutVehicleInput[] | maintenance_dataUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: maintenance_dataCreateOrConnectWithoutVehicleInput | maintenance_dataCreateOrConnectWithoutVehicleInput[]
    upsert?: maintenance_dataUpsertWithWhereUniqueWithoutVehicleInput | maintenance_dataUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: maintenance_dataCreateManyVehicleInputEnvelope
    set?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
    disconnect?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
    delete?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
    connect?: maintenance_dataWhereUniqueInput | maintenance_dataWhereUniqueInput[]
    update?: maintenance_dataUpdateWithWhereUniqueWithoutVehicleInput | maintenance_dataUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: maintenance_dataUpdateManyWithWhereWithoutVehicleInput | maintenance_dataUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: maintenance_dataScalarWhereInput | maintenance_dataScalarWhereInput[]
  }

  export type statusUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<statusCreateWithoutVehicleInput, statusUncheckedCreateWithoutVehicleInput> | statusCreateWithoutVehicleInput[] | statusUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: statusCreateOrConnectWithoutVehicleInput | statusCreateOrConnectWithoutVehicleInput[]
    upsert?: statusUpsertWithWhereUniqueWithoutVehicleInput | statusUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: statusCreateManyVehicleInputEnvelope
    set?: statusWhereUniqueInput | statusWhereUniqueInput[]
    disconnect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    delete?: statusWhereUniqueInput | statusWhereUniqueInput[]
    connect?: statusWhereUniqueInput | statusWhereUniqueInput[]
    update?: statusUpdateWithWhereUniqueWithoutVehicleInput | statusUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: statusUpdateManyWithWhereWithoutVehicleInput | statusUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: statusScalarWhereInput | statusScalarWhereInput[]
  }

  export type tripUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<tripCreateWithoutVehicleInput, tripUncheckedCreateWithoutVehicleInput> | tripCreateWithoutVehicleInput[] | tripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: tripCreateOrConnectWithoutVehicleInput | tripCreateOrConnectWithoutVehicleInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutVehicleInput | tripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: tripCreateManyVehicleInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutVehicleInput | tripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: tripUpdateManyWithWhereWithoutVehicleInput | tripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumalert_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.alert_type | Enumalert_typeFieldRefInput<$PrismaModel>
    in?: $Enums.alert_type[]
    notIn?: $Enums.alert_type[]
    not?: NestedEnumalert_typeFilter<$PrismaModel> | $Enums.alert_type
  }

  export type NestedEnumalert_severityFilter<$PrismaModel = never> = {
    equals?: $Enums.alert_severity | Enumalert_severityFieldRefInput<$PrismaModel>
    in?: $Enums.alert_severity[]
    notIn?: $Enums.alert_severity[]
    not?: NestedEnumalert_severityFilter<$PrismaModel> | $Enums.alert_severity
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumalert_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.alert_type | Enumalert_typeFieldRefInput<$PrismaModel>
    in?: $Enums.alert_type[]
    notIn?: $Enums.alert_type[]
    not?: NestedEnumalert_typeWithAggregatesFilter<$PrismaModel> | $Enums.alert_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumalert_typeFilter<$PrismaModel>
    _max?: NestedEnumalert_typeFilter<$PrismaModel>
  }

  export type NestedEnumalert_severityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.alert_severity | Enumalert_severityFieldRefInput<$PrismaModel>
    in?: $Enums.alert_severity[]
    notIn?: $Enums.alert_severity[]
    not?: NestedEnumalert_severityWithAggregatesFilter<$PrismaModel> | $Enums.alert_severity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumalert_severityFilter<$PrismaModel>
    _max?: NestedEnumalert_severityFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatus_stateFilter<$PrismaModel = never> = {
    equals?: $Enums.status_state | Enumstatus_stateFieldRefInput<$PrismaModel>
    in?: $Enums.status_state[]
    notIn?: $Enums.status_state[]
    not?: NestedEnumstatus_stateFilter<$PrismaModel> | $Enums.status_state
  }

  export type NestedEnumstatus_stateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_state | Enumstatus_stateFieldRefInput<$PrismaModel>
    in?: $Enums.status_state[]
    notIn?: $Enums.status_state[]
    not?: NestedEnumstatus_stateWithAggregatesFilter<$PrismaModel> | $Enums.status_state
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_stateFilter<$PrismaModel>
    _max?: NestedEnumstatus_stateFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type NestedEnumvehicle_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.vehicle_Type | Enumvehicle_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.vehicle_Type[]
    notIn?: $Enums.vehicle_Type[]
    not?: NestedEnumvehicle_TypeFilter<$PrismaModel> | $Enums.vehicle_Type
  }

  export type NestedEnumvehicle_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.vehicle_Type | Enumvehicle_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.vehicle_Type[]
    notIn?: $Enums.vehicle_Type[]
    not?: NestedEnumvehicle_TypeWithAggregatesFilter<$PrismaModel> | $Enums.vehicle_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvehicle_TypeFilter<$PrismaModel>
    _max?: NestedEnumvehicle_TypeFilter<$PrismaModel>
  }

  export type driverCreateWithoutAlertInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    companies?: companiesCreateNestedOneWithoutDriverInput
    vehicle?: vehicleCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutAlertInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    companyId?: number | null
    vehicle?: vehicleUncheckedCreateNestedOneWithoutDriverInput
  }

  export type driverCreateOrConnectWithoutAlertInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutAlertInput, driverUncheckedCreateWithoutAlertInput>
  }

  export type vehicleCreateWithoutAlertInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutAlertInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutAlertInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutAlertInput, vehicleUncheckedCreateWithoutAlertInput>
  }

  export type driverUpsertWithoutAlertInput = {
    update: XOR<driverUpdateWithoutAlertInput, driverUncheckedUpdateWithoutAlertInput>
    create: XOR<driverCreateWithoutAlertInput, driverUncheckedCreateWithoutAlertInput>
    where?: driverWhereInput
  }

  export type driverUpdateToOneWithWhereWithoutAlertInput = {
    where?: driverWhereInput
    data: XOR<driverUpdateWithoutAlertInput, driverUncheckedUpdateWithoutAlertInput>
  }

  export type driverUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companies?: companiesUpdateOneWithoutDriverNestedInput
    vehicle?: vehicleUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    vehicle?: vehicleUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type vehicleUpsertWithoutAlertInput = {
    update: XOR<vehicleUpdateWithoutAlertInput, vehicleUncheckedUpdateWithoutAlertInput>
    create: XOR<vehicleCreateWithoutAlertInput, vehicleUncheckedCreateWithoutAlertInput>
    where?: vehicleWhereInput
  }

  export type vehicleUpdateToOneWithWhereWithoutAlertInput = {
    where?: vehicleWhereInput
    data: XOR<vehicleUpdateWithoutAlertInput, vehicleUncheckedUpdateWithoutAlertInput>
  }

  export type vehicleUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type driverCreateWithoutCompaniesInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    alert?: alertCreateNestedManyWithoutDriverInput
    vehicle?: vehicleCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    alert?: alertUncheckedCreateNestedManyWithoutDriverInput
    vehicle?: vehicleUncheckedCreateNestedOneWithoutDriverInput
  }

  export type driverCreateOrConnectWithoutCompaniesInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutCompaniesInput, driverUncheckedCreateWithoutCompaniesInput>
  }

  export type driverCreateManyCompaniesInputEnvelope = {
    data: driverCreateManyCompaniesInput | driverCreateManyCompaniesInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutCompaniesInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.users_role
    created_data?: Date | string
    updatedAt: Date | string
    vehicle?: vehicleCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateWithoutCompaniesInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.users_role
    created_data?: Date | string
    updatedAt: Date | string
    vehicle?: vehicleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userCreateOrConnectWithoutCompaniesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput>
  }

  export type userCreateManyCompaniesInputEnvelope = {
    data: userCreateManyCompaniesInput | userCreateManyCompaniesInput[]
    skipDuplicates?: boolean
  }

  export type vehicleCreateWithoutCompaniesInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutCompaniesInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutCompaniesInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutCompaniesInput, vehicleUncheckedCreateWithoutCompaniesInput>
  }

  export type vehicleCreateManyCompaniesInputEnvelope = {
    data: vehicleCreateManyCompaniesInput | vehicleCreateManyCompaniesInput[]
    skipDuplicates?: boolean
  }

  export type driverUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: driverWhereUniqueInput
    update: XOR<driverUpdateWithoutCompaniesInput, driverUncheckedUpdateWithoutCompaniesInput>
    create: XOR<driverCreateWithoutCompaniesInput, driverUncheckedCreateWithoutCompaniesInput>
  }

  export type driverUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: driverWhereUniqueInput
    data: XOR<driverUpdateWithoutCompaniesInput, driverUncheckedUpdateWithoutCompaniesInput>
  }

  export type driverUpdateManyWithWhereWithoutCompaniesInput = {
    where: driverScalarWhereInput
    data: XOR<driverUpdateManyMutationInput, driverUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type driverScalarWhereInput = {
    AND?: driverScalarWhereInput | driverScalarWhereInput[]
    OR?: driverScalarWhereInput[]
    NOT?: driverScalarWhereInput | driverScalarWhereInput[]
    id?: StringFilter<"driver"> | string
    name?: StringFilter<"driver"> | string
    phone?: StringNullableFilter<"driver"> | string | null
    licenseNo?: StringNullableFilter<"driver"> | string | null
    performance?: FloatFilter<"driver"> | number
    licenceExp?: DateTimeNullableFilter<"driver"> | Date | string | null
    companyId?: IntNullableFilter<"driver"> | number | null
  }

  export type userUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutCompaniesInput, userUncheckedUpdateWithoutCompaniesInput>
    create: XOR<userCreateWithoutCompaniesInput, userUncheckedCreateWithoutCompaniesInput>
  }

  export type userUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutCompaniesInput, userUncheckedUpdateWithoutCompaniesInput>
  }

  export type userUpdateManyWithWhereWithoutCompaniesInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: Enumusers_roleFilter<"user"> | $Enums.users_role
    created_data?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    companyId?: IntNullableFilter<"user"> | number | null
  }

  export type vehicleUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: vehicleWhereUniqueInput
    update: XOR<vehicleUpdateWithoutCompaniesInput, vehicleUncheckedUpdateWithoutCompaniesInput>
    create: XOR<vehicleCreateWithoutCompaniesInput, vehicleUncheckedCreateWithoutCompaniesInput>
  }

  export type vehicleUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: vehicleWhereUniqueInput
    data: XOR<vehicleUpdateWithoutCompaniesInput, vehicleUncheckedUpdateWithoutCompaniesInput>
  }

  export type vehicleUpdateManyWithWhereWithoutCompaniesInput = {
    where: vehicleScalarWhereInput
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type vehicleScalarWhereInput = {
    AND?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
    OR?: vehicleScalarWhereInput[]
    NOT?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
    id?: StringFilter<"vehicle"> | string
    Type?: Enumvehicle_TypeFilter<"vehicle"> | $Enums.vehicle_Type
    plateNumber?: StringNullableFilter<"vehicle"> | string | null
    make?: StringNullableFilter<"vehicle"> | string | null
    model?: StringNullableFilter<"vehicle"> | string | null
    driverId?: StringNullableFilter<"vehicle"> | string | null
    ownerId?: IntFilter<"vehicle"> | number
    capacity?: IntNullableFilter<"vehicle"> | number | null
    companyId?: IntNullableFilter<"vehicle"> | number | null
    Imei?: StringNullableFilter<"vehicle"> | string | null
  }

  export type vehicleCreateWithoutDailysummaryInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutDailysummaryInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutDailysummaryInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutDailysummaryInput, vehicleUncheckedCreateWithoutDailysummaryInput>
  }

  export type vehicleUpsertWithoutDailysummaryInput = {
    update: XOR<vehicleUpdateWithoutDailysummaryInput, vehicleUncheckedUpdateWithoutDailysummaryInput>
    create: XOR<vehicleCreateWithoutDailysummaryInput, vehicleUncheckedCreateWithoutDailysummaryInput>
    where?: vehicleWhereInput
  }

  export type vehicleUpdateToOneWithWhereWithoutDailysummaryInput = {
    where?: vehicleWhereInput
    data: XOR<vehicleUpdateWithoutDailysummaryInput, vehicleUncheckedUpdateWithoutDailysummaryInput>
  }

  export type vehicleUpdateWithoutDailysummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutDailysummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type alertCreateWithoutDriverInput = {
    id?: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    vehicle: vehicleCreateNestedOneWithoutAlertInput
  }

  export type alertUncheckedCreateWithoutDriverInput = {
    id?: string
    vehicleId: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
  }

  export type alertCreateOrConnectWithoutDriverInput = {
    where: alertWhereUniqueInput
    create: XOR<alertCreateWithoutDriverInput, alertUncheckedCreateWithoutDriverInput>
  }

  export type alertCreateManyDriverInputEnvelope = {
    data: alertCreateManyDriverInput | alertCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type companiesCreateWithoutDriverInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    users?: userCreateNestedManyWithoutCompaniesInput
    vehicle?: vehicleCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateWithoutDriverInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    users?: userUncheckedCreateNestedManyWithoutCompaniesInput
    vehicle?: vehicleUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesCreateOrConnectWithoutDriverInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutDriverInput, companiesUncheckedCreateWithoutDriverInput>
  }

  export type vehicleCreateWithoutDriverInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutDriverInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutDriverInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutDriverInput, vehicleUncheckedCreateWithoutDriverInput>
  }

  export type alertUpsertWithWhereUniqueWithoutDriverInput = {
    where: alertWhereUniqueInput
    update: XOR<alertUpdateWithoutDriverInput, alertUncheckedUpdateWithoutDriverInput>
    create: XOR<alertCreateWithoutDriverInput, alertUncheckedCreateWithoutDriverInput>
  }

  export type alertUpdateWithWhereUniqueWithoutDriverInput = {
    where: alertWhereUniqueInput
    data: XOR<alertUpdateWithoutDriverInput, alertUncheckedUpdateWithoutDriverInput>
  }

  export type alertUpdateManyWithWhereWithoutDriverInput = {
    where: alertScalarWhereInput
    data: XOR<alertUpdateManyMutationInput, alertUncheckedUpdateManyWithoutDriverInput>
  }

  export type alertScalarWhereInput = {
    AND?: alertScalarWhereInput | alertScalarWhereInput[]
    OR?: alertScalarWhereInput[]
    NOT?: alertScalarWhereInput | alertScalarWhereInput[]
    id?: StringFilter<"alert"> | string
    vehicleId?: StringFilter<"alert"> | string
    type?: Enumalert_typeFilter<"alert"> | $Enums.alert_type
    severity?: Enumalert_severityFilter<"alert"> | $Enums.alert_severity
    message?: StringFilter<"alert"> | string
    isResolved?: BoolFilter<"alert"> | boolean
    createdAt?: DateTimeFilter<"alert"> | Date | string
    DriverId?: StringFilter<"alert"> | string
  }

  export type companiesUpsertWithoutDriverInput = {
    update: XOR<companiesUpdateWithoutDriverInput, companiesUncheckedUpdateWithoutDriverInput>
    create: XOR<companiesCreateWithoutDriverInput, companiesUncheckedCreateWithoutDriverInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutDriverInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutDriverInput, companiesUncheckedUpdateWithoutDriverInput>
  }

  export type companiesUpdateWithoutDriverInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateManyWithoutCompaniesNestedInput
    vehicle?: vehicleUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUncheckedUpdateManyWithoutCompaniesNestedInput
    vehicle?: vehicleUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type vehicleUpsertWithoutDriverInput = {
    update: XOR<vehicleUpdateWithoutDriverInput, vehicleUncheckedUpdateWithoutDriverInput>
    create: XOR<vehicleCreateWithoutDriverInput, vehicleUncheckedCreateWithoutDriverInput>
    where?: vehicleWhereInput
  }

  export type vehicleUpdateToOneWithWhereWithoutDriverInput = {
    where?: vehicleWhereInput
    data: XOR<vehicleUpdateWithoutDriverInput, vehicleUncheckedUpdateWithoutDriverInput>
  }

  export type vehicleUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleCreateWithoutMaintenanceInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutMaintenanceInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutMaintenanceInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutMaintenanceInput, vehicleUncheckedCreateWithoutMaintenanceInput>
  }

  export type vehicleUpsertWithoutMaintenanceInput = {
    update: XOR<vehicleUpdateWithoutMaintenanceInput, vehicleUncheckedUpdateWithoutMaintenanceInput>
    create: XOR<vehicleCreateWithoutMaintenanceInput, vehicleUncheckedCreateWithoutMaintenanceInput>
    where?: vehicleWhereInput
  }

  export type vehicleUpdateToOneWithWhereWithoutMaintenanceInput = {
    where?: vehicleWhereInput
    data: XOR<vehicleUpdateWithoutMaintenanceInput, vehicleUncheckedUpdateWithoutMaintenanceInput>
  }

  export type vehicleUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleCreateWithoutMaintenance_dataInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutMaintenance_dataInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutMaintenance_dataInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutMaintenance_dataInput, vehicleUncheckedCreateWithoutMaintenance_dataInput>
  }

  export type vehicleUpsertWithoutMaintenance_dataInput = {
    update: XOR<vehicleUpdateWithoutMaintenance_dataInput, vehicleUncheckedUpdateWithoutMaintenance_dataInput>
    create: XOR<vehicleCreateWithoutMaintenance_dataInput, vehicleUncheckedCreateWithoutMaintenance_dataInput>
    where?: vehicleWhereInput
  }

  export type vehicleUpdateToOneWithWhereWithoutMaintenance_dataInput = {
    where?: vehicleWhereInput
    data: XOR<vehicleUpdateWithoutMaintenance_dataInput, vehicleUncheckedUpdateWithoutMaintenance_dataInput>
  }

  export type vehicleUpdateWithoutMaintenance_dataInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutMaintenance_dataInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleCreateWithoutStatusInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutStatusInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutStatusInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutStatusInput, vehicleUncheckedCreateWithoutStatusInput>
  }

  export type vehicleUpsertWithoutStatusInput = {
    update: XOR<vehicleUpdateWithoutStatusInput, vehicleUncheckedUpdateWithoutStatusInput>
    create: XOR<vehicleCreateWithoutStatusInput, vehicleUncheckedCreateWithoutStatusInput>
    where?: vehicleWhereInput
  }

  export type vehicleUpdateToOneWithWhereWithoutStatusInput = {
    where?: vehicleWhereInput
    data: XOR<vehicleUpdateWithoutStatusInput, vehicleUncheckedUpdateWithoutStatusInput>
  }

  export type vehicleUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleCreateWithoutTripInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
    users: userCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutTripInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutTripInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutTripInput, vehicleUncheckedCreateWithoutTripInput>
  }

  export type vehicleUpsertWithoutTripInput = {
    update: XOR<vehicleUpdateWithoutTripInput, vehicleUncheckedUpdateWithoutTripInput>
    create: XOR<vehicleCreateWithoutTripInput, vehicleUncheckedCreateWithoutTripInput>
    where?: vehicleWhereInput
  }

  export type vehicleUpdateToOneWithWhereWithoutTripInput = {
    where?: vehicleWhereInput
    data: XOR<vehicleUpdateWithoutTripInput, vehicleUncheckedUpdateWithoutTripInput>
  }

  export type vehicleUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type companiesCreateWithoutUsersInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    driver?: driverCreateNestedManyWithoutCompaniesInput
    vehicle?: vehicleCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    driver?: driverUncheckedCreateNestedManyWithoutCompaniesInput
    vehicle?: vehicleUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesCreateOrConnectWithoutUsersInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
  }

  export type vehicleCreateWithoutUsersInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    capacity?: number | null
    Imei?: string | null
    alert?: alertCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataCreateNestedManyWithoutVehicleInput
    status?: statusCreateNestedManyWithoutVehicleInput
    trip?: tripCreateNestedManyWithoutVehicleInput
    companies?: companiesCreateNestedOneWithoutVehicleInput
    driver?: driverCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutUsersInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
    alert?: alertUncheckedCreateNestedManyWithoutVehicleInput
    dailysummary?: dailySummaryUncheckedCreateNestedManyWithoutVehicleInput
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutVehicleInput
    maintenance_data?: maintenance_dataUncheckedCreateNestedManyWithoutVehicleInput
    status?: statusUncheckedCreateNestedManyWithoutVehicleInput
    trip?: tripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutUsersInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutUsersInput, vehicleUncheckedCreateWithoutUsersInput>
  }

  export type vehicleCreateManyUsersInputEnvelope = {
    data: vehicleCreateManyUsersInput | vehicleCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutUsersInput = {
    update: XOR<companiesUpdateWithoutUsersInput, companiesUncheckedUpdateWithoutUsersInput>
    create: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutUsersInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutUsersInput, companiesUncheckedUpdateWithoutUsersInput>
  }

  export type companiesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUpdateManyWithoutCompaniesNestedInput
    vehicle?: vehicleUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUncheckedUpdateManyWithoutCompaniesNestedInput
    vehicle?: vehicleUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type vehicleUpsertWithWhereUniqueWithoutUsersInput = {
    where: vehicleWhereUniqueInput
    update: XOR<vehicleUpdateWithoutUsersInput, vehicleUncheckedUpdateWithoutUsersInput>
    create: XOR<vehicleCreateWithoutUsersInput, vehicleUncheckedCreateWithoutUsersInput>
  }

  export type vehicleUpdateWithWhereUniqueWithoutUsersInput = {
    where: vehicleWhereUniqueInput
    data: XOR<vehicleUpdateWithoutUsersInput, vehicleUncheckedUpdateWithoutUsersInput>
  }

  export type vehicleUpdateManyWithWhereWithoutUsersInput = {
    where: vehicleScalarWhereInput
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyWithoutUsersInput>
  }

  export type alertCreateWithoutVehicleInput = {
    id?: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    driver: driverCreateNestedOneWithoutAlertInput
  }

  export type alertUncheckedCreateWithoutVehicleInput = {
    id?: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    DriverId: string
  }

  export type alertCreateOrConnectWithoutVehicleInput = {
    where: alertWhereUniqueInput
    create: XOR<alertCreateWithoutVehicleInput, alertUncheckedCreateWithoutVehicleInput>
  }

  export type alertCreateManyVehicleInputEnvelope = {
    data: alertCreateManyVehicleInput | alertCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type dailySummaryCreateWithoutVehicleInput = {
    id?: string
    date: Date | string
    modeFuelLevel?: number | null
    modeOilPressure?: number | null
    modeBattVoltage?: number | null
    modeEngineLoad?: number | null
    modeSpeed?: number | null
    modeEngineRPM?: number | null
    modeEngineTemp?: number | null
    totalDistance?: number
    totalFuelUsed?: number
    totalEngineHrs?: number
    IdleTime?: number
    RunningTime?: number
    sampleCount?: number
    updatedAt: Date | string
  }

  export type dailySummaryUncheckedCreateWithoutVehicleInput = {
    id?: string
    date: Date | string
    modeFuelLevel?: number | null
    modeOilPressure?: number | null
    modeBattVoltage?: number | null
    modeEngineLoad?: number | null
    modeSpeed?: number | null
    modeEngineRPM?: number | null
    modeEngineTemp?: number | null
    totalDistance?: number
    totalFuelUsed?: number
    totalEngineHrs?: number
    IdleTime?: number
    RunningTime?: number
    sampleCount?: number
    updatedAt: Date | string
  }

  export type dailySummaryCreateOrConnectWithoutVehicleInput = {
    where: dailySummaryWhereUniqueInput
    create: XOR<dailySummaryCreateWithoutVehicleInput, dailySummaryUncheckedCreateWithoutVehicleInput>
  }

  export type dailySummaryCreateManyVehicleInputEnvelope = {
    data: dailySummaryCreateManyVehicleInput | dailySummaryCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type maintenanceCreateWithoutVehicleInput = {
    id?: string
    serviceDate: Date | string
    nextService: Date | string
    description: string
    cost?: number | null
  }

  export type maintenanceUncheckedCreateWithoutVehicleInput = {
    id?: string
    serviceDate: Date | string
    nextService: Date | string
    description: string
    cost?: number | null
  }

  export type maintenanceCreateOrConnectWithoutVehicleInput = {
    where: maintenanceWhereUniqueInput
    create: XOR<maintenanceCreateWithoutVehicleInput, maintenanceUncheckedCreateWithoutVehicleInput>
  }

  export type maintenanceCreateManyVehicleInputEnvelope = {
    data: maintenanceCreateManyVehicleInput | maintenanceCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type maintenance_dataCreateWithoutVehicleInput = {
    id?: string
    fuelRate?: number | null
    fuelEff?: number | null
    EngineHours?: number | null
    updatedAt?: Date | string
  }

  export type maintenance_dataUncheckedCreateWithoutVehicleInput = {
    id?: string
    fuelRate?: number | null
    fuelEff?: number | null
    EngineHours?: number | null
    updatedAt?: Date | string
  }

  export type maintenance_dataCreateOrConnectWithoutVehicleInput = {
    where: maintenance_dataWhereUniqueInput
    create: XOR<maintenance_dataCreateWithoutVehicleInput, maintenance_dataUncheckedCreateWithoutVehicleInput>
  }

  export type maintenance_dataCreateManyVehicleInputEnvelope = {
    data: maintenance_dataCreateManyVehicleInput | maintenance_dataCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type statusCreateWithoutVehicleInput = {
    id?: string
    lastLat?: number | null
    lastLng?: number | null
    lastSpeed?: number | null
    state?: $Enums.status_state
    fuelLevel?: number | null
    engineHours?: number | null
    lastUpdate?: Date | string
    BattVoltage?: number | null
    EngineLoad?: number | null
    OilPressure?: number | null
    distance?: number | null
    engineRPM?: number | null
    engineTemp?: number | null
    fuelUsed?: number | null
  }

  export type statusUncheckedCreateWithoutVehicleInput = {
    id?: string
    lastLat?: number | null
    lastLng?: number | null
    lastSpeed?: number | null
    state?: $Enums.status_state
    fuelLevel?: number | null
    engineHours?: number | null
    lastUpdate?: Date | string
    BattVoltage?: number | null
    EngineLoad?: number | null
    OilPressure?: number | null
    distance?: number | null
    engineRPM?: number | null
    engineTemp?: number | null
    fuelUsed?: number | null
  }

  export type statusCreateOrConnectWithoutVehicleInput = {
    where: statusWhereUniqueInput
    create: XOR<statusCreateWithoutVehicleInput, statusUncheckedCreateWithoutVehicleInput>
  }

  export type statusCreateManyVehicleInputEnvelope = {
    data: statusCreateManyVehicleInput | statusCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type tripCreateWithoutVehicleInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number
    fuelUsed?: number
    startLoc?: string | null
    endLoc?: string | null
  }

  export type tripUncheckedCreateWithoutVehicleInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number
    fuelUsed?: number
    startLoc?: string | null
    endLoc?: string | null
  }

  export type tripCreateOrConnectWithoutVehicleInput = {
    where: tripWhereUniqueInput
    create: XOR<tripCreateWithoutVehicleInput, tripUncheckedCreateWithoutVehicleInput>
  }

  export type tripCreateManyVehicleInputEnvelope = {
    data: tripCreateManyVehicleInput | tripCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type companiesCreateWithoutVehicleInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    driver?: driverCreateNestedManyWithoutCompaniesInput
    users?: userCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateWithoutVehicleInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    driver?: driverUncheckedCreateNestedManyWithoutCompaniesInput
    users?: userUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesCreateOrConnectWithoutVehicleInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutVehicleInput, companiesUncheckedCreateWithoutVehicleInput>
  }

  export type driverCreateWithoutVehicleInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    alert?: alertCreateNestedManyWithoutDriverInput
    companies?: companiesCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
    companyId?: number | null
    alert?: alertUncheckedCreateNestedManyWithoutDriverInput
  }

  export type driverCreateOrConnectWithoutVehicleInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutVehicleInput, driverUncheckedCreateWithoutVehicleInput>
  }

  export type userCreateWithoutVehicleInput = {
    name?: string | null
    email: string
    password: string
    role?: $Enums.users_role
    created_data?: Date | string
    updatedAt: Date | string
    companies?: companiesCreateNestedOneWithoutUsersInput
  }

  export type userUncheckedCreateWithoutVehicleInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.users_role
    created_data?: Date | string
    updatedAt: Date | string
    companyId?: number | null
  }

  export type userCreateOrConnectWithoutVehicleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>
  }

  export type alertUpsertWithWhereUniqueWithoutVehicleInput = {
    where: alertWhereUniqueInput
    update: XOR<alertUpdateWithoutVehicleInput, alertUncheckedUpdateWithoutVehicleInput>
    create: XOR<alertCreateWithoutVehicleInput, alertUncheckedCreateWithoutVehicleInput>
  }

  export type alertUpdateWithWhereUniqueWithoutVehicleInput = {
    where: alertWhereUniqueInput
    data: XOR<alertUpdateWithoutVehicleInput, alertUncheckedUpdateWithoutVehicleInput>
  }

  export type alertUpdateManyWithWhereWithoutVehicleInput = {
    where: alertScalarWhereInput
    data: XOR<alertUpdateManyMutationInput, alertUncheckedUpdateManyWithoutVehicleInput>
  }

  export type dailySummaryUpsertWithWhereUniqueWithoutVehicleInput = {
    where: dailySummaryWhereUniqueInput
    update: XOR<dailySummaryUpdateWithoutVehicleInput, dailySummaryUncheckedUpdateWithoutVehicleInput>
    create: XOR<dailySummaryCreateWithoutVehicleInput, dailySummaryUncheckedCreateWithoutVehicleInput>
  }

  export type dailySummaryUpdateWithWhereUniqueWithoutVehicleInput = {
    where: dailySummaryWhereUniqueInput
    data: XOR<dailySummaryUpdateWithoutVehicleInput, dailySummaryUncheckedUpdateWithoutVehicleInput>
  }

  export type dailySummaryUpdateManyWithWhereWithoutVehicleInput = {
    where: dailySummaryScalarWhereInput
    data: XOR<dailySummaryUpdateManyMutationInput, dailySummaryUncheckedUpdateManyWithoutVehicleInput>
  }

  export type dailySummaryScalarWhereInput = {
    AND?: dailySummaryScalarWhereInput | dailySummaryScalarWhereInput[]
    OR?: dailySummaryScalarWhereInput[]
    NOT?: dailySummaryScalarWhereInput | dailySummaryScalarWhereInput[]
    id?: StringFilter<"dailySummary"> | string
    vehicleId?: StringFilter<"dailySummary"> | string
    date?: DateTimeFilter<"dailySummary"> | Date | string
    modeFuelLevel?: FloatNullableFilter<"dailySummary"> | number | null
    modeOilPressure?: FloatNullableFilter<"dailySummary"> | number | null
    modeBattVoltage?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineLoad?: FloatNullableFilter<"dailySummary"> | number | null
    modeSpeed?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineRPM?: FloatNullableFilter<"dailySummary"> | number | null
    modeEngineTemp?: FloatNullableFilter<"dailySummary"> | number | null
    totalDistance?: FloatFilter<"dailySummary"> | number
    totalFuelUsed?: FloatFilter<"dailySummary"> | number
    totalEngineHrs?: FloatFilter<"dailySummary"> | number
    IdleTime?: FloatFilter<"dailySummary"> | number
    RunningTime?: FloatFilter<"dailySummary"> | number
    sampleCount?: IntFilter<"dailySummary"> | number
    updatedAt?: DateTimeFilter<"dailySummary"> | Date | string
  }

  export type maintenanceUpsertWithWhereUniqueWithoutVehicleInput = {
    where: maintenanceWhereUniqueInput
    update: XOR<maintenanceUpdateWithoutVehicleInput, maintenanceUncheckedUpdateWithoutVehicleInput>
    create: XOR<maintenanceCreateWithoutVehicleInput, maintenanceUncheckedCreateWithoutVehicleInput>
  }

  export type maintenanceUpdateWithWhereUniqueWithoutVehicleInput = {
    where: maintenanceWhereUniqueInput
    data: XOR<maintenanceUpdateWithoutVehicleInput, maintenanceUncheckedUpdateWithoutVehicleInput>
  }

  export type maintenanceUpdateManyWithWhereWithoutVehicleInput = {
    where: maintenanceScalarWhereInput
    data: XOR<maintenanceUpdateManyMutationInput, maintenanceUncheckedUpdateManyWithoutVehicleInput>
  }

  export type maintenanceScalarWhereInput = {
    AND?: maintenanceScalarWhereInput | maintenanceScalarWhereInput[]
    OR?: maintenanceScalarWhereInput[]
    NOT?: maintenanceScalarWhereInput | maintenanceScalarWhereInput[]
    id?: StringFilter<"maintenance"> | string
    vehicleId?: StringFilter<"maintenance"> | string
    serviceDate?: DateTimeFilter<"maintenance"> | Date | string
    nextService?: DateTimeFilter<"maintenance"> | Date | string
    description?: StringFilter<"maintenance"> | string
    cost?: FloatNullableFilter<"maintenance"> | number | null
  }

  export type maintenance_dataUpsertWithWhereUniqueWithoutVehicleInput = {
    where: maintenance_dataWhereUniqueInput
    update: XOR<maintenance_dataUpdateWithoutVehicleInput, maintenance_dataUncheckedUpdateWithoutVehicleInput>
    create: XOR<maintenance_dataCreateWithoutVehicleInput, maintenance_dataUncheckedCreateWithoutVehicleInput>
  }

  export type maintenance_dataUpdateWithWhereUniqueWithoutVehicleInput = {
    where: maintenance_dataWhereUniqueInput
    data: XOR<maintenance_dataUpdateWithoutVehicleInput, maintenance_dataUncheckedUpdateWithoutVehicleInput>
  }

  export type maintenance_dataUpdateManyWithWhereWithoutVehicleInput = {
    where: maintenance_dataScalarWhereInput
    data: XOR<maintenance_dataUpdateManyMutationInput, maintenance_dataUncheckedUpdateManyWithoutVehicleInput>
  }

  export type maintenance_dataScalarWhereInput = {
    AND?: maintenance_dataScalarWhereInput | maintenance_dataScalarWhereInput[]
    OR?: maintenance_dataScalarWhereInput[]
    NOT?: maintenance_dataScalarWhereInput | maintenance_dataScalarWhereInput[]
    id?: StringFilter<"maintenance_data"> | string
    vehicleId?: StringFilter<"maintenance_data"> | string
    fuelRate?: FloatNullableFilter<"maintenance_data"> | number | null
    fuelEff?: FloatNullableFilter<"maintenance_data"> | number | null
    EngineHours?: FloatNullableFilter<"maintenance_data"> | number | null
    updatedAt?: DateTimeFilter<"maintenance_data"> | Date | string
  }

  export type statusUpsertWithWhereUniqueWithoutVehicleInput = {
    where: statusWhereUniqueInput
    update: XOR<statusUpdateWithoutVehicleInput, statusUncheckedUpdateWithoutVehicleInput>
    create: XOR<statusCreateWithoutVehicleInput, statusUncheckedCreateWithoutVehicleInput>
  }

  export type statusUpdateWithWhereUniqueWithoutVehicleInput = {
    where: statusWhereUniqueInput
    data: XOR<statusUpdateWithoutVehicleInput, statusUncheckedUpdateWithoutVehicleInput>
  }

  export type statusUpdateManyWithWhereWithoutVehicleInput = {
    where: statusScalarWhereInput
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyWithoutVehicleInput>
  }

  export type statusScalarWhereInput = {
    AND?: statusScalarWhereInput | statusScalarWhereInput[]
    OR?: statusScalarWhereInput[]
    NOT?: statusScalarWhereInput | statusScalarWhereInput[]
    id?: StringFilter<"status"> | string
    lastLat?: FloatNullableFilter<"status"> | number | null
    lastLng?: FloatNullableFilter<"status"> | number | null
    lastSpeed?: FloatNullableFilter<"status"> | number | null
    state?: Enumstatus_stateFilter<"status"> | $Enums.status_state
    fuelLevel?: FloatNullableFilter<"status"> | number | null
    engineHours?: FloatNullableFilter<"status"> | number | null
    lastUpdate?: DateTimeFilter<"status"> | Date | string
    vehicleId?: StringFilter<"status"> | string
    BattVoltage?: FloatNullableFilter<"status"> | number | null
    EngineLoad?: FloatNullableFilter<"status"> | number | null
    OilPressure?: FloatNullableFilter<"status"> | number | null
    distance?: FloatNullableFilter<"status"> | number | null
    engineRPM?: IntNullableFilter<"status"> | number | null
    engineTemp?: FloatNullableFilter<"status"> | number | null
    fuelUsed?: FloatNullableFilter<"status"> | number | null
  }

  export type tripUpsertWithWhereUniqueWithoutVehicleInput = {
    where: tripWhereUniqueInput
    update: XOR<tripUpdateWithoutVehicleInput, tripUncheckedUpdateWithoutVehicleInput>
    create: XOR<tripCreateWithoutVehicleInput, tripUncheckedCreateWithoutVehicleInput>
  }

  export type tripUpdateWithWhereUniqueWithoutVehicleInput = {
    where: tripWhereUniqueInput
    data: XOR<tripUpdateWithoutVehicleInput, tripUncheckedUpdateWithoutVehicleInput>
  }

  export type tripUpdateManyWithWhereWithoutVehicleInput = {
    where: tripScalarWhereInput
    data: XOR<tripUpdateManyMutationInput, tripUncheckedUpdateManyWithoutVehicleInput>
  }

  export type tripScalarWhereInput = {
    AND?: tripScalarWhereInput | tripScalarWhereInput[]
    OR?: tripScalarWhereInput[]
    NOT?: tripScalarWhereInput | tripScalarWhereInput[]
    id?: StringFilter<"trip"> | string
    vehicleId?: StringFilter<"trip"> | string
    startTime?: DateTimeFilter<"trip"> | Date | string
    endTime?: DateTimeNullableFilter<"trip"> | Date | string | null
    distance?: FloatFilter<"trip"> | number
    fuelUsed?: FloatFilter<"trip"> | number
    startLoc?: StringNullableFilter<"trip"> | string | null
    endLoc?: StringNullableFilter<"trip"> | string | null
  }

  export type companiesUpsertWithoutVehicleInput = {
    update: XOR<companiesUpdateWithoutVehicleInput, companiesUncheckedUpdateWithoutVehicleInput>
    create: XOR<companiesCreateWithoutVehicleInput, companiesUncheckedCreateWithoutVehicleInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutVehicleInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutVehicleInput, companiesUncheckedUpdateWithoutVehicleInput>
  }

  export type companiesUpdateWithoutVehicleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUpdateManyWithoutCompaniesNestedInput
    users?: userUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUncheckedUpdateManyWithoutCompaniesNestedInput
    users?: userUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type driverUpsertWithoutVehicleInput = {
    update: XOR<driverUpdateWithoutVehicleInput, driverUncheckedUpdateWithoutVehicleInput>
    create: XOR<driverCreateWithoutVehicleInput, driverUncheckedCreateWithoutVehicleInput>
    where?: driverWhereInput
  }

  export type driverUpdateToOneWithWhereWithoutVehicleInput = {
    where?: driverWhereInput
    data: XOR<driverUpdateWithoutVehicleInput, driverUncheckedUpdateWithoutVehicleInput>
  }

  export type driverUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alert?: alertUpdateManyWithoutDriverNestedInput
    companies?: companiesUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    alert?: alertUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type userUpsertWithoutVehicleInput = {
    update: XOR<userUpdateWithoutVehicleInput, userUncheckedUpdateWithoutVehicleInput>
    create: XOR<userCreateWithoutVehicleInput, userUncheckedCreateWithoutVehicleInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutVehicleInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutVehicleInput, userUncheckedUpdateWithoutVehicleInput>
  }

  export type userUpdateWithoutVehicleInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: companiesUpdateOneWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type driverCreateManyCompaniesInput = {
    id?: string
    name: string
    phone?: string | null
    licenseNo?: string | null
    performance?: number
    licenceExp?: Date | string | null
  }

  export type userCreateManyCompaniesInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    role?: $Enums.users_role
    created_data?: Date | string
    updatedAt: Date | string
  }

  export type vehicleCreateManyCompaniesInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    ownerId: number
    capacity?: number | null
    Imei?: string | null
  }

  export type driverUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alert?: alertUpdateManyWithoutDriverNestedInput
    vehicle?: vehicleUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alert?: alertUncheckedUpdateManyWithoutDriverNestedInput
    vehicle?: vehicleUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateManyWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNo?: NullableStringFieldUpdateOperationsInput | string | null
    performance?: FloatFieldUpdateOperationsInput | number
    licenceExp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUpdateWithoutCompaniesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: vehicleUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: vehicleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateManyWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    created_data?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehicleUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
    users?: userUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateManyWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type alertCreateManyDriverInput = {
    id?: string
    vehicleId: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
  }

  export type alertUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: vehicleUpdateOneRequiredWithoutAlertNestedInput
  }

  export type alertUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type alertUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehicleCreateManyUsersInput = {
    id?: string
    Type?: $Enums.vehicle_Type
    plateNumber?: string | null
    make?: string | null
    model?: string | null
    driverId?: string | null
    capacity?: number | null
    companyId?: number | null
    Imei?: string | null
  }

  export type vehicleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUpdateManyWithoutVehicleNestedInput
    status?: statusUpdateManyWithoutVehicleNestedInput
    trip?: tripUpdateManyWithoutVehicleNestedInput
    companies?: companiesUpdateOneWithoutVehicleNestedInput
    driver?: driverUpdateOneWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
    alert?: alertUncheckedUpdateManyWithoutVehicleNestedInput
    dailysummary?: dailySummaryUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance?: maintenanceUncheckedUpdateManyWithoutVehicleNestedInput
    maintenance_data?: maintenance_dataUncheckedUpdateManyWithoutVehicleNestedInput
    status?: statusUncheckedUpdateManyWithoutVehicleNestedInput
    trip?: tripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    Type?: Enumvehicle_TypeFieldUpdateOperationsInput | $Enums.vehicle_Type
    plateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    make?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    driverId?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    Imei?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type alertCreateManyVehicleInput = {
    id?: string
    type: $Enums.alert_type
    severity?: $Enums.alert_severity
    message: string
    isResolved?: boolean
    createdAt?: Date | string
    DriverId: string
  }

  export type dailySummaryCreateManyVehicleInput = {
    id?: string
    date: Date | string
    modeFuelLevel?: number | null
    modeOilPressure?: number | null
    modeBattVoltage?: number | null
    modeEngineLoad?: number | null
    modeSpeed?: number | null
    modeEngineRPM?: number | null
    modeEngineTemp?: number | null
    totalDistance?: number
    totalFuelUsed?: number
    totalEngineHrs?: number
    IdleTime?: number
    RunningTime?: number
    sampleCount?: number
    updatedAt: Date | string
  }

  export type maintenanceCreateManyVehicleInput = {
    id?: string
    serviceDate: Date | string
    nextService: Date | string
    description: string
    cost?: number | null
  }

  export type maintenance_dataCreateManyVehicleInput = {
    id?: string
    fuelRate?: number | null
    fuelEff?: number | null
    EngineHours?: number | null
    updatedAt?: Date | string
  }

  export type statusCreateManyVehicleInput = {
    id?: string
    lastLat?: number | null
    lastLng?: number | null
    lastSpeed?: number | null
    state?: $Enums.status_state
    fuelLevel?: number | null
    engineHours?: number | null
    lastUpdate?: Date | string
    BattVoltage?: number | null
    EngineLoad?: number | null
    OilPressure?: number | null
    distance?: number | null
    engineRPM?: number | null
    engineTemp?: number | null
    fuelUsed?: number | null
  }

  export type tripCreateManyVehicleInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    distance?: number
    fuelUsed?: number
    startLoc?: string | null
    endLoc?: string | null
  }

  export type alertUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUpdateOneRequiredWithoutAlertNestedInput
  }

  export type alertUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DriverId?: StringFieldUpdateOperationsInput | string
  }

  export type alertUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: Enumalert_typeFieldUpdateOperationsInput | $Enums.alert_type
    severity?: Enumalert_severityFieldUpdateOperationsInput | $Enums.alert_severity
    message?: StringFieldUpdateOperationsInput | string
    isResolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DriverId?: StringFieldUpdateOperationsInput | string
  }

  export type dailySummaryUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    modeFuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    modeOilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    modeBattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    modeSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineRPM?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalFuelUsed?: FloatFieldUpdateOperationsInput | number
    totalEngineHrs?: FloatFieldUpdateOperationsInput | number
    IdleTime?: FloatFieldUpdateOperationsInput | number
    RunningTime?: FloatFieldUpdateOperationsInput | number
    sampleCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dailySummaryUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    modeFuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    modeOilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    modeBattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    modeSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineRPM?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalFuelUsed?: FloatFieldUpdateOperationsInput | number
    totalEngineHrs?: FloatFieldUpdateOperationsInput | number
    IdleTime?: FloatFieldUpdateOperationsInput | number
    RunningTime?: FloatFieldUpdateOperationsInput | number
    sampleCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dailySummaryUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    modeFuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    modeOilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    modeBattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    modeSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineRPM?: NullableFloatFieldUpdateOperationsInput | number | null
    modeEngineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    totalDistance?: FloatFieldUpdateOperationsInput | number
    totalFuelUsed?: FloatFieldUpdateOperationsInput | number
    totalEngineHrs?: FloatFieldUpdateOperationsInput | number
    IdleTime?: FloatFieldUpdateOperationsInput | number
    RunningTime?: FloatFieldUpdateOperationsInput | number
    sampleCount?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenanceUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextService?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type maintenanceUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextService?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type maintenanceUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextService?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type maintenance_dataUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuelRate?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelEff?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenance_dataUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuelRate?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelEff?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenance_dataUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    fuelRate?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelEff?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statusUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastLat?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLng?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: Enumstatus_stateFieldUpdateOperationsInput | $Enums.status_state
    fuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    engineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    BattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    OilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    engineRPM?: NullableIntFieldUpdateOperationsInput | number | null
    engineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelUsed?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type statusUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastLat?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLng?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: Enumstatus_stateFieldUpdateOperationsInput | $Enums.status_state
    fuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    engineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    BattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    OilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    engineRPM?: NullableIntFieldUpdateOperationsInput | number | null
    engineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelUsed?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type statusUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastLat?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLng?: NullableFloatFieldUpdateOperationsInput | number | null
    lastSpeed?: NullableFloatFieldUpdateOperationsInput | number | null
    state?: Enumstatus_stateFieldUpdateOperationsInput | $Enums.status_state
    fuelLevel?: NullableFloatFieldUpdateOperationsInput | number | null
    engineHours?: NullableFloatFieldUpdateOperationsInput | number | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    BattVoltage?: NullableFloatFieldUpdateOperationsInput | number | null
    EngineLoad?: NullableFloatFieldUpdateOperationsInput | number | null
    OilPressure?: NullableFloatFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    engineRPM?: NullableIntFieldUpdateOperationsInput | number | null
    engineTemp?: NullableFloatFieldUpdateOperationsInput | number | null
    fuelUsed?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type tripUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fuelUsed?: FloatFieldUpdateOperationsInput | number
    startLoc?: NullableStringFieldUpdateOperationsInput | string | null
    endLoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tripUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fuelUsed?: FloatFieldUpdateOperationsInput | number
    startLoc?: NullableStringFieldUpdateOperationsInput | string | null
    endLoc?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tripUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fuelUsed?: FloatFieldUpdateOperationsInput | number
    startLoc?: NullableStringFieldUpdateOperationsInput | string | null
    endLoc?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}