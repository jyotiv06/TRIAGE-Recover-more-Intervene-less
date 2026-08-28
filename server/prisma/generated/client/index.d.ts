
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model PaymentEvent
 * 
 */
export type PaymentEvent = $Result.DefaultSelection<Prisma.$PaymentEventPayload>
/**
 * Model RecoveryCase
 * 
 */
export type RecoveryCase = $Result.DefaultSelection<Prisma.$RecoveryCasePayload>
/**
 * Model RecoveryAction
 * 
 */
export type RecoveryAction = $Result.DefaultSelection<Prisma.$RecoveryActionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model Opportunity
 * 
 */
export type Opportunity = $Result.DefaultSelection<Prisma.$OpportunityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RecoveryActionType: {
  RETRY: 'RETRY',
  PAYMENT_LINK: 'PAYMENT_LINK',
  REMINDER: 'REMINDER',
  DO_NOTHING: 'DO_NOTHING',
  ESCALATE: 'ESCALATE'
};

export type RecoveryActionType = (typeof RecoveryActionType)[keyof typeof RecoveryActionType]


export const RecoveryCaseStatus: {
  OPEN: 'OPEN',
  ACTION_PENDING: 'ACTION_PENDING',
  RECOVERED: 'RECOVERED',
  EXHAUSTED: 'EXHAUSTED',
  STOPPED: 'STOPPED'
};

export type RecoveryCaseStatus = (typeof RecoveryCaseStatus)[keyof typeof RecoveryCaseStatus]

}

export type RecoveryActionType = $Enums.RecoveryActionType

export const RecoveryActionType: typeof $Enums.RecoveryActionType

export type RecoveryCaseStatus = $Enums.RecoveryCaseStatus

export const RecoveryCaseStatus: typeof $Enums.RecoveryCaseStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentEvent`: Exposes CRUD operations for the **PaymentEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentEvents
    * const paymentEvents = await prisma.paymentEvent.findMany()
    * ```
    */
  get paymentEvent(): Prisma.PaymentEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recoveryCase`: Exposes CRUD operations for the **RecoveryCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecoveryCases
    * const recoveryCases = await prisma.recoveryCase.findMany()
    * ```
    */
  get recoveryCase(): Prisma.RecoveryCaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recoveryAction`: Exposes CRUD operations for the **RecoveryAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecoveryActions
    * const recoveryActions = await prisma.recoveryAction.findMany()
    * ```
    */
  get recoveryAction(): Prisma.RecoveryActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opportunity`: Exposes CRUD operations for the **Opportunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opportunities
    * const opportunities = await prisma.opportunity.findMany()
    * ```
    */
  get opportunity(): Prisma.OpportunityDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Customer: 'Customer',
    Payment: 'Payment',
    PaymentEvent: 'PaymentEvent',
    RecoveryCase: 'RecoveryCase',
    RecoveryAction: 'RecoveryAction',
    AuditLog: 'AuditLog',
    Policy: 'Policy',
    Opportunity: 'Opportunity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "payment" | "paymentEvent" | "recoveryCase" | "recoveryAction" | "auditLog" | "policy" | "opportunity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      PaymentEvent: {
        payload: Prisma.$PaymentEventPayload<ExtArgs>
        fields: Prisma.PaymentEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          findFirst: {
            args: Prisma.PaymentEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          findMany: {
            args: Prisma.PaymentEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>[]
          }
          create: {
            args: Prisma.PaymentEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          createMany: {
            args: Prisma.PaymentEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>[]
          }
          delete: {
            args: Prisma.PaymentEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          update: {
            args: Prisma.PaymentEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          deleteMany: {
            args: Prisma.PaymentEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>[]
          }
          upsert: {
            args: Prisma.PaymentEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentEventPayload>
          }
          aggregate: {
            args: Prisma.PaymentEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentEvent>
          }
          groupBy: {
            args: Prisma.PaymentEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentEventCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentEventCountAggregateOutputType> | number
          }
        }
      }
      RecoveryCase: {
        payload: Prisma.$RecoveryCasePayload<ExtArgs>
        fields: Prisma.RecoveryCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecoveryCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecoveryCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>
          }
          findFirst: {
            args: Prisma.RecoveryCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecoveryCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>
          }
          findMany: {
            args: Prisma.RecoveryCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>[]
          }
          create: {
            args: Prisma.RecoveryCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>
          }
          createMany: {
            args: Prisma.RecoveryCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecoveryCaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>[]
          }
          delete: {
            args: Prisma.RecoveryCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>
          }
          update: {
            args: Prisma.RecoveryCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>
          }
          deleteMany: {
            args: Prisma.RecoveryCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecoveryCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecoveryCaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>[]
          }
          upsert: {
            args: Prisma.RecoveryCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryCasePayload>
          }
          aggregate: {
            args: Prisma.RecoveryCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecoveryCase>
          }
          groupBy: {
            args: Prisma.RecoveryCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecoveryCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecoveryCaseCountArgs<ExtArgs>
            result: $Utils.Optional<RecoveryCaseCountAggregateOutputType> | number
          }
        }
      }
      RecoveryAction: {
        payload: Prisma.$RecoveryActionPayload<ExtArgs>
        fields: Prisma.RecoveryActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecoveryActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecoveryActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>
          }
          findFirst: {
            args: Prisma.RecoveryActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecoveryActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>
          }
          findMany: {
            args: Prisma.RecoveryActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>[]
          }
          create: {
            args: Prisma.RecoveryActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>
          }
          createMany: {
            args: Prisma.RecoveryActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecoveryActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>[]
          }
          delete: {
            args: Prisma.RecoveryActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>
          }
          update: {
            args: Prisma.RecoveryActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>
          }
          deleteMany: {
            args: Prisma.RecoveryActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecoveryActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecoveryActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>[]
          }
          upsert: {
            args: Prisma.RecoveryActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecoveryActionPayload>
          }
          aggregate: {
            args: Prisma.RecoveryActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecoveryAction>
          }
          groupBy: {
            args: Prisma.RecoveryActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecoveryActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecoveryActionCountArgs<ExtArgs>
            result: $Utils.Optional<RecoveryActionCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      Opportunity: {
        payload: Prisma.$OpportunityPayload<ExtArgs>
        fields: Prisma.OpportunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpportunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpportunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findFirst: {
            args: Prisma.OpportunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpportunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findMany: {
            args: Prisma.OpportunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          create: {
            args: Prisma.OpportunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          createMany: {
            args: Prisma.OpportunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpportunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          delete: {
            args: Prisma.OpportunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          update: {
            args: Prisma.OpportunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          deleteMany: {
            args: Prisma.OpportunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpportunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpportunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          upsert: {
            args: Prisma.OpportunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          aggregate: {
            args: Prisma.OpportunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpportunity>
          }
          groupBy: {
            args: Prisma.OpportunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpportunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpportunityCountArgs<ExtArgs>
            result: $Utils.Optional<OpportunityCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    payment?: PaymentOmit
    paymentEvent?: PaymentEventOmit
    recoveryCase?: RecoveryCaseOmit
    recoveryAction?: RecoveryActionOmit
    auditLog?: AuditLogOmit
    policy?: PolicyOmit
    opportunity?: OpportunityOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    payments: number
    recoveryCases: number
    opportunities: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | CustomerCountOutputTypeCountPaymentsArgs
    recoveryCases?: boolean | CustomerCountOutputTypeCountRecoveryCasesArgs
    opportunities?: boolean | CustomerCountOutputTypeCountOpportunitiesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountRecoveryCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryCaseWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOpportunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    events: number
    recoveryCases: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | PaymentCountOutputTypeCountEventsArgs
    recoveryCases?: boolean | PaymentCountOutputTypeCountRecoveryCasesArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentEventWhereInput
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountRecoveryCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryCaseWhereInput
  }


  /**
   * Count Type RecoveryCaseCountOutputType
   */

  export type RecoveryCaseCountOutputType = {
    actions: number
    auditLogs: number
  }

  export type RecoveryCaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | RecoveryCaseCountOutputTypeCountActionsArgs
    auditLogs?: boolean | RecoveryCaseCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * RecoveryCaseCountOutputType without action
   */
  export type RecoveryCaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCaseCountOutputType
     */
    select?: RecoveryCaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecoveryCaseCountOutputType without action
   */
  export type RecoveryCaseCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryActionWhereInput
  }

  /**
   * RecoveryCaseCountOutputType without action
   */
  export type RecoveryCaseCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    recoveryCases?: boolean | Customer$recoveryCasesArgs<ExtArgs>
    opportunities?: boolean | Customer$opportunitiesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    recoveryCases?: boolean | Customer$recoveryCasesArgs<ExtArgs>
    opportunities?: boolean | Customer$opportunitiesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      recoveryCases: Prisma.$RecoveryCasePayload<ExtArgs>[]
      opportunities: Prisma.$OpportunityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends Customer$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recoveryCases<T extends Customer$recoveryCasesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$recoveryCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opportunities<T extends Customer$opportunitiesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$opportunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.payments
   */
  export type Customer$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Customer.recoveryCases
   */
  export type Customer$recoveryCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    where?: RecoveryCaseWhereInput
    orderBy?: RecoveryCaseOrderByWithRelationInput | RecoveryCaseOrderByWithRelationInput[]
    cursor?: RecoveryCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecoveryCaseScalarFieldEnum | RecoveryCaseScalarFieldEnum[]
  }

  /**
   * Customer.opportunities
   */
  export type Customer$opportunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    where?: OpportunityWhereInput
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    cursor?: OpportunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    currency: string | null
    status: string | null
    customerId: string | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    currency: string | null
    status: string | null
    customerId: string | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    currency: number
    status: number
    customerId: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    customerId?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    customerId?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    status?: true
    customerId?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: number
    currency: string
    status: string
    customerId: string
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    customerId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    events?: boolean | Payment$eventsArgs<ExtArgs>
    recoveryCases?: boolean | Payment$recoveryCasesArgs<ExtArgs>
    opportunity?: boolean | Payment$opportunityArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    customerId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    customerId?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    customerId?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "currency" | "status" | "customerId" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    events?: boolean | Payment$eventsArgs<ExtArgs>
    recoveryCases?: boolean | Payment$recoveryCasesArgs<ExtArgs>
    opportunity?: boolean | Payment$opportunityArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      events: Prisma.$PaymentEventPayload<ExtArgs>[]
      recoveryCases: Prisma.$RecoveryCasePayload<ExtArgs>[]
      opportunity: Prisma.$OpportunityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      currency: string
      status: string
      customerId: string
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Payment$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recoveryCases<T extends Payment$recoveryCasesArgs<ExtArgs> = {}>(args?: Subset<T, Payment$recoveryCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opportunity<T extends Payment$opportunityArgs<ExtArgs> = {}>(args?: Subset<T, Payment$opportunityArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly customerId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.events
   */
  export type Payment$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    where?: PaymentEventWhereInput
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    cursor?: PaymentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentEventScalarFieldEnum | PaymentEventScalarFieldEnum[]
  }

  /**
   * Payment.recoveryCases
   */
  export type Payment$recoveryCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    where?: RecoveryCaseWhereInput
    orderBy?: RecoveryCaseOrderByWithRelationInput | RecoveryCaseOrderByWithRelationInput[]
    cursor?: RecoveryCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecoveryCaseScalarFieldEnum | RecoveryCaseScalarFieldEnum[]
  }

  /**
   * Payment.opportunity
   */
  export type Payment$opportunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    where?: OpportunityWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model PaymentEvent
   */

  export type AggregatePaymentEvent = {
    _count: PaymentEventCountAggregateOutputType | null
    _min: PaymentEventMinAggregateOutputType | null
    _max: PaymentEventMaxAggregateOutputType | null
  }

  export type PaymentEventMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    paymentId: string | null
    eventType: string | null
    createdAt: Date | null
  }

  export type PaymentEventMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    paymentId: string | null
    eventType: string | null
    createdAt: Date | null
  }

  export type PaymentEventCountAggregateOutputType = {
    id: number
    eventId: number
    paymentId: number
    eventType: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type PaymentEventMinAggregateInputType = {
    id?: true
    eventId?: true
    paymentId?: true
    eventType?: true
    createdAt?: true
  }

  export type PaymentEventMaxAggregateInputType = {
    id?: true
    eventId?: true
    paymentId?: true
    eventType?: true
    createdAt?: true
  }

  export type PaymentEventCountAggregateInputType = {
    id?: true
    eventId?: true
    paymentId?: true
    eventType?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentEvent to aggregate.
     */
    where?: PaymentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvents to fetch.
     */
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentEvents
    **/
    _count?: true | PaymentEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentEventMaxAggregateInputType
  }

  export type GetPaymentEventAggregateType<T extends PaymentEventAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentEvent[P]>
      : GetScalarType<T[P], AggregatePaymentEvent[P]>
  }




  export type PaymentEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentEventWhereInput
    orderBy?: PaymentEventOrderByWithAggregationInput | PaymentEventOrderByWithAggregationInput[]
    by: PaymentEventScalarFieldEnum[] | PaymentEventScalarFieldEnum
    having?: PaymentEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentEventCountAggregateInputType | true
    _min?: PaymentEventMinAggregateInputType
    _max?: PaymentEventMaxAggregateInputType
  }

  export type PaymentEventGroupByOutputType = {
    id: string
    eventId: string
    paymentId: string
    eventType: string
    metadata: JsonValue | null
    createdAt: Date
    _count: PaymentEventCountAggregateOutputType | null
    _min: PaymentEventMinAggregateOutputType | null
    _max: PaymentEventMaxAggregateOutputType | null
  }

  type GetPaymentEventGroupByPayload<T extends PaymentEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentEventGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentEventGroupByOutputType[P]>
        }
      >
    >


  export type PaymentEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    paymentId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvent"]>

  export type PaymentEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    paymentId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvent"]>

  export type PaymentEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    paymentId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentEvent"]>

  export type PaymentEventSelectScalar = {
    id?: boolean
    eventId?: boolean
    paymentId?: boolean
    eventType?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type PaymentEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "paymentId" | "eventType" | "metadata" | "createdAt", ExtArgs["result"]["paymentEvent"]>
  export type PaymentEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type PaymentEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type PaymentEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $PaymentEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentEvent"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      paymentId: string
      eventType: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["paymentEvent"]>
    composites: {}
  }

  type PaymentEventGetPayload<S extends boolean | null | undefined | PaymentEventDefaultArgs> = $Result.GetResult<Prisma.$PaymentEventPayload, S>

  type PaymentEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentEventCountAggregateInputType | true
    }

  export interface PaymentEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentEvent'], meta: { name: 'PaymentEvent' } }
    /**
     * Find zero or one PaymentEvent that matches the filter.
     * @param {PaymentEventFindUniqueArgs} args - Arguments to find a PaymentEvent
     * @example
     * // Get one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentEventFindUniqueArgs>(args: SelectSubset<T, PaymentEventFindUniqueArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentEventFindUniqueOrThrowArgs} args - Arguments to find a PaymentEvent
     * @example
     * // Get one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentEventFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventFindFirstArgs} args - Arguments to find a PaymentEvent
     * @example
     * // Get one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentEventFindFirstArgs>(args?: SelectSubset<T, PaymentEventFindFirstArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventFindFirstOrThrowArgs} args - Arguments to find a PaymentEvent
     * @example
     * // Get one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentEventFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentEvents
     * const paymentEvents = await prisma.paymentEvent.findMany()
     * 
     * // Get first 10 PaymentEvents
     * const paymentEvents = await prisma.paymentEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentEventWithIdOnly = await prisma.paymentEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentEventFindManyArgs>(args?: SelectSubset<T, PaymentEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentEvent.
     * @param {PaymentEventCreateArgs} args - Arguments to create a PaymentEvent.
     * @example
     * // Create one PaymentEvent
     * const PaymentEvent = await prisma.paymentEvent.create({
     *   data: {
     *     // ... data to create a PaymentEvent
     *   }
     * })
     * 
     */
    create<T extends PaymentEventCreateArgs>(args: SelectSubset<T, PaymentEventCreateArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentEvents.
     * @param {PaymentEventCreateManyArgs} args - Arguments to create many PaymentEvents.
     * @example
     * // Create many PaymentEvents
     * const paymentEvent = await prisma.paymentEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentEventCreateManyArgs>(args?: SelectSubset<T, PaymentEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentEvents and returns the data saved in the database.
     * @param {PaymentEventCreateManyAndReturnArgs} args - Arguments to create many PaymentEvents.
     * @example
     * // Create many PaymentEvents
     * const paymentEvent = await prisma.paymentEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentEvents and only return the `id`
     * const paymentEventWithIdOnly = await prisma.paymentEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentEventCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentEvent.
     * @param {PaymentEventDeleteArgs} args - Arguments to delete one PaymentEvent.
     * @example
     * // Delete one PaymentEvent
     * const PaymentEvent = await prisma.paymentEvent.delete({
     *   where: {
     *     // ... filter to delete one PaymentEvent
     *   }
     * })
     * 
     */
    delete<T extends PaymentEventDeleteArgs>(args: SelectSubset<T, PaymentEventDeleteArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentEvent.
     * @param {PaymentEventUpdateArgs} args - Arguments to update one PaymentEvent.
     * @example
     * // Update one PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentEventUpdateArgs>(args: SelectSubset<T, PaymentEventUpdateArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentEvents.
     * @param {PaymentEventDeleteManyArgs} args - Arguments to filter PaymentEvents to delete.
     * @example
     * // Delete a few PaymentEvents
     * const { count } = await prisma.paymentEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentEventDeleteManyArgs>(args?: SelectSubset<T, PaymentEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentEvents
     * const paymentEvent = await prisma.paymentEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentEventUpdateManyArgs>(args: SelectSubset<T, PaymentEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentEvents and returns the data updated in the database.
     * @param {PaymentEventUpdateManyAndReturnArgs} args - Arguments to update many PaymentEvents.
     * @example
     * // Update many PaymentEvents
     * const paymentEvent = await prisma.paymentEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentEvents and only return the `id`
     * const paymentEventWithIdOnly = await prisma.paymentEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentEventUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentEvent.
     * @param {PaymentEventUpsertArgs} args - Arguments to update or create a PaymentEvent.
     * @example
     * // Update or create a PaymentEvent
     * const paymentEvent = await prisma.paymentEvent.upsert({
     *   create: {
     *     // ... data to create a PaymentEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentEvent we want to update
     *   }
     * })
     */
    upsert<T extends PaymentEventUpsertArgs>(args: SelectSubset<T, PaymentEventUpsertArgs<ExtArgs>>): Prisma__PaymentEventClient<$Result.GetResult<Prisma.$PaymentEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventCountArgs} args - Arguments to filter PaymentEvents to count.
     * @example
     * // Count the number of PaymentEvents
     * const count = await prisma.paymentEvent.count({
     *   where: {
     *     // ... the filter for the PaymentEvents we want to count
     *   }
     * })
    **/
    count<T extends PaymentEventCountArgs>(
      args?: Subset<T, PaymentEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentEventAggregateArgs>(args: Subset<T, PaymentEventAggregateArgs>): Prisma.PrismaPromise<GetPaymentEventAggregateType<T>>

    /**
     * Group by PaymentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentEventGroupByArgs} args - Group by arguments.
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
      T extends PaymentEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentEventGroupByArgs['orderBy'] }
        : { orderBy?: PaymentEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentEvent model
   */
  readonly fields: PaymentEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentEvent model
   */
  interface PaymentEventFieldRefs {
    readonly id: FieldRef<"PaymentEvent", 'String'>
    readonly eventId: FieldRef<"PaymentEvent", 'String'>
    readonly paymentId: FieldRef<"PaymentEvent", 'String'>
    readonly eventType: FieldRef<"PaymentEvent", 'String'>
    readonly metadata: FieldRef<"PaymentEvent", 'Json'>
    readonly createdAt: FieldRef<"PaymentEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentEvent findUnique
   */
  export type PaymentEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvent to fetch.
     */
    where: PaymentEventWhereUniqueInput
  }

  /**
   * PaymentEvent findUniqueOrThrow
   */
  export type PaymentEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvent to fetch.
     */
    where: PaymentEventWhereUniqueInput
  }

  /**
   * PaymentEvent findFirst
   */
  export type PaymentEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvent to fetch.
     */
    where?: PaymentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvents to fetch.
     */
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentEvents.
     */
    cursor?: PaymentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentEvents.
     */
    distinct?: PaymentEventScalarFieldEnum | PaymentEventScalarFieldEnum[]
  }

  /**
   * PaymentEvent findFirstOrThrow
   */
  export type PaymentEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvent to fetch.
     */
    where?: PaymentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvents to fetch.
     */
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentEvents.
     */
    cursor?: PaymentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentEvents.
     */
    distinct?: PaymentEventScalarFieldEnum | PaymentEventScalarFieldEnum[]
  }

  /**
   * PaymentEvent findMany
   */
  export type PaymentEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter, which PaymentEvents to fetch.
     */
    where?: PaymentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentEvents to fetch.
     */
    orderBy?: PaymentEventOrderByWithRelationInput | PaymentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentEvents.
     */
    cursor?: PaymentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentEvents.
     */
    skip?: number
    distinct?: PaymentEventScalarFieldEnum | PaymentEventScalarFieldEnum[]
  }

  /**
   * PaymentEvent create
   */
  export type PaymentEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentEvent.
     */
    data: XOR<PaymentEventCreateInput, PaymentEventUncheckedCreateInput>
  }

  /**
   * PaymentEvent createMany
   */
  export type PaymentEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentEvents.
     */
    data: PaymentEventCreateManyInput | PaymentEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentEvent createManyAndReturn
   */
  export type PaymentEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentEvents.
     */
    data: PaymentEventCreateManyInput | PaymentEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentEvent update
   */
  export type PaymentEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentEvent.
     */
    data: XOR<PaymentEventUpdateInput, PaymentEventUncheckedUpdateInput>
    /**
     * Choose, which PaymentEvent to update.
     */
    where: PaymentEventWhereUniqueInput
  }

  /**
   * PaymentEvent updateMany
   */
  export type PaymentEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentEvents.
     */
    data: XOR<PaymentEventUpdateManyMutationInput, PaymentEventUncheckedUpdateManyInput>
    /**
     * Filter which PaymentEvents to update
     */
    where?: PaymentEventWhereInput
    /**
     * Limit how many PaymentEvents to update.
     */
    limit?: number
  }

  /**
   * PaymentEvent updateManyAndReturn
   */
  export type PaymentEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * The data used to update PaymentEvents.
     */
    data: XOR<PaymentEventUpdateManyMutationInput, PaymentEventUncheckedUpdateManyInput>
    /**
     * Filter which PaymentEvents to update
     */
    where?: PaymentEventWhereInput
    /**
     * Limit how many PaymentEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentEvent upsert
   */
  export type PaymentEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentEvent to update in case it exists.
     */
    where: PaymentEventWhereUniqueInput
    /**
     * In case the PaymentEvent found by the `where` argument doesn't exist, create a new PaymentEvent with this data.
     */
    create: XOR<PaymentEventCreateInput, PaymentEventUncheckedCreateInput>
    /**
     * In case the PaymentEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentEventUpdateInput, PaymentEventUncheckedUpdateInput>
  }

  /**
   * PaymentEvent delete
   */
  export type PaymentEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
    /**
     * Filter which PaymentEvent to delete.
     */
    where: PaymentEventWhereUniqueInput
  }

  /**
   * PaymentEvent deleteMany
   */
  export type PaymentEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentEvents to delete
     */
    where?: PaymentEventWhereInput
    /**
     * Limit how many PaymentEvents to delete.
     */
    limit?: number
  }

  /**
   * PaymentEvent without action
   */
  export type PaymentEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentEvent
     */
    select?: PaymentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentEvent
     */
    omit?: PaymentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentEventInclude<ExtArgs> | null
  }


  /**
   * Model RecoveryCase
   */

  export type AggregateRecoveryCase = {
    _count: RecoveryCaseCountAggregateOutputType | null
    _avg: RecoveryCaseAvgAggregateOutputType | null
    _sum: RecoveryCaseSumAggregateOutputType | null
    _min: RecoveryCaseMinAggregateOutputType | null
    _max: RecoveryCaseMaxAggregateOutputType | null
  }

  export type RecoveryCaseAvgAggregateOutputType = {
    confidence: number | null
    naturalRecoveryProbability: number | null
    interventionRecoveryProbability: number | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
  }

  export type RecoveryCaseSumAggregateOutputType = {
    confidence: number | null
    naturalRecoveryProbability: number | null
    interventionRecoveryProbability: number | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
  }

  export type RecoveryCaseMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    diagnosis: string | null
    confidence: number | null
    naturalRecoveryProbability: number | null
    interventionRecoveryProbability: number | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
    recommendedAction: $Enums.RecoveryActionType | null
    status: $Enums.RecoveryCaseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    customerId: string | null
  }

  export type RecoveryCaseMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    diagnosis: string | null
    confidence: number | null
    naturalRecoveryProbability: number | null
    interventionRecoveryProbability: number | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
    recommendedAction: $Enums.RecoveryActionType | null
    status: $Enums.RecoveryCaseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    customerId: string | null
  }

  export type RecoveryCaseCountAggregateOutputType = {
    id: number
    paymentId: number
    diagnosis: number
    confidence: number
    naturalRecoveryProbability: number
    interventionRecoveryProbability: number
    incrementalLift: number
    expectedIncrementalRevenue: number
    recommendedAction: number
    status: number
    createdAt: number
    updatedAt: number
    customerId: number
    _all: number
  }


  export type RecoveryCaseAvgAggregateInputType = {
    confidence?: true
    naturalRecoveryProbability?: true
    interventionRecoveryProbability?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
  }

  export type RecoveryCaseSumAggregateInputType = {
    confidence?: true
    naturalRecoveryProbability?: true
    interventionRecoveryProbability?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
  }

  export type RecoveryCaseMinAggregateInputType = {
    id?: true
    paymentId?: true
    diagnosis?: true
    confidence?: true
    naturalRecoveryProbability?: true
    interventionRecoveryProbability?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
    recommendedAction?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
  }

  export type RecoveryCaseMaxAggregateInputType = {
    id?: true
    paymentId?: true
    diagnosis?: true
    confidence?: true
    naturalRecoveryProbability?: true
    interventionRecoveryProbability?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
    recommendedAction?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
  }

  export type RecoveryCaseCountAggregateInputType = {
    id?: true
    paymentId?: true
    diagnosis?: true
    confidence?: true
    naturalRecoveryProbability?: true
    interventionRecoveryProbability?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
    recommendedAction?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
    _all?: true
  }

  export type RecoveryCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryCase to aggregate.
     */
    where?: RecoveryCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryCases to fetch.
     */
    orderBy?: RecoveryCaseOrderByWithRelationInput | RecoveryCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecoveryCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecoveryCases
    **/
    _count?: true | RecoveryCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecoveryCaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecoveryCaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecoveryCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecoveryCaseMaxAggregateInputType
  }

  export type GetRecoveryCaseAggregateType<T extends RecoveryCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateRecoveryCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecoveryCase[P]>
      : GetScalarType<T[P], AggregateRecoveryCase[P]>
  }




  export type RecoveryCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryCaseWhereInput
    orderBy?: RecoveryCaseOrderByWithAggregationInput | RecoveryCaseOrderByWithAggregationInput[]
    by: RecoveryCaseScalarFieldEnum[] | RecoveryCaseScalarFieldEnum
    having?: RecoveryCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecoveryCaseCountAggregateInputType | true
    _avg?: RecoveryCaseAvgAggregateInputType
    _sum?: RecoveryCaseSumAggregateInputType
    _min?: RecoveryCaseMinAggregateInputType
    _max?: RecoveryCaseMaxAggregateInputType
  }

  export type RecoveryCaseGroupByOutputType = {
    id: string
    paymentId: string
    diagnosis: string | null
    confidence: number | null
    naturalRecoveryProbability: number | null
    interventionRecoveryProbability: number | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
    recommendedAction: $Enums.RecoveryActionType | null
    status: $Enums.RecoveryCaseStatus
    createdAt: Date
    updatedAt: Date
    customerId: string | null
    _count: RecoveryCaseCountAggregateOutputType | null
    _avg: RecoveryCaseAvgAggregateOutputType | null
    _sum: RecoveryCaseSumAggregateOutputType | null
    _min: RecoveryCaseMinAggregateOutputType | null
    _max: RecoveryCaseMaxAggregateOutputType | null
  }

  type GetRecoveryCaseGroupByPayload<T extends RecoveryCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecoveryCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecoveryCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecoveryCaseGroupByOutputType[P]>
            : GetScalarType<T[P], RecoveryCaseGroupByOutputType[P]>
        }
      >
    >


  export type RecoveryCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    diagnosis?: boolean
    confidence?: boolean
    naturalRecoveryProbability?: boolean
    interventionRecoveryProbability?: boolean
    incrementalLift?: boolean
    expectedIncrementalRevenue?: boolean
    recommendedAction?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    actions?: boolean | RecoveryCase$actionsArgs<ExtArgs>
    auditLogs?: boolean | RecoveryCase$auditLogsArgs<ExtArgs>
    customer?: boolean | RecoveryCase$customerArgs<ExtArgs>
    _count?: boolean | RecoveryCaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryCase"]>

  export type RecoveryCaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    diagnosis?: boolean
    confidence?: boolean
    naturalRecoveryProbability?: boolean
    interventionRecoveryProbability?: boolean
    incrementalLift?: boolean
    expectedIncrementalRevenue?: boolean
    recommendedAction?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | RecoveryCase$customerArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryCase"]>

  export type RecoveryCaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    diagnosis?: boolean
    confidence?: boolean
    naturalRecoveryProbability?: boolean
    interventionRecoveryProbability?: boolean
    incrementalLift?: boolean
    expectedIncrementalRevenue?: boolean
    recommendedAction?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | RecoveryCase$customerArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryCase"]>

  export type RecoveryCaseSelectScalar = {
    id?: boolean
    paymentId?: boolean
    diagnosis?: boolean
    confidence?: boolean
    naturalRecoveryProbability?: boolean
    interventionRecoveryProbability?: boolean
    incrementalLift?: boolean
    expectedIncrementalRevenue?: boolean
    recommendedAction?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
  }

  export type RecoveryCaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "diagnosis" | "confidence" | "naturalRecoveryProbability" | "interventionRecoveryProbability" | "incrementalLift" | "expectedIncrementalRevenue" | "recommendedAction" | "status" | "createdAt" | "updatedAt" | "customerId", ExtArgs["result"]["recoveryCase"]>
  export type RecoveryCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    actions?: boolean | RecoveryCase$actionsArgs<ExtArgs>
    auditLogs?: boolean | RecoveryCase$auditLogsArgs<ExtArgs>
    customer?: boolean | RecoveryCase$customerArgs<ExtArgs>
    _count?: boolean | RecoveryCaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecoveryCaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | RecoveryCase$customerArgs<ExtArgs>
  }
  export type RecoveryCaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | RecoveryCase$customerArgs<ExtArgs>
  }

  export type $RecoveryCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecoveryCase"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
      actions: Prisma.$RecoveryActionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      diagnosis: string | null
      confidence: number | null
      naturalRecoveryProbability: number | null
      interventionRecoveryProbability: number | null
      incrementalLift: number | null
      expectedIncrementalRevenue: Prisma.Decimal | null
      recommendedAction: $Enums.RecoveryActionType | null
      status: $Enums.RecoveryCaseStatus
      createdAt: Date
      updatedAt: Date
      customerId: string | null
    }, ExtArgs["result"]["recoveryCase"]>
    composites: {}
  }

  type RecoveryCaseGetPayload<S extends boolean | null | undefined | RecoveryCaseDefaultArgs> = $Result.GetResult<Prisma.$RecoveryCasePayload, S>

  type RecoveryCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecoveryCaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecoveryCaseCountAggregateInputType | true
    }

  export interface RecoveryCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecoveryCase'], meta: { name: 'RecoveryCase' } }
    /**
     * Find zero or one RecoveryCase that matches the filter.
     * @param {RecoveryCaseFindUniqueArgs} args - Arguments to find a RecoveryCase
     * @example
     * // Get one RecoveryCase
     * const recoveryCase = await prisma.recoveryCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecoveryCaseFindUniqueArgs>(args: SelectSubset<T, RecoveryCaseFindUniqueArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecoveryCase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecoveryCaseFindUniqueOrThrowArgs} args - Arguments to find a RecoveryCase
     * @example
     * // Get one RecoveryCase
     * const recoveryCase = await prisma.recoveryCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecoveryCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, RecoveryCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecoveryCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCaseFindFirstArgs} args - Arguments to find a RecoveryCase
     * @example
     * // Get one RecoveryCase
     * const recoveryCase = await prisma.recoveryCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecoveryCaseFindFirstArgs>(args?: SelectSubset<T, RecoveryCaseFindFirstArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecoveryCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCaseFindFirstOrThrowArgs} args - Arguments to find a RecoveryCase
     * @example
     * // Get one RecoveryCase
     * const recoveryCase = await prisma.recoveryCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecoveryCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, RecoveryCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecoveryCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecoveryCases
     * const recoveryCases = await prisma.recoveryCase.findMany()
     * 
     * // Get first 10 RecoveryCases
     * const recoveryCases = await prisma.recoveryCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recoveryCaseWithIdOnly = await prisma.recoveryCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecoveryCaseFindManyArgs>(args?: SelectSubset<T, RecoveryCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecoveryCase.
     * @param {RecoveryCaseCreateArgs} args - Arguments to create a RecoveryCase.
     * @example
     * // Create one RecoveryCase
     * const RecoveryCase = await prisma.recoveryCase.create({
     *   data: {
     *     // ... data to create a RecoveryCase
     *   }
     * })
     * 
     */
    create<T extends RecoveryCaseCreateArgs>(args: SelectSubset<T, RecoveryCaseCreateArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecoveryCases.
     * @param {RecoveryCaseCreateManyArgs} args - Arguments to create many RecoveryCases.
     * @example
     * // Create many RecoveryCases
     * const recoveryCase = await prisma.recoveryCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecoveryCaseCreateManyArgs>(args?: SelectSubset<T, RecoveryCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecoveryCases and returns the data saved in the database.
     * @param {RecoveryCaseCreateManyAndReturnArgs} args - Arguments to create many RecoveryCases.
     * @example
     * // Create many RecoveryCases
     * const recoveryCase = await prisma.recoveryCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecoveryCases and only return the `id`
     * const recoveryCaseWithIdOnly = await prisma.recoveryCase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecoveryCaseCreateManyAndReturnArgs>(args?: SelectSubset<T, RecoveryCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecoveryCase.
     * @param {RecoveryCaseDeleteArgs} args - Arguments to delete one RecoveryCase.
     * @example
     * // Delete one RecoveryCase
     * const RecoveryCase = await prisma.recoveryCase.delete({
     *   where: {
     *     // ... filter to delete one RecoveryCase
     *   }
     * })
     * 
     */
    delete<T extends RecoveryCaseDeleteArgs>(args: SelectSubset<T, RecoveryCaseDeleteArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecoveryCase.
     * @param {RecoveryCaseUpdateArgs} args - Arguments to update one RecoveryCase.
     * @example
     * // Update one RecoveryCase
     * const recoveryCase = await prisma.recoveryCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecoveryCaseUpdateArgs>(args: SelectSubset<T, RecoveryCaseUpdateArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecoveryCases.
     * @param {RecoveryCaseDeleteManyArgs} args - Arguments to filter RecoveryCases to delete.
     * @example
     * // Delete a few RecoveryCases
     * const { count } = await prisma.recoveryCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecoveryCaseDeleteManyArgs>(args?: SelectSubset<T, RecoveryCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecoveryCases
     * const recoveryCase = await prisma.recoveryCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecoveryCaseUpdateManyArgs>(args: SelectSubset<T, RecoveryCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryCases and returns the data updated in the database.
     * @param {RecoveryCaseUpdateManyAndReturnArgs} args - Arguments to update many RecoveryCases.
     * @example
     * // Update many RecoveryCases
     * const recoveryCase = await prisma.recoveryCase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecoveryCases and only return the `id`
     * const recoveryCaseWithIdOnly = await prisma.recoveryCase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecoveryCaseUpdateManyAndReturnArgs>(args: SelectSubset<T, RecoveryCaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecoveryCase.
     * @param {RecoveryCaseUpsertArgs} args - Arguments to update or create a RecoveryCase.
     * @example
     * // Update or create a RecoveryCase
     * const recoveryCase = await prisma.recoveryCase.upsert({
     *   create: {
     *     // ... data to create a RecoveryCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecoveryCase we want to update
     *   }
     * })
     */
    upsert<T extends RecoveryCaseUpsertArgs>(args: SelectSubset<T, RecoveryCaseUpsertArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecoveryCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCaseCountArgs} args - Arguments to filter RecoveryCases to count.
     * @example
     * // Count the number of RecoveryCases
     * const count = await prisma.recoveryCase.count({
     *   where: {
     *     // ... the filter for the RecoveryCases we want to count
     *   }
     * })
    **/
    count<T extends RecoveryCaseCountArgs>(
      args?: Subset<T, RecoveryCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecoveryCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecoveryCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecoveryCaseAggregateArgs>(args: Subset<T, RecoveryCaseAggregateArgs>): Prisma.PrismaPromise<GetRecoveryCaseAggregateType<T>>

    /**
     * Group by RecoveryCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryCaseGroupByArgs} args - Group by arguments.
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
      T extends RecoveryCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecoveryCaseGroupByArgs['orderBy'] }
        : { orderBy?: RecoveryCaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecoveryCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecoveryCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecoveryCase model
   */
  readonly fields: RecoveryCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecoveryCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecoveryCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actions<T extends RecoveryCase$actionsArgs<ExtArgs> = {}>(args?: Subset<T, RecoveryCase$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends RecoveryCase$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, RecoveryCase$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends RecoveryCase$customerArgs<ExtArgs> = {}>(args?: Subset<T, RecoveryCase$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecoveryCase model
   */
  interface RecoveryCaseFieldRefs {
    readonly id: FieldRef<"RecoveryCase", 'String'>
    readonly paymentId: FieldRef<"RecoveryCase", 'String'>
    readonly diagnosis: FieldRef<"RecoveryCase", 'String'>
    readonly confidence: FieldRef<"RecoveryCase", 'Float'>
    readonly naturalRecoveryProbability: FieldRef<"RecoveryCase", 'Float'>
    readonly interventionRecoveryProbability: FieldRef<"RecoveryCase", 'Float'>
    readonly incrementalLift: FieldRef<"RecoveryCase", 'Float'>
    readonly expectedIncrementalRevenue: FieldRef<"RecoveryCase", 'Decimal'>
    readonly recommendedAction: FieldRef<"RecoveryCase", 'RecoveryActionType'>
    readonly status: FieldRef<"RecoveryCase", 'RecoveryCaseStatus'>
    readonly createdAt: FieldRef<"RecoveryCase", 'DateTime'>
    readonly updatedAt: FieldRef<"RecoveryCase", 'DateTime'>
    readonly customerId: FieldRef<"RecoveryCase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecoveryCase findUnique
   */
  export type RecoveryCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCase to fetch.
     */
    where: RecoveryCaseWhereUniqueInput
  }

  /**
   * RecoveryCase findUniqueOrThrow
   */
  export type RecoveryCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCase to fetch.
     */
    where: RecoveryCaseWhereUniqueInput
  }

  /**
   * RecoveryCase findFirst
   */
  export type RecoveryCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCase to fetch.
     */
    where?: RecoveryCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryCases to fetch.
     */
    orderBy?: RecoveryCaseOrderByWithRelationInput | RecoveryCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryCases.
     */
    cursor?: RecoveryCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryCases.
     */
    distinct?: RecoveryCaseScalarFieldEnum | RecoveryCaseScalarFieldEnum[]
  }

  /**
   * RecoveryCase findFirstOrThrow
   */
  export type RecoveryCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCase to fetch.
     */
    where?: RecoveryCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryCases to fetch.
     */
    orderBy?: RecoveryCaseOrderByWithRelationInput | RecoveryCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryCases.
     */
    cursor?: RecoveryCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryCases.
     */
    distinct?: RecoveryCaseScalarFieldEnum | RecoveryCaseScalarFieldEnum[]
  }

  /**
   * RecoveryCase findMany
   */
  export type RecoveryCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryCases to fetch.
     */
    where?: RecoveryCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryCases to fetch.
     */
    orderBy?: RecoveryCaseOrderByWithRelationInput | RecoveryCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecoveryCases.
     */
    cursor?: RecoveryCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryCases.
     */
    skip?: number
    distinct?: RecoveryCaseScalarFieldEnum | RecoveryCaseScalarFieldEnum[]
  }

  /**
   * RecoveryCase create
   */
  export type RecoveryCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a RecoveryCase.
     */
    data: XOR<RecoveryCaseCreateInput, RecoveryCaseUncheckedCreateInput>
  }

  /**
   * RecoveryCase createMany
   */
  export type RecoveryCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecoveryCases.
     */
    data: RecoveryCaseCreateManyInput | RecoveryCaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecoveryCase createManyAndReturn
   */
  export type RecoveryCaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * The data used to create many RecoveryCases.
     */
    data: RecoveryCaseCreateManyInput | RecoveryCaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecoveryCase update
   */
  export type RecoveryCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a RecoveryCase.
     */
    data: XOR<RecoveryCaseUpdateInput, RecoveryCaseUncheckedUpdateInput>
    /**
     * Choose, which RecoveryCase to update.
     */
    where: RecoveryCaseWhereUniqueInput
  }

  /**
   * RecoveryCase updateMany
   */
  export type RecoveryCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecoveryCases.
     */
    data: XOR<RecoveryCaseUpdateManyMutationInput, RecoveryCaseUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryCases to update
     */
    where?: RecoveryCaseWhereInput
    /**
     * Limit how many RecoveryCases to update.
     */
    limit?: number
  }

  /**
   * RecoveryCase updateManyAndReturn
   */
  export type RecoveryCaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * The data used to update RecoveryCases.
     */
    data: XOR<RecoveryCaseUpdateManyMutationInput, RecoveryCaseUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryCases to update
     */
    where?: RecoveryCaseWhereInput
    /**
     * Limit how many RecoveryCases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecoveryCase upsert
   */
  export type RecoveryCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the RecoveryCase to update in case it exists.
     */
    where: RecoveryCaseWhereUniqueInput
    /**
     * In case the RecoveryCase found by the `where` argument doesn't exist, create a new RecoveryCase with this data.
     */
    create: XOR<RecoveryCaseCreateInput, RecoveryCaseUncheckedCreateInput>
    /**
     * In case the RecoveryCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecoveryCaseUpdateInput, RecoveryCaseUncheckedUpdateInput>
  }

  /**
   * RecoveryCase delete
   */
  export type RecoveryCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    /**
     * Filter which RecoveryCase to delete.
     */
    where: RecoveryCaseWhereUniqueInput
  }

  /**
   * RecoveryCase deleteMany
   */
  export type RecoveryCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryCases to delete
     */
    where?: RecoveryCaseWhereInput
    /**
     * Limit how many RecoveryCases to delete.
     */
    limit?: number
  }

  /**
   * RecoveryCase.actions
   */
  export type RecoveryCase$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    where?: RecoveryActionWhereInput
    orderBy?: RecoveryActionOrderByWithRelationInput | RecoveryActionOrderByWithRelationInput[]
    cursor?: RecoveryActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecoveryActionScalarFieldEnum | RecoveryActionScalarFieldEnum[]
  }

  /**
   * RecoveryCase.auditLogs
   */
  export type RecoveryCase$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * RecoveryCase.customer
   */
  export type RecoveryCase$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * RecoveryCase without action
   */
  export type RecoveryCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
  }


  /**
   * Model RecoveryAction
   */

  export type AggregateRecoveryAction = {
    _count: RecoveryActionCountAggregateOutputType | null
    _min: RecoveryActionMinAggregateOutputType | null
    _max: RecoveryActionMaxAggregateOutputType | null
  }

  export type RecoveryActionMinAggregateOutputType = {
    id: string | null
    recoveryCaseId: string | null
    actionType: string | null
    status: string | null
    createdAt: Date | null
  }

  export type RecoveryActionMaxAggregateOutputType = {
    id: string | null
    recoveryCaseId: string | null
    actionType: string | null
    status: string | null
    createdAt: Date | null
  }

  export type RecoveryActionCountAggregateOutputType = {
    id: number
    recoveryCaseId: number
    actionType: number
    status: number
    createdAt: number
    _all: number
  }


  export type RecoveryActionMinAggregateInputType = {
    id?: true
    recoveryCaseId?: true
    actionType?: true
    status?: true
    createdAt?: true
  }

  export type RecoveryActionMaxAggregateInputType = {
    id?: true
    recoveryCaseId?: true
    actionType?: true
    status?: true
    createdAt?: true
  }

  export type RecoveryActionCountAggregateInputType = {
    id?: true
    recoveryCaseId?: true
    actionType?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type RecoveryActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryAction to aggregate.
     */
    where?: RecoveryActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryActions to fetch.
     */
    orderBy?: RecoveryActionOrderByWithRelationInput | RecoveryActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecoveryActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecoveryActions
    **/
    _count?: true | RecoveryActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecoveryActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecoveryActionMaxAggregateInputType
  }

  export type GetRecoveryActionAggregateType<T extends RecoveryActionAggregateArgs> = {
        [P in keyof T & keyof AggregateRecoveryAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecoveryAction[P]>
      : GetScalarType<T[P], AggregateRecoveryAction[P]>
  }




  export type RecoveryActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecoveryActionWhereInput
    orderBy?: RecoveryActionOrderByWithAggregationInput | RecoveryActionOrderByWithAggregationInput[]
    by: RecoveryActionScalarFieldEnum[] | RecoveryActionScalarFieldEnum
    having?: RecoveryActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecoveryActionCountAggregateInputType | true
    _min?: RecoveryActionMinAggregateInputType
    _max?: RecoveryActionMaxAggregateInputType
  }

  export type RecoveryActionGroupByOutputType = {
    id: string
    recoveryCaseId: string
    actionType: string
    status: string
    createdAt: Date
    _count: RecoveryActionCountAggregateOutputType | null
    _min: RecoveryActionMinAggregateOutputType | null
    _max: RecoveryActionMaxAggregateOutputType | null
  }

  type GetRecoveryActionGroupByPayload<T extends RecoveryActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecoveryActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecoveryActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecoveryActionGroupByOutputType[P]>
            : GetScalarType<T[P], RecoveryActionGroupByOutputType[P]>
        }
      >
    >


  export type RecoveryActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCaseId?: boolean
    actionType?: boolean
    status?: boolean
    createdAt?: boolean
    recoveryCase?: boolean | RecoveryCaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryAction"]>

  export type RecoveryActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCaseId?: boolean
    actionType?: boolean
    status?: boolean
    createdAt?: boolean
    recoveryCase?: boolean | RecoveryCaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryAction"]>

  export type RecoveryActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recoveryCaseId?: boolean
    actionType?: boolean
    status?: boolean
    createdAt?: boolean
    recoveryCase?: boolean | RecoveryCaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recoveryAction"]>

  export type RecoveryActionSelectScalar = {
    id?: boolean
    recoveryCaseId?: boolean
    actionType?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type RecoveryActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recoveryCaseId" | "actionType" | "status" | "createdAt", ExtArgs["result"]["recoveryAction"]>
  export type RecoveryActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recoveryCase?: boolean | RecoveryCaseDefaultArgs<ExtArgs>
  }
  export type RecoveryActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recoveryCase?: boolean | RecoveryCaseDefaultArgs<ExtArgs>
  }
  export type RecoveryActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recoveryCase?: boolean | RecoveryCaseDefaultArgs<ExtArgs>
  }

  export type $RecoveryActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecoveryAction"
    objects: {
      recoveryCase: Prisma.$RecoveryCasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recoveryCaseId: string
      actionType: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["recoveryAction"]>
    composites: {}
  }

  type RecoveryActionGetPayload<S extends boolean | null | undefined | RecoveryActionDefaultArgs> = $Result.GetResult<Prisma.$RecoveryActionPayload, S>

  type RecoveryActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecoveryActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecoveryActionCountAggregateInputType | true
    }

  export interface RecoveryActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecoveryAction'], meta: { name: 'RecoveryAction' } }
    /**
     * Find zero or one RecoveryAction that matches the filter.
     * @param {RecoveryActionFindUniqueArgs} args - Arguments to find a RecoveryAction
     * @example
     * // Get one RecoveryAction
     * const recoveryAction = await prisma.recoveryAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecoveryActionFindUniqueArgs>(args: SelectSubset<T, RecoveryActionFindUniqueArgs<ExtArgs>>): Prisma__RecoveryActionClient<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecoveryAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecoveryActionFindUniqueOrThrowArgs} args - Arguments to find a RecoveryAction
     * @example
     * // Get one RecoveryAction
     * const recoveryAction = await prisma.recoveryAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecoveryActionFindUniqueOrThrowArgs>(args: SelectSubset<T, RecoveryActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecoveryActionClient<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecoveryAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryActionFindFirstArgs} args - Arguments to find a RecoveryAction
     * @example
     * // Get one RecoveryAction
     * const recoveryAction = await prisma.recoveryAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecoveryActionFindFirstArgs>(args?: SelectSubset<T, RecoveryActionFindFirstArgs<ExtArgs>>): Prisma__RecoveryActionClient<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecoveryAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryActionFindFirstOrThrowArgs} args - Arguments to find a RecoveryAction
     * @example
     * // Get one RecoveryAction
     * const recoveryAction = await prisma.recoveryAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecoveryActionFindFirstOrThrowArgs>(args?: SelectSubset<T, RecoveryActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecoveryActionClient<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecoveryActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecoveryActions
     * const recoveryActions = await prisma.recoveryAction.findMany()
     * 
     * // Get first 10 RecoveryActions
     * const recoveryActions = await prisma.recoveryAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recoveryActionWithIdOnly = await prisma.recoveryAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecoveryActionFindManyArgs>(args?: SelectSubset<T, RecoveryActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecoveryAction.
     * @param {RecoveryActionCreateArgs} args - Arguments to create a RecoveryAction.
     * @example
     * // Create one RecoveryAction
     * const RecoveryAction = await prisma.recoveryAction.create({
     *   data: {
     *     // ... data to create a RecoveryAction
     *   }
     * })
     * 
     */
    create<T extends RecoveryActionCreateArgs>(args: SelectSubset<T, RecoveryActionCreateArgs<ExtArgs>>): Prisma__RecoveryActionClient<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecoveryActions.
     * @param {RecoveryActionCreateManyArgs} args - Arguments to create many RecoveryActions.
     * @example
     * // Create many RecoveryActions
     * const recoveryAction = await prisma.recoveryAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecoveryActionCreateManyArgs>(args?: SelectSubset<T, RecoveryActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecoveryActions and returns the data saved in the database.
     * @param {RecoveryActionCreateManyAndReturnArgs} args - Arguments to create many RecoveryActions.
     * @example
     * // Create many RecoveryActions
     * const recoveryAction = await prisma.recoveryAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecoveryActions and only return the `id`
     * const recoveryActionWithIdOnly = await prisma.recoveryAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecoveryActionCreateManyAndReturnArgs>(args?: SelectSubset<T, RecoveryActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecoveryAction.
     * @param {RecoveryActionDeleteArgs} args - Arguments to delete one RecoveryAction.
     * @example
     * // Delete one RecoveryAction
     * const RecoveryAction = await prisma.recoveryAction.delete({
     *   where: {
     *     // ... filter to delete one RecoveryAction
     *   }
     * })
     * 
     */
    delete<T extends RecoveryActionDeleteArgs>(args: SelectSubset<T, RecoveryActionDeleteArgs<ExtArgs>>): Prisma__RecoveryActionClient<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecoveryAction.
     * @param {RecoveryActionUpdateArgs} args - Arguments to update one RecoveryAction.
     * @example
     * // Update one RecoveryAction
     * const recoveryAction = await prisma.recoveryAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecoveryActionUpdateArgs>(args: SelectSubset<T, RecoveryActionUpdateArgs<ExtArgs>>): Prisma__RecoveryActionClient<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecoveryActions.
     * @param {RecoveryActionDeleteManyArgs} args - Arguments to filter RecoveryActions to delete.
     * @example
     * // Delete a few RecoveryActions
     * const { count } = await prisma.recoveryAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecoveryActionDeleteManyArgs>(args?: SelectSubset<T, RecoveryActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecoveryActions
     * const recoveryAction = await prisma.recoveryAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecoveryActionUpdateManyArgs>(args: SelectSubset<T, RecoveryActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecoveryActions and returns the data updated in the database.
     * @param {RecoveryActionUpdateManyAndReturnArgs} args - Arguments to update many RecoveryActions.
     * @example
     * // Update many RecoveryActions
     * const recoveryAction = await prisma.recoveryAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecoveryActions and only return the `id`
     * const recoveryActionWithIdOnly = await prisma.recoveryAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecoveryActionUpdateManyAndReturnArgs>(args: SelectSubset<T, RecoveryActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecoveryAction.
     * @param {RecoveryActionUpsertArgs} args - Arguments to update or create a RecoveryAction.
     * @example
     * // Update or create a RecoveryAction
     * const recoveryAction = await prisma.recoveryAction.upsert({
     *   create: {
     *     // ... data to create a RecoveryAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecoveryAction we want to update
     *   }
     * })
     */
    upsert<T extends RecoveryActionUpsertArgs>(args: SelectSubset<T, RecoveryActionUpsertArgs<ExtArgs>>): Prisma__RecoveryActionClient<$Result.GetResult<Prisma.$RecoveryActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecoveryActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryActionCountArgs} args - Arguments to filter RecoveryActions to count.
     * @example
     * // Count the number of RecoveryActions
     * const count = await prisma.recoveryAction.count({
     *   where: {
     *     // ... the filter for the RecoveryActions we want to count
     *   }
     * })
    **/
    count<T extends RecoveryActionCountArgs>(
      args?: Subset<T, RecoveryActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecoveryActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecoveryAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecoveryActionAggregateArgs>(args: Subset<T, RecoveryActionAggregateArgs>): Prisma.PrismaPromise<GetRecoveryActionAggregateType<T>>

    /**
     * Group by RecoveryAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecoveryActionGroupByArgs} args - Group by arguments.
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
      T extends RecoveryActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecoveryActionGroupByArgs['orderBy'] }
        : { orderBy?: RecoveryActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecoveryActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecoveryActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecoveryAction model
   */
  readonly fields: RecoveryActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecoveryAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecoveryActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recoveryCase<T extends RecoveryCaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecoveryCaseDefaultArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecoveryAction model
   */
  interface RecoveryActionFieldRefs {
    readonly id: FieldRef<"RecoveryAction", 'String'>
    readonly recoveryCaseId: FieldRef<"RecoveryAction", 'String'>
    readonly actionType: FieldRef<"RecoveryAction", 'String'>
    readonly status: FieldRef<"RecoveryAction", 'String'>
    readonly createdAt: FieldRef<"RecoveryAction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecoveryAction findUnique
   */
  export type RecoveryActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryAction to fetch.
     */
    where: RecoveryActionWhereUniqueInput
  }

  /**
   * RecoveryAction findUniqueOrThrow
   */
  export type RecoveryActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryAction to fetch.
     */
    where: RecoveryActionWhereUniqueInput
  }

  /**
   * RecoveryAction findFirst
   */
  export type RecoveryActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryAction to fetch.
     */
    where?: RecoveryActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryActions to fetch.
     */
    orderBy?: RecoveryActionOrderByWithRelationInput | RecoveryActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryActions.
     */
    cursor?: RecoveryActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryActions.
     */
    distinct?: RecoveryActionScalarFieldEnum | RecoveryActionScalarFieldEnum[]
  }

  /**
   * RecoveryAction findFirstOrThrow
   */
  export type RecoveryActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryAction to fetch.
     */
    where?: RecoveryActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryActions to fetch.
     */
    orderBy?: RecoveryActionOrderByWithRelationInput | RecoveryActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecoveryActions.
     */
    cursor?: RecoveryActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecoveryActions.
     */
    distinct?: RecoveryActionScalarFieldEnum | RecoveryActionScalarFieldEnum[]
  }

  /**
   * RecoveryAction findMany
   */
  export type RecoveryActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * Filter, which RecoveryActions to fetch.
     */
    where?: RecoveryActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecoveryActions to fetch.
     */
    orderBy?: RecoveryActionOrderByWithRelationInput | RecoveryActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecoveryActions.
     */
    cursor?: RecoveryActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecoveryActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecoveryActions.
     */
    skip?: number
    distinct?: RecoveryActionScalarFieldEnum | RecoveryActionScalarFieldEnum[]
  }

  /**
   * RecoveryAction create
   */
  export type RecoveryActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * The data needed to create a RecoveryAction.
     */
    data: XOR<RecoveryActionCreateInput, RecoveryActionUncheckedCreateInput>
  }

  /**
   * RecoveryAction createMany
   */
  export type RecoveryActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecoveryActions.
     */
    data: RecoveryActionCreateManyInput | RecoveryActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecoveryAction createManyAndReturn
   */
  export type RecoveryActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * The data used to create many RecoveryActions.
     */
    data: RecoveryActionCreateManyInput | RecoveryActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecoveryAction update
   */
  export type RecoveryActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * The data needed to update a RecoveryAction.
     */
    data: XOR<RecoveryActionUpdateInput, RecoveryActionUncheckedUpdateInput>
    /**
     * Choose, which RecoveryAction to update.
     */
    where: RecoveryActionWhereUniqueInput
  }

  /**
   * RecoveryAction updateMany
   */
  export type RecoveryActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecoveryActions.
     */
    data: XOR<RecoveryActionUpdateManyMutationInput, RecoveryActionUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryActions to update
     */
    where?: RecoveryActionWhereInput
    /**
     * Limit how many RecoveryActions to update.
     */
    limit?: number
  }

  /**
   * RecoveryAction updateManyAndReturn
   */
  export type RecoveryActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * The data used to update RecoveryActions.
     */
    data: XOR<RecoveryActionUpdateManyMutationInput, RecoveryActionUncheckedUpdateManyInput>
    /**
     * Filter which RecoveryActions to update
     */
    where?: RecoveryActionWhereInput
    /**
     * Limit how many RecoveryActions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecoveryAction upsert
   */
  export type RecoveryActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * The filter to search for the RecoveryAction to update in case it exists.
     */
    where: RecoveryActionWhereUniqueInput
    /**
     * In case the RecoveryAction found by the `where` argument doesn't exist, create a new RecoveryAction with this data.
     */
    create: XOR<RecoveryActionCreateInput, RecoveryActionUncheckedCreateInput>
    /**
     * In case the RecoveryAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecoveryActionUpdateInput, RecoveryActionUncheckedUpdateInput>
  }

  /**
   * RecoveryAction delete
   */
  export type RecoveryActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
    /**
     * Filter which RecoveryAction to delete.
     */
    where: RecoveryActionWhereUniqueInput
  }

  /**
   * RecoveryAction deleteMany
   */
  export type RecoveryActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecoveryActions to delete
     */
    where?: RecoveryActionWhereInput
    /**
     * Limit how many RecoveryActions to delete.
     */
    limit?: number
  }

  /**
   * RecoveryAction without action
   */
  export type RecoveryActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryAction
     */
    select?: RecoveryActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryAction
     */
    omit?: RecoveryActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryActionInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    createdAt: Date | null
    recoveryCaseId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    createdAt: Date | null
    recoveryCaseId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    details: number
    createdAt: number
    recoveryCaseId: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    createdAt?: true
    recoveryCaseId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    createdAt?: true
    recoveryCaseId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    details?: true
    createdAt?: true
    recoveryCaseId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    details: JsonValue | null
    createdAt: Date
    recoveryCaseId: string | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    recoveryCaseId?: boolean
    recoveryCase?: boolean | AuditLog$recoveryCaseArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    recoveryCaseId?: boolean
    recoveryCase?: boolean | AuditLog$recoveryCaseArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    recoveryCaseId?: boolean
    recoveryCase?: boolean | AuditLog$recoveryCaseArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    recoveryCaseId?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "details" | "createdAt" | "recoveryCaseId", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recoveryCase?: boolean | AuditLog$recoveryCaseArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recoveryCase?: boolean | AuditLog$recoveryCaseArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recoveryCase?: boolean | AuditLog$recoveryCaseArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      recoveryCase: Prisma.$RecoveryCasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      details: Prisma.JsonValue | null
      createdAt: Date
      recoveryCaseId: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recoveryCase<T extends AuditLog$recoveryCaseArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$recoveryCaseArgs<ExtArgs>>): Prisma__RecoveryCaseClient<$Result.GetResult<Prisma.$RecoveryCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly recoveryCaseId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.recoveryCase
   */
  export type AuditLog$recoveryCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecoveryCase
     */
    select?: RecoveryCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecoveryCase
     */
    omit?: RecoveryCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecoveryCaseInclude<ExtArgs> | null
    where?: RecoveryCaseWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    name: number
    rules: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolicyMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    name?: true
    rules?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: string
    name: string
    rules: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PolicyCountAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rules?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rules?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rules?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    name?: boolean
    rules?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rules" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["policy"]>

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rules: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies and returns the data updated in the database.
     * @param {PolicyUpdateManyAndReturnArgs} args - Arguments to update many Policies.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
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
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Policy model
   */
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'String'>
    readonly name: FieldRef<"Policy", 'String'>
    readonly rules: FieldRef<"Policy", 'Json'>
    readonly isActive: FieldRef<"Policy", 'Boolean'>
    readonly createdAt: FieldRef<"Policy", 'DateTime'>
    readonly updatedAt: FieldRef<"Policy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policy updateManyAndReturn
   */
  export type PolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to delete.
     */
    limit?: number
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
  }


  /**
   * Model Opportunity
   */

  export type AggregateOpportunity = {
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  export type OpportunityAvgAggregateOutputType = {
    amount: number | null
    previousSuccessCount: number | null
    previousFailureCount: number | null
    daysSinceLastSuccess: number | null
    attemptCount: number | null
    hoursSinceFailure: number | null
    naturalRecoveryProbability: number | null
    aiEstimatedLift: number | null
    diagnosisConfidence: number | null
    aiNaturalRecoveryProbability: number | null
    aiRecoveryWithInterventionProbability: number | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
    amountRecovered: number | null
  }

  export type OpportunitySumAggregateOutputType = {
    amount: number | null
    previousSuccessCount: number | null
    previousFailureCount: number | null
    daysSinceLastSuccess: number | null
    attemptCount: number | null
    hoursSinceFailure: number | null
    naturalRecoveryProbability: number | null
    aiEstimatedLift: number | null
    diagnosisConfidence: number | null
    aiNaturalRecoveryProbability: number | null
    aiRecoveryWithInterventionProbability: number | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
    amountRecovered: number | null
  }

  export type OpportunityMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    customerId: string | null
    amount: number | null
    currency: string | null
    customerSegment: string | null
    previousSuccessCount: number | null
    previousFailureCount: number | null
    daysSinceLastSuccess: number | null
    attemptCount: number | null
    failureReason: string | null
    opportunityStatus: string | null
    hoursSinceFailure: number | null
    checkoutAbandoned: boolean | null
    lateAuthorization: boolean | null
    alreadyRecovered: boolean | null
    naturalRecoveryProbability: number | null
    recoveredNaturally: boolean | null
    aiEstimatedLift: number | null
    aiRecommendedAction: string | null
    selectedForIntervention: boolean | null
    diagnosis: string | null
    diagnosisReasoning: string | null
    diagnosisConfidence: number | null
    aiNaturalRecoveryProbability: number | null
    aiRecoveryWithInterventionProbability: number | null
    diagnosedAt: Date | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
    selectionReason: string | null
    policyAllowed: boolean | null
    policyReason: string | null
    policyEscalate: boolean | null
    action: string | null
    recovered: boolean | null
    amountRecovered: number | null
    interventionUsed: boolean | null
    createdAt: Date | null
  }

  export type OpportunityMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    customerId: string | null
    amount: number | null
    currency: string | null
    customerSegment: string | null
    previousSuccessCount: number | null
    previousFailureCount: number | null
    daysSinceLastSuccess: number | null
    attemptCount: number | null
    failureReason: string | null
    opportunityStatus: string | null
    hoursSinceFailure: number | null
    checkoutAbandoned: boolean | null
    lateAuthorization: boolean | null
    alreadyRecovered: boolean | null
    naturalRecoveryProbability: number | null
    recoveredNaturally: boolean | null
    aiEstimatedLift: number | null
    aiRecommendedAction: string | null
    selectedForIntervention: boolean | null
    diagnosis: string | null
    diagnosisReasoning: string | null
    diagnosisConfidence: number | null
    aiNaturalRecoveryProbability: number | null
    aiRecoveryWithInterventionProbability: number | null
    diagnosedAt: Date | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
    selectionReason: string | null
    policyAllowed: boolean | null
    policyReason: string | null
    policyEscalate: boolean | null
    action: string | null
    recovered: boolean | null
    amountRecovered: number | null
    interventionUsed: boolean | null
    createdAt: Date | null
  }

  export type OpportunityCountAggregateOutputType = {
    id: number
    paymentId: number
    customerId: number
    amount: number
    currency: number
    customerSegment: number
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess: number
    attemptCount: number
    failureReason: number
    opportunityStatus: number
    hoursSinceFailure: number
    checkoutAbandoned: number
    lateAuthorization: number
    alreadyRecovered: number
    naturalRecoveryProbability: number
    recoveredNaturally: number
    aiEstimatedLift: number
    aiRecommendedAction: number
    selectedForIntervention: number
    diagnosis: number
    diagnosisReasoning: number
    diagnosisConfidence: number
    aiNaturalRecoveryProbability: number
    aiRecoveryWithInterventionProbability: number
    diagnosedAt: number
    incrementalLift: number
    expectedIncrementalRevenue: number
    selectionReason: number
    policyAllowed: number
    policyReason: number
    policyEscalate: number
    action: number
    recovered: number
    amountRecovered: number
    interventionUsed: number
    createdAt: number
    _all: number
  }


  export type OpportunityAvgAggregateInputType = {
    amount?: true
    previousSuccessCount?: true
    previousFailureCount?: true
    daysSinceLastSuccess?: true
    attemptCount?: true
    hoursSinceFailure?: true
    naturalRecoveryProbability?: true
    aiEstimatedLift?: true
    diagnosisConfidence?: true
    aiNaturalRecoveryProbability?: true
    aiRecoveryWithInterventionProbability?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
    amountRecovered?: true
  }

  export type OpportunitySumAggregateInputType = {
    amount?: true
    previousSuccessCount?: true
    previousFailureCount?: true
    daysSinceLastSuccess?: true
    attemptCount?: true
    hoursSinceFailure?: true
    naturalRecoveryProbability?: true
    aiEstimatedLift?: true
    diagnosisConfidence?: true
    aiNaturalRecoveryProbability?: true
    aiRecoveryWithInterventionProbability?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
    amountRecovered?: true
  }

  export type OpportunityMinAggregateInputType = {
    id?: true
    paymentId?: true
    customerId?: true
    amount?: true
    currency?: true
    customerSegment?: true
    previousSuccessCount?: true
    previousFailureCount?: true
    daysSinceLastSuccess?: true
    attemptCount?: true
    failureReason?: true
    opportunityStatus?: true
    hoursSinceFailure?: true
    checkoutAbandoned?: true
    lateAuthorization?: true
    alreadyRecovered?: true
    naturalRecoveryProbability?: true
    recoveredNaturally?: true
    aiEstimatedLift?: true
    aiRecommendedAction?: true
    selectedForIntervention?: true
    diagnosis?: true
    diagnosisReasoning?: true
    diagnosisConfidence?: true
    aiNaturalRecoveryProbability?: true
    aiRecoveryWithInterventionProbability?: true
    diagnosedAt?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
    selectionReason?: true
    policyAllowed?: true
    policyReason?: true
    policyEscalate?: true
    action?: true
    recovered?: true
    amountRecovered?: true
    interventionUsed?: true
    createdAt?: true
  }

  export type OpportunityMaxAggregateInputType = {
    id?: true
    paymentId?: true
    customerId?: true
    amount?: true
    currency?: true
    customerSegment?: true
    previousSuccessCount?: true
    previousFailureCount?: true
    daysSinceLastSuccess?: true
    attemptCount?: true
    failureReason?: true
    opportunityStatus?: true
    hoursSinceFailure?: true
    checkoutAbandoned?: true
    lateAuthorization?: true
    alreadyRecovered?: true
    naturalRecoveryProbability?: true
    recoveredNaturally?: true
    aiEstimatedLift?: true
    aiRecommendedAction?: true
    selectedForIntervention?: true
    diagnosis?: true
    diagnosisReasoning?: true
    diagnosisConfidence?: true
    aiNaturalRecoveryProbability?: true
    aiRecoveryWithInterventionProbability?: true
    diagnosedAt?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
    selectionReason?: true
    policyAllowed?: true
    policyReason?: true
    policyEscalate?: true
    action?: true
    recovered?: true
    amountRecovered?: true
    interventionUsed?: true
    createdAt?: true
  }

  export type OpportunityCountAggregateInputType = {
    id?: true
    paymentId?: true
    customerId?: true
    amount?: true
    currency?: true
    customerSegment?: true
    previousSuccessCount?: true
    previousFailureCount?: true
    daysSinceLastSuccess?: true
    attemptCount?: true
    failureReason?: true
    opportunityStatus?: true
    hoursSinceFailure?: true
    checkoutAbandoned?: true
    lateAuthorization?: true
    alreadyRecovered?: true
    naturalRecoveryProbability?: true
    recoveredNaturally?: true
    aiEstimatedLift?: true
    aiRecommendedAction?: true
    selectedForIntervention?: true
    diagnosis?: true
    diagnosisReasoning?: true
    diagnosisConfidence?: true
    aiNaturalRecoveryProbability?: true
    aiRecoveryWithInterventionProbability?: true
    diagnosedAt?: true
    incrementalLift?: true
    expectedIncrementalRevenue?: true
    selectionReason?: true
    policyAllowed?: true
    policyReason?: true
    policyEscalate?: true
    action?: true
    recovered?: true
    amountRecovered?: true
    interventionUsed?: true
    createdAt?: true
    _all?: true
  }

  export type OpportunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunity to aggregate.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opportunities
    **/
    _count?: true | OpportunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpportunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpportunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpportunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpportunityMaxAggregateInputType
  }

  export type GetOpportunityAggregateType<T extends OpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateOpportunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpportunity[P]>
      : GetScalarType<T[P], AggregateOpportunity[P]>
  }




  export type OpportunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput
    orderBy?: OpportunityOrderByWithAggregationInput | OpportunityOrderByWithAggregationInput[]
    by: OpportunityScalarFieldEnum[] | OpportunityScalarFieldEnum
    having?: OpportunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpportunityCountAggregateInputType | true
    _avg?: OpportunityAvgAggregateInputType
    _sum?: OpportunitySumAggregateInputType
    _min?: OpportunityMinAggregateInputType
    _max?: OpportunityMaxAggregateInputType
  }

  export type OpportunityGroupByOutputType = {
    id: string
    paymentId: string
    customerId: string
    amount: number
    currency: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift: number | null
    aiRecommendedAction: string | null
    selectedForIntervention: boolean
    diagnosis: string | null
    diagnosisReasoning: string | null
    diagnosisConfidence: number | null
    aiNaturalRecoveryProbability: number | null
    aiRecoveryWithInterventionProbability: number | null
    diagnosedAt: Date | null
    incrementalLift: number | null
    expectedIncrementalRevenue: Decimal | null
    selectionReason: string | null
    policyAllowed: boolean | null
    policyReason: string | null
    policyEscalate: boolean
    action: string | null
    recovered: boolean | null
    amountRecovered: number | null
    interventionUsed: boolean
    createdAt: Date
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  type GetOpportunityGroupByPayload<T extends OpportunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpportunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpportunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
            : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
        }
      >
    >


  export type OpportunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    customerId?: boolean
    amount?: boolean
    currency?: boolean
    customerSegment?: boolean
    previousSuccessCount?: boolean
    previousFailureCount?: boolean
    daysSinceLastSuccess?: boolean
    attemptCount?: boolean
    failureReason?: boolean
    opportunityStatus?: boolean
    hoursSinceFailure?: boolean
    checkoutAbandoned?: boolean
    lateAuthorization?: boolean
    alreadyRecovered?: boolean
    naturalRecoveryProbability?: boolean
    recoveredNaturally?: boolean
    aiEstimatedLift?: boolean
    aiRecommendedAction?: boolean
    selectedForIntervention?: boolean
    diagnosis?: boolean
    diagnosisReasoning?: boolean
    diagnosisConfidence?: boolean
    aiNaturalRecoveryProbability?: boolean
    aiRecoveryWithInterventionProbability?: boolean
    diagnosedAt?: boolean
    incrementalLift?: boolean
    expectedIncrementalRevenue?: boolean
    selectionReason?: boolean
    policyAllowed?: boolean
    policyReason?: boolean
    policyEscalate?: boolean
    action?: boolean
    recovered?: boolean
    amountRecovered?: boolean
    interventionUsed?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    customerId?: boolean
    amount?: boolean
    currency?: boolean
    customerSegment?: boolean
    previousSuccessCount?: boolean
    previousFailureCount?: boolean
    daysSinceLastSuccess?: boolean
    attemptCount?: boolean
    failureReason?: boolean
    opportunityStatus?: boolean
    hoursSinceFailure?: boolean
    checkoutAbandoned?: boolean
    lateAuthorization?: boolean
    alreadyRecovered?: boolean
    naturalRecoveryProbability?: boolean
    recoveredNaturally?: boolean
    aiEstimatedLift?: boolean
    aiRecommendedAction?: boolean
    selectedForIntervention?: boolean
    diagnosis?: boolean
    diagnosisReasoning?: boolean
    diagnosisConfidence?: boolean
    aiNaturalRecoveryProbability?: boolean
    aiRecoveryWithInterventionProbability?: boolean
    diagnosedAt?: boolean
    incrementalLift?: boolean
    expectedIncrementalRevenue?: boolean
    selectionReason?: boolean
    policyAllowed?: boolean
    policyReason?: boolean
    policyEscalate?: boolean
    action?: boolean
    recovered?: boolean
    amountRecovered?: boolean
    interventionUsed?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    customerId?: boolean
    amount?: boolean
    currency?: boolean
    customerSegment?: boolean
    previousSuccessCount?: boolean
    previousFailureCount?: boolean
    daysSinceLastSuccess?: boolean
    attemptCount?: boolean
    failureReason?: boolean
    opportunityStatus?: boolean
    hoursSinceFailure?: boolean
    checkoutAbandoned?: boolean
    lateAuthorization?: boolean
    alreadyRecovered?: boolean
    naturalRecoveryProbability?: boolean
    recoveredNaturally?: boolean
    aiEstimatedLift?: boolean
    aiRecommendedAction?: boolean
    selectedForIntervention?: boolean
    diagnosis?: boolean
    diagnosisReasoning?: boolean
    diagnosisConfidence?: boolean
    aiNaturalRecoveryProbability?: boolean
    aiRecoveryWithInterventionProbability?: boolean
    diagnosedAt?: boolean
    incrementalLift?: boolean
    expectedIncrementalRevenue?: boolean
    selectionReason?: boolean
    policyAllowed?: boolean
    policyReason?: boolean
    policyEscalate?: boolean
    action?: boolean
    recovered?: boolean
    amountRecovered?: boolean
    interventionUsed?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectScalar = {
    id?: boolean
    paymentId?: boolean
    customerId?: boolean
    amount?: boolean
    currency?: boolean
    customerSegment?: boolean
    previousSuccessCount?: boolean
    previousFailureCount?: boolean
    daysSinceLastSuccess?: boolean
    attemptCount?: boolean
    failureReason?: boolean
    opportunityStatus?: boolean
    hoursSinceFailure?: boolean
    checkoutAbandoned?: boolean
    lateAuthorization?: boolean
    alreadyRecovered?: boolean
    naturalRecoveryProbability?: boolean
    recoveredNaturally?: boolean
    aiEstimatedLift?: boolean
    aiRecommendedAction?: boolean
    selectedForIntervention?: boolean
    diagnosis?: boolean
    diagnosisReasoning?: boolean
    diagnosisConfidence?: boolean
    aiNaturalRecoveryProbability?: boolean
    aiRecoveryWithInterventionProbability?: boolean
    diagnosedAt?: boolean
    incrementalLift?: boolean
    expectedIncrementalRevenue?: boolean
    selectionReason?: boolean
    policyAllowed?: boolean
    policyReason?: boolean
    policyEscalate?: boolean
    action?: boolean
    recovered?: boolean
    amountRecovered?: boolean
    interventionUsed?: boolean
    createdAt?: boolean
  }

  export type OpportunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "customerId" | "amount" | "currency" | "customerSegment" | "previousSuccessCount" | "previousFailureCount" | "daysSinceLastSuccess" | "attemptCount" | "failureReason" | "opportunityStatus" | "hoursSinceFailure" | "checkoutAbandoned" | "lateAuthorization" | "alreadyRecovered" | "naturalRecoveryProbability" | "recoveredNaturally" | "aiEstimatedLift" | "aiRecommendedAction" | "selectedForIntervention" | "diagnosis" | "diagnosisReasoning" | "diagnosisConfidence" | "aiNaturalRecoveryProbability" | "aiRecoveryWithInterventionProbability" | "diagnosedAt" | "incrementalLift" | "expectedIncrementalRevenue" | "selectionReason" | "policyAllowed" | "policyReason" | "policyEscalate" | "action" | "recovered" | "amountRecovered" | "interventionUsed" | "createdAt", ExtArgs["result"]["opportunity"]>
  export type OpportunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type OpportunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type OpportunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $OpportunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opportunity"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      customerId: string
      amount: number
      currency: string
      customerSegment: string
      previousSuccessCount: number
      previousFailureCount: number
      daysSinceLastSuccess: number | null
      attemptCount: number
      failureReason: string
      opportunityStatus: string
      hoursSinceFailure: number
      checkoutAbandoned: boolean
      lateAuthorization: boolean
      alreadyRecovered: boolean
      naturalRecoveryProbability: number
      recoveredNaturally: boolean
      aiEstimatedLift: number | null
      aiRecommendedAction: string | null
      selectedForIntervention: boolean
      diagnosis: string | null
      diagnosisReasoning: string | null
      diagnosisConfidence: number | null
      aiNaturalRecoveryProbability: number | null
      aiRecoveryWithInterventionProbability: number | null
      diagnosedAt: Date | null
      incrementalLift: number | null
      expectedIncrementalRevenue: Prisma.Decimal | null
      selectionReason: string | null
      policyAllowed: boolean | null
      policyReason: string | null
      policyEscalate: boolean
      action: string | null
      recovered: boolean | null
      amountRecovered: number | null
      interventionUsed: boolean
      createdAt: Date
    }, ExtArgs["result"]["opportunity"]>
    composites: {}
  }

  type OpportunityGetPayload<S extends boolean | null | undefined | OpportunityDefaultArgs> = $Result.GetResult<Prisma.$OpportunityPayload, S>

  type OpportunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpportunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpportunityCountAggregateInputType | true
    }

  export interface OpportunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opportunity'], meta: { name: 'Opportunity' } }
    /**
     * Find zero or one Opportunity that matches the filter.
     * @param {OpportunityFindUniqueArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpportunityFindUniqueArgs>(args: SelectSubset<T, OpportunityFindUniqueArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opportunity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpportunityFindUniqueOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpportunityFindUniqueOrThrowArgs>(args: SelectSubset<T, OpportunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpportunityFindFirstArgs>(args?: SelectSubset<T, OpportunityFindFirstArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpportunityFindFirstOrThrowArgs>(args?: SelectSubset<T, OpportunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opportunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opportunities
     * const opportunities = await prisma.opportunity.findMany()
     * 
     * // Get first 10 Opportunities
     * const opportunities = await prisma.opportunity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpportunityFindManyArgs>(args?: SelectSubset<T, OpportunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opportunity.
     * @param {OpportunityCreateArgs} args - Arguments to create a Opportunity.
     * @example
     * // Create one Opportunity
     * const Opportunity = await prisma.opportunity.create({
     *   data: {
     *     // ... data to create a Opportunity
     *   }
     * })
     * 
     */
    create<T extends OpportunityCreateArgs>(args: SelectSubset<T, OpportunityCreateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opportunities.
     * @param {OpportunityCreateManyArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpportunityCreateManyArgs>(args?: SelectSubset<T, OpportunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opportunities and returns the data saved in the database.
     * @param {OpportunityCreateManyAndReturnArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpportunityCreateManyAndReturnArgs>(args?: SelectSubset<T, OpportunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opportunity.
     * @param {OpportunityDeleteArgs} args - Arguments to delete one Opportunity.
     * @example
     * // Delete one Opportunity
     * const Opportunity = await prisma.opportunity.delete({
     *   where: {
     *     // ... filter to delete one Opportunity
     *   }
     * })
     * 
     */
    delete<T extends OpportunityDeleteArgs>(args: SelectSubset<T, OpportunityDeleteArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opportunity.
     * @param {OpportunityUpdateArgs} args - Arguments to update one Opportunity.
     * @example
     * // Update one Opportunity
     * const opportunity = await prisma.opportunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpportunityUpdateArgs>(args: SelectSubset<T, OpportunityUpdateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opportunities.
     * @param {OpportunityDeleteManyArgs} args - Arguments to filter Opportunities to delete.
     * @example
     * // Delete a few Opportunities
     * const { count } = await prisma.opportunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpportunityDeleteManyArgs>(args?: SelectSubset<T, OpportunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpportunityUpdateManyArgs>(args: SelectSubset<T, OpportunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities and returns the data updated in the database.
     * @param {OpportunityUpdateManyAndReturnArgs} args - Arguments to update many Opportunities.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpportunityUpdateManyAndReturnArgs>(args: SelectSubset<T, OpportunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opportunity.
     * @param {OpportunityUpsertArgs} args - Arguments to update or create a Opportunity.
     * @example
     * // Update or create a Opportunity
     * const opportunity = await prisma.opportunity.upsert({
     *   create: {
     *     // ... data to create a Opportunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opportunity we want to update
     *   }
     * })
     */
    upsert<T extends OpportunityUpsertArgs>(args: SelectSubset<T, OpportunityUpsertArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityCountArgs} args - Arguments to filter Opportunities to count.
     * @example
     * // Count the number of Opportunities
     * const count = await prisma.opportunity.count({
     *   where: {
     *     // ... the filter for the Opportunities we want to count
     *   }
     * })
    **/
    count<T extends OpportunityCountArgs>(
      args?: Subset<T, OpportunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpportunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpportunityAggregateArgs>(args: Subset<T, OpportunityAggregateArgs>): Prisma.PrismaPromise<GetOpportunityAggregateType<T>>

    /**
     * Group by Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityGroupByArgs} args - Group by arguments.
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
      T extends OpportunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpportunityGroupByArgs['orderBy'] }
        : { orderBy?: OpportunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpportunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpportunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opportunity model
   */
  readonly fields: OpportunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opportunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpportunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Opportunity model
   */
  interface OpportunityFieldRefs {
    readonly id: FieldRef<"Opportunity", 'String'>
    readonly paymentId: FieldRef<"Opportunity", 'String'>
    readonly customerId: FieldRef<"Opportunity", 'String'>
    readonly amount: FieldRef<"Opportunity", 'Float'>
    readonly currency: FieldRef<"Opportunity", 'String'>
    readonly customerSegment: FieldRef<"Opportunity", 'String'>
    readonly previousSuccessCount: FieldRef<"Opportunity", 'Int'>
    readonly previousFailureCount: FieldRef<"Opportunity", 'Int'>
    readonly daysSinceLastSuccess: FieldRef<"Opportunity", 'Int'>
    readonly attemptCount: FieldRef<"Opportunity", 'Int'>
    readonly failureReason: FieldRef<"Opportunity", 'String'>
    readonly opportunityStatus: FieldRef<"Opportunity", 'String'>
    readonly hoursSinceFailure: FieldRef<"Opportunity", 'Float'>
    readonly checkoutAbandoned: FieldRef<"Opportunity", 'Boolean'>
    readonly lateAuthorization: FieldRef<"Opportunity", 'Boolean'>
    readonly alreadyRecovered: FieldRef<"Opportunity", 'Boolean'>
    readonly naturalRecoveryProbability: FieldRef<"Opportunity", 'Float'>
    readonly recoveredNaturally: FieldRef<"Opportunity", 'Boolean'>
    readonly aiEstimatedLift: FieldRef<"Opportunity", 'Float'>
    readonly aiRecommendedAction: FieldRef<"Opportunity", 'String'>
    readonly selectedForIntervention: FieldRef<"Opportunity", 'Boolean'>
    readonly diagnosis: FieldRef<"Opportunity", 'String'>
    readonly diagnosisReasoning: FieldRef<"Opportunity", 'String'>
    readonly diagnosisConfidence: FieldRef<"Opportunity", 'Float'>
    readonly aiNaturalRecoveryProbability: FieldRef<"Opportunity", 'Float'>
    readonly aiRecoveryWithInterventionProbability: FieldRef<"Opportunity", 'Float'>
    readonly diagnosedAt: FieldRef<"Opportunity", 'DateTime'>
    readonly incrementalLift: FieldRef<"Opportunity", 'Float'>
    readonly expectedIncrementalRevenue: FieldRef<"Opportunity", 'Decimal'>
    readonly selectionReason: FieldRef<"Opportunity", 'String'>
    readonly policyAllowed: FieldRef<"Opportunity", 'Boolean'>
    readonly policyReason: FieldRef<"Opportunity", 'String'>
    readonly policyEscalate: FieldRef<"Opportunity", 'Boolean'>
    readonly action: FieldRef<"Opportunity", 'String'>
    readonly recovered: FieldRef<"Opportunity", 'Boolean'>
    readonly amountRecovered: FieldRef<"Opportunity", 'Float'>
    readonly interventionUsed: FieldRef<"Opportunity", 'Boolean'>
    readonly createdAt: FieldRef<"Opportunity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Opportunity findUnique
   */
  export type OpportunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findUniqueOrThrow
   */
  export type OpportunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findFirst
   */
  export type OpportunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity findFirstOrThrow
   */
  export type OpportunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity findMany
   */
  export type OpportunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunities to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity create
   */
  export type OpportunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Opportunity.
     */
    data: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
  }

  /**
   * Opportunity createMany
   */
  export type OpportunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opportunity createManyAndReturn
   */
  export type OpportunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opportunity update
   */
  export type OpportunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Opportunity.
     */
    data: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
    /**
     * Choose, which Opportunity to update.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity updateMany
   */
  export type OpportunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number
  }

  /**
   * Opportunity updateManyAndReturn
   */
  export type OpportunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opportunity upsert
   */
  export type OpportunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Opportunity to update in case it exists.
     */
    where: OpportunityWhereUniqueInput
    /**
     * In case the Opportunity found by the `where` argument doesn't exist, create a new Opportunity with this data.
     */
    create: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
    /**
     * In case the Opportunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
  }

  /**
   * Opportunity delete
   */
  export type OpportunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter which Opportunity to delete.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity deleteMany
   */
  export type OpportunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunities to delete
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to delete.
     */
    limit?: number
  }

  /**
   * Opportunity without action
   */
  export type OpportunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    customerId: 'customerId',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PaymentEventScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    paymentId: 'paymentId',
    eventType: 'eventType',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type PaymentEventScalarFieldEnum = (typeof PaymentEventScalarFieldEnum)[keyof typeof PaymentEventScalarFieldEnum]


  export const RecoveryCaseScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    diagnosis: 'diagnosis',
    confidence: 'confidence',
    naturalRecoveryProbability: 'naturalRecoveryProbability',
    interventionRecoveryProbability: 'interventionRecoveryProbability',
    incrementalLift: 'incrementalLift',
    expectedIncrementalRevenue: 'expectedIncrementalRevenue',
    recommendedAction: 'recommendedAction',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customerId: 'customerId'
  };

  export type RecoveryCaseScalarFieldEnum = (typeof RecoveryCaseScalarFieldEnum)[keyof typeof RecoveryCaseScalarFieldEnum]


  export const RecoveryActionScalarFieldEnum: {
    id: 'id',
    recoveryCaseId: 'recoveryCaseId',
    actionType: 'actionType',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type RecoveryActionScalarFieldEnum = (typeof RecoveryActionScalarFieldEnum)[keyof typeof RecoveryActionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt',
    recoveryCaseId: 'recoveryCaseId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rules: 'rules',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const OpportunityScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    customerId: 'customerId',
    amount: 'amount',
    currency: 'currency',
    customerSegment: 'customerSegment',
    previousSuccessCount: 'previousSuccessCount',
    previousFailureCount: 'previousFailureCount',
    daysSinceLastSuccess: 'daysSinceLastSuccess',
    attemptCount: 'attemptCount',
    failureReason: 'failureReason',
    opportunityStatus: 'opportunityStatus',
    hoursSinceFailure: 'hoursSinceFailure',
    checkoutAbandoned: 'checkoutAbandoned',
    lateAuthorization: 'lateAuthorization',
    alreadyRecovered: 'alreadyRecovered',
    naturalRecoveryProbability: 'naturalRecoveryProbability',
    recoveredNaturally: 'recoveredNaturally',
    aiEstimatedLift: 'aiEstimatedLift',
    aiRecommendedAction: 'aiRecommendedAction',
    selectedForIntervention: 'selectedForIntervention',
    diagnosis: 'diagnosis',
    diagnosisReasoning: 'diagnosisReasoning',
    diagnosisConfidence: 'diagnosisConfidence',
    aiNaturalRecoveryProbability: 'aiNaturalRecoveryProbability',
    aiRecoveryWithInterventionProbability: 'aiRecoveryWithInterventionProbability',
    diagnosedAt: 'diagnosedAt',
    incrementalLift: 'incrementalLift',
    expectedIncrementalRevenue: 'expectedIncrementalRevenue',
    selectionReason: 'selectionReason',
    policyAllowed: 'policyAllowed',
    policyReason: 'policyReason',
    policyEscalate: 'policyEscalate',
    action: 'action',
    recovered: 'recovered',
    amountRecovered: 'amountRecovered',
    interventionUsed: 'interventionUsed',
    createdAt: 'createdAt'
  };

  export type OpportunityScalarFieldEnum = (typeof OpportunityScalarFieldEnum)[keyof typeof OpportunityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'RecoveryActionType'
   */
  export type EnumRecoveryActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecoveryActionType'>
    


  /**
   * Reference to a field of type 'RecoveryActionType[]'
   */
  export type ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecoveryActionType[]'>
    


  /**
   * Reference to a field of type 'RecoveryCaseStatus'
   */
  export type EnumRecoveryCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecoveryCaseStatus'>
    


  /**
   * Reference to a field of type 'RecoveryCaseStatus[]'
   */
  export type ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecoveryCaseStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    name?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    payments?: PaymentListRelationFilter
    recoveryCases?: RecoveryCaseListRelationFilter
    opportunities?: OpportunityListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    recoveryCases?: RecoveryCaseOrderByRelationAggregateInput
    opportunities?: OpportunityOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    payments?: PaymentListRelationFilter
    recoveryCases?: RecoveryCaseListRelationFilter
    opportunities?: OpportunityListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    customerId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    events?: PaymentEventListRelationFilter
    recoveryCases?: RecoveryCaseListRelationFilter
    opportunity?: XOR<OpportunityNullableScalarRelationFilter, OpportunityWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    events?: PaymentEventOrderByRelationAggregateInput
    recoveryCases?: RecoveryCaseOrderByRelationAggregateInput
    opportunity?: OpportunityOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    customerId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    events?: PaymentEventListRelationFilter
    recoveryCases?: RecoveryCaseListRelationFilter
    opportunity?: XOR<OpportunityNullableScalarRelationFilter, OpportunityWhereInput> | null
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    customerId?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type PaymentEventWhereInput = {
    AND?: PaymentEventWhereInput | PaymentEventWhereInput[]
    OR?: PaymentEventWhereInput[]
    NOT?: PaymentEventWhereInput | PaymentEventWhereInput[]
    id?: StringFilter<"PaymentEvent"> | string
    eventId?: StringFilter<"PaymentEvent"> | string
    paymentId?: StringFilter<"PaymentEvent"> | string
    eventType?: StringFilter<"PaymentEvent"> | string
    metadata?: JsonNullableFilter<"PaymentEvent">
    createdAt?: DateTimeFilter<"PaymentEvent"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type PaymentEventOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    paymentId?: SortOrder
    eventType?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type PaymentEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: PaymentEventWhereInput | PaymentEventWhereInput[]
    OR?: PaymentEventWhereInput[]
    NOT?: PaymentEventWhereInput | PaymentEventWhereInput[]
    paymentId?: StringFilter<"PaymentEvent"> | string
    eventType?: StringFilter<"PaymentEvent"> | string
    metadata?: JsonNullableFilter<"PaymentEvent">
    createdAt?: DateTimeFilter<"PaymentEvent"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id" | "eventId">

  export type PaymentEventOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    paymentId?: SortOrder
    eventType?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentEventCountOrderByAggregateInput
    _max?: PaymentEventMaxOrderByAggregateInput
    _min?: PaymentEventMinOrderByAggregateInput
  }

  export type PaymentEventScalarWhereWithAggregatesInput = {
    AND?: PaymentEventScalarWhereWithAggregatesInput | PaymentEventScalarWhereWithAggregatesInput[]
    OR?: PaymentEventScalarWhereWithAggregatesInput[]
    NOT?: PaymentEventScalarWhereWithAggregatesInput | PaymentEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentEvent"> | string
    eventId?: StringWithAggregatesFilter<"PaymentEvent"> | string
    paymentId?: StringWithAggregatesFilter<"PaymentEvent"> | string
    eventType?: StringWithAggregatesFilter<"PaymentEvent"> | string
    metadata?: JsonNullableWithAggregatesFilter<"PaymentEvent">
    createdAt?: DateTimeWithAggregatesFilter<"PaymentEvent"> | Date | string
  }

  export type RecoveryCaseWhereInput = {
    AND?: RecoveryCaseWhereInput | RecoveryCaseWhereInput[]
    OR?: RecoveryCaseWhereInput[]
    NOT?: RecoveryCaseWhereInput | RecoveryCaseWhereInput[]
    id?: StringFilter<"RecoveryCase"> | string
    paymentId?: StringFilter<"RecoveryCase"> | string
    diagnosis?: StringNullableFilter<"RecoveryCase"> | string | null
    confidence?: FloatNullableFilter<"RecoveryCase"> | number | null
    naturalRecoveryProbability?: FloatNullableFilter<"RecoveryCase"> | number | null
    interventionRecoveryProbability?: FloatNullableFilter<"RecoveryCase"> | number | null
    incrementalLift?: FloatNullableFilter<"RecoveryCase"> | number | null
    expectedIncrementalRevenue?: DecimalNullableFilter<"RecoveryCase"> | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: EnumRecoveryActionTypeNullableFilter<"RecoveryCase"> | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFilter<"RecoveryCase"> | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFilter<"RecoveryCase"> | Date | string
    updatedAt?: DateTimeFilter<"RecoveryCase"> | Date | string
    customerId?: StringNullableFilter<"RecoveryCase"> | string | null
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    actions?: RecoveryActionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type RecoveryCaseOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    naturalRecoveryProbability?: SortOrderInput | SortOrder
    interventionRecoveryProbability?: SortOrderInput | SortOrder
    incrementalLift?: SortOrderInput | SortOrder
    expectedIncrementalRevenue?: SortOrderInput | SortOrder
    recommendedAction?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrderInput | SortOrder
    payment?: PaymentOrderByWithRelationInput
    actions?: RecoveryActionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type RecoveryCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecoveryCaseWhereInput | RecoveryCaseWhereInput[]
    OR?: RecoveryCaseWhereInput[]
    NOT?: RecoveryCaseWhereInput | RecoveryCaseWhereInput[]
    paymentId?: StringFilter<"RecoveryCase"> | string
    diagnosis?: StringNullableFilter<"RecoveryCase"> | string | null
    confidence?: FloatNullableFilter<"RecoveryCase"> | number | null
    naturalRecoveryProbability?: FloatNullableFilter<"RecoveryCase"> | number | null
    interventionRecoveryProbability?: FloatNullableFilter<"RecoveryCase"> | number | null
    incrementalLift?: FloatNullableFilter<"RecoveryCase"> | number | null
    expectedIncrementalRevenue?: DecimalNullableFilter<"RecoveryCase"> | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: EnumRecoveryActionTypeNullableFilter<"RecoveryCase"> | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFilter<"RecoveryCase"> | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFilter<"RecoveryCase"> | Date | string
    updatedAt?: DateTimeFilter<"RecoveryCase"> | Date | string
    customerId?: StringNullableFilter<"RecoveryCase"> | string | null
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    actions?: RecoveryActionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id">

  export type RecoveryCaseOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    naturalRecoveryProbability?: SortOrderInput | SortOrder
    interventionRecoveryProbability?: SortOrderInput | SortOrder
    incrementalLift?: SortOrderInput | SortOrder
    expectedIncrementalRevenue?: SortOrderInput | SortOrder
    recommendedAction?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrderInput | SortOrder
    _count?: RecoveryCaseCountOrderByAggregateInput
    _avg?: RecoveryCaseAvgOrderByAggregateInput
    _max?: RecoveryCaseMaxOrderByAggregateInput
    _min?: RecoveryCaseMinOrderByAggregateInput
    _sum?: RecoveryCaseSumOrderByAggregateInput
  }

  export type RecoveryCaseScalarWhereWithAggregatesInput = {
    AND?: RecoveryCaseScalarWhereWithAggregatesInput | RecoveryCaseScalarWhereWithAggregatesInput[]
    OR?: RecoveryCaseScalarWhereWithAggregatesInput[]
    NOT?: RecoveryCaseScalarWhereWithAggregatesInput | RecoveryCaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecoveryCase"> | string
    paymentId?: StringWithAggregatesFilter<"RecoveryCase"> | string
    diagnosis?: StringNullableWithAggregatesFilter<"RecoveryCase"> | string | null
    confidence?: FloatNullableWithAggregatesFilter<"RecoveryCase"> | number | null
    naturalRecoveryProbability?: FloatNullableWithAggregatesFilter<"RecoveryCase"> | number | null
    interventionRecoveryProbability?: FloatNullableWithAggregatesFilter<"RecoveryCase"> | number | null
    incrementalLift?: FloatNullableWithAggregatesFilter<"RecoveryCase"> | number | null
    expectedIncrementalRevenue?: DecimalNullableWithAggregatesFilter<"RecoveryCase"> | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: EnumRecoveryActionTypeNullableWithAggregatesFilter<"RecoveryCase"> | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusWithAggregatesFilter<"RecoveryCase"> | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeWithAggregatesFilter<"RecoveryCase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecoveryCase"> | Date | string
    customerId?: StringNullableWithAggregatesFilter<"RecoveryCase"> | string | null
  }

  export type RecoveryActionWhereInput = {
    AND?: RecoveryActionWhereInput | RecoveryActionWhereInput[]
    OR?: RecoveryActionWhereInput[]
    NOT?: RecoveryActionWhereInput | RecoveryActionWhereInput[]
    id?: StringFilter<"RecoveryAction"> | string
    recoveryCaseId?: StringFilter<"RecoveryAction"> | string
    actionType?: StringFilter<"RecoveryAction"> | string
    status?: StringFilter<"RecoveryAction"> | string
    createdAt?: DateTimeFilter<"RecoveryAction"> | Date | string
    recoveryCase?: XOR<RecoveryCaseScalarRelationFilter, RecoveryCaseWhereInput>
  }

  export type RecoveryActionOrderByWithRelationInput = {
    id?: SortOrder
    recoveryCaseId?: SortOrder
    actionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    recoveryCase?: RecoveryCaseOrderByWithRelationInput
  }

  export type RecoveryActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecoveryActionWhereInput | RecoveryActionWhereInput[]
    OR?: RecoveryActionWhereInput[]
    NOT?: RecoveryActionWhereInput | RecoveryActionWhereInput[]
    recoveryCaseId?: StringFilter<"RecoveryAction"> | string
    actionType?: StringFilter<"RecoveryAction"> | string
    status?: StringFilter<"RecoveryAction"> | string
    createdAt?: DateTimeFilter<"RecoveryAction"> | Date | string
    recoveryCase?: XOR<RecoveryCaseScalarRelationFilter, RecoveryCaseWhereInput>
  }, "id">

  export type RecoveryActionOrderByWithAggregationInput = {
    id?: SortOrder
    recoveryCaseId?: SortOrder
    actionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: RecoveryActionCountOrderByAggregateInput
    _max?: RecoveryActionMaxOrderByAggregateInput
    _min?: RecoveryActionMinOrderByAggregateInput
  }

  export type RecoveryActionScalarWhereWithAggregatesInput = {
    AND?: RecoveryActionScalarWhereWithAggregatesInput | RecoveryActionScalarWhereWithAggregatesInput[]
    OR?: RecoveryActionScalarWhereWithAggregatesInput[]
    NOT?: RecoveryActionScalarWhereWithAggregatesInput | RecoveryActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecoveryAction"> | string
    recoveryCaseId?: StringWithAggregatesFilter<"RecoveryAction"> | string
    actionType?: StringWithAggregatesFilter<"RecoveryAction"> | string
    status?: StringWithAggregatesFilter<"RecoveryAction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RecoveryAction"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    recoveryCaseId?: StringNullableFilter<"AuditLog"> | string | null
    recoveryCase?: XOR<RecoveryCaseNullableScalarRelationFilter, RecoveryCaseWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    recoveryCaseId?: SortOrderInput | SortOrder
    recoveryCase?: RecoveryCaseOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    recoveryCaseId?: StringNullableFilter<"AuditLog"> | string | null
    recoveryCase?: XOR<RecoveryCaseNullableScalarRelationFilter, RecoveryCaseWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    recoveryCaseId?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    recoveryCaseId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: StringFilter<"Policy"> | string
    name?: StringFilter<"Policy"> | string
    rules?: JsonFilter<"Policy">
    isActive?: BoolFilter<"Policy"> | boolean
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    name?: StringFilter<"Policy"> | string
    rules?: JsonFilter<"Policy">
    isActive?: BoolFilter<"Policy"> | boolean
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
  }, "id">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Policy"> | string
    name?: StringWithAggregatesFilter<"Policy"> | string
    rules?: JsonWithAggregatesFilter<"Policy">
    isActive?: BoolWithAggregatesFilter<"Policy"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
  }

  export type OpportunityWhereInput = {
    AND?: OpportunityWhereInput | OpportunityWhereInput[]
    OR?: OpportunityWhereInput[]
    NOT?: OpportunityWhereInput | OpportunityWhereInput[]
    id?: StringFilter<"Opportunity"> | string
    paymentId?: StringFilter<"Opportunity"> | string
    customerId?: StringFilter<"Opportunity"> | string
    amount?: FloatFilter<"Opportunity"> | number
    currency?: StringFilter<"Opportunity"> | string
    customerSegment?: StringFilter<"Opportunity"> | string
    previousSuccessCount?: IntFilter<"Opportunity"> | number
    previousFailureCount?: IntFilter<"Opportunity"> | number
    daysSinceLastSuccess?: IntNullableFilter<"Opportunity"> | number | null
    attemptCount?: IntFilter<"Opportunity"> | number
    failureReason?: StringFilter<"Opportunity"> | string
    opportunityStatus?: StringFilter<"Opportunity"> | string
    hoursSinceFailure?: FloatFilter<"Opportunity"> | number
    checkoutAbandoned?: BoolFilter<"Opportunity"> | boolean
    lateAuthorization?: BoolFilter<"Opportunity"> | boolean
    alreadyRecovered?: BoolFilter<"Opportunity"> | boolean
    naturalRecoveryProbability?: FloatFilter<"Opportunity"> | number
    recoveredNaturally?: BoolFilter<"Opportunity"> | boolean
    aiEstimatedLift?: FloatNullableFilter<"Opportunity"> | number | null
    aiRecommendedAction?: StringNullableFilter<"Opportunity"> | string | null
    selectedForIntervention?: BoolFilter<"Opportunity"> | boolean
    diagnosis?: StringNullableFilter<"Opportunity"> | string | null
    diagnosisReasoning?: StringNullableFilter<"Opportunity"> | string | null
    diagnosisConfidence?: FloatNullableFilter<"Opportunity"> | number | null
    aiNaturalRecoveryProbability?: FloatNullableFilter<"Opportunity"> | number | null
    aiRecoveryWithInterventionProbability?: FloatNullableFilter<"Opportunity"> | number | null
    diagnosedAt?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    incrementalLift?: FloatNullableFilter<"Opportunity"> | number | null
    expectedIncrementalRevenue?: DecimalNullableFilter<"Opportunity"> | Decimal | DecimalJsLike | number | string | null
    selectionReason?: StringNullableFilter<"Opportunity"> | string | null
    policyAllowed?: BoolNullableFilter<"Opportunity"> | boolean | null
    policyReason?: StringNullableFilter<"Opportunity"> | string | null
    policyEscalate?: BoolFilter<"Opportunity"> | boolean
    action?: StringNullableFilter<"Opportunity"> | string | null
    recovered?: BoolNullableFilter<"Opportunity"> | boolean | null
    amountRecovered?: FloatNullableFilter<"Opportunity"> | number | null
    interventionUsed?: BoolFilter<"Opportunity"> | boolean
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type OpportunityOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    customerSegment?: SortOrder
    previousSuccessCount?: SortOrder
    previousFailureCount?: SortOrder
    daysSinceLastSuccess?: SortOrderInput | SortOrder
    attemptCount?: SortOrder
    failureReason?: SortOrder
    opportunityStatus?: SortOrder
    hoursSinceFailure?: SortOrder
    checkoutAbandoned?: SortOrder
    lateAuthorization?: SortOrder
    alreadyRecovered?: SortOrder
    naturalRecoveryProbability?: SortOrder
    recoveredNaturally?: SortOrder
    aiEstimatedLift?: SortOrderInput | SortOrder
    aiRecommendedAction?: SortOrderInput | SortOrder
    selectedForIntervention?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    diagnosisReasoning?: SortOrderInput | SortOrder
    diagnosisConfidence?: SortOrderInput | SortOrder
    aiNaturalRecoveryProbability?: SortOrderInput | SortOrder
    aiRecoveryWithInterventionProbability?: SortOrderInput | SortOrder
    diagnosedAt?: SortOrderInput | SortOrder
    incrementalLift?: SortOrderInput | SortOrder
    expectedIncrementalRevenue?: SortOrderInput | SortOrder
    selectionReason?: SortOrderInput | SortOrder
    policyAllowed?: SortOrderInput | SortOrder
    policyReason?: SortOrderInput | SortOrder
    policyEscalate?: SortOrder
    action?: SortOrderInput | SortOrder
    recovered?: SortOrderInput | SortOrder
    amountRecovered?: SortOrderInput | SortOrder
    interventionUsed?: SortOrder
    createdAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type OpportunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentId?: string
    AND?: OpportunityWhereInput | OpportunityWhereInput[]
    OR?: OpportunityWhereInput[]
    NOT?: OpportunityWhereInput | OpportunityWhereInput[]
    customerId?: StringFilter<"Opportunity"> | string
    amount?: FloatFilter<"Opportunity"> | number
    currency?: StringFilter<"Opportunity"> | string
    customerSegment?: StringFilter<"Opportunity"> | string
    previousSuccessCount?: IntFilter<"Opportunity"> | number
    previousFailureCount?: IntFilter<"Opportunity"> | number
    daysSinceLastSuccess?: IntNullableFilter<"Opportunity"> | number | null
    attemptCount?: IntFilter<"Opportunity"> | number
    failureReason?: StringFilter<"Opportunity"> | string
    opportunityStatus?: StringFilter<"Opportunity"> | string
    hoursSinceFailure?: FloatFilter<"Opportunity"> | number
    checkoutAbandoned?: BoolFilter<"Opportunity"> | boolean
    lateAuthorization?: BoolFilter<"Opportunity"> | boolean
    alreadyRecovered?: BoolFilter<"Opportunity"> | boolean
    naturalRecoveryProbability?: FloatFilter<"Opportunity"> | number
    recoveredNaturally?: BoolFilter<"Opportunity"> | boolean
    aiEstimatedLift?: FloatNullableFilter<"Opportunity"> | number | null
    aiRecommendedAction?: StringNullableFilter<"Opportunity"> | string | null
    selectedForIntervention?: BoolFilter<"Opportunity"> | boolean
    diagnosis?: StringNullableFilter<"Opportunity"> | string | null
    diagnosisReasoning?: StringNullableFilter<"Opportunity"> | string | null
    diagnosisConfidence?: FloatNullableFilter<"Opportunity"> | number | null
    aiNaturalRecoveryProbability?: FloatNullableFilter<"Opportunity"> | number | null
    aiRecoveryWithInterventionProbability?: FloatNullableFilter<"Opportunity"> | number | null
    diagnosedAt?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    incrementalLift?: FloatNullableFilter<"Opportunity"> | number | null
    expectedIncrementalRevenue?: DecimalNullableFilter<"Opportunity"> | Decimal | DecimalJsLike | number | string | null
    selectionReason?: StringNullableFilter<"Opportunity"> | string | null
    policyAllowed?: BoolNullableFilter<"Opportunity"> | boolean | null
    policyReason?: StringNullableFilter<"Opportunity"> | string | null
    policyEscalate?: BoolFilter<"Opportunity"> | boolean
    action?: StringNullableFilter<"Opportunity"> | string | null
    recovered?: BoolNullableFilter<"Opportunity"> | boolean | null
    amountRecovered?: FloatNullableFilter<"Opportunity"> | number | null
    interventionUsed?: BoolFilter<"Opportunity"> | boolean
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "paymentId">

  export type OpportunityOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    customerSegment?: SortOrder
    previousSuccessCount?: SortOrder
    previousFailureCount?: SortOrder
    daysSinceLastSuccess?: SortOrderInput | SortOrder
    attemptCount?: SortOrder
    failureReason?: SortOrder
    opportunityStatus?: SortOrder
    hoursSinceFailure?: SortOrder
    checkoutAbandoned?: SortOrder
    lateAuthorization?: SortOrder
    alreadyRecovered?: SortOrder
    naturalRecoveryProbability?: SortOrder
    recoveredNaturally?: SortOrder
    aiEstimatedLift?: SortOrderInput | SortOrder
    aiRecommendedAction?: SortOrderInput | SortOrder
    selectedForIntervention?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    diagnosisReasoning?: SortOrderInput | SortOrder
    diagnosisConfidence?: SortOrderInput | SortOrder
    aiNaturalRecoveryProbability?: SortOrderInput | SortOrder
    aiRecoveryWithInterventionProbability?: SortOrderInput | SortOrder
    diagnosedAt?: SortOrderInput | SortOrder
    incrementalLift?: SortOrderInput | SortOrder
    expectedIncrementalRevenue?: SortOrderInput | SortOrder
    selectionReason?: SortOrderInput | SortOrder
    policyAllowed?: SortOrderInput | SortOrder
    policyReason?: SortOrderInput | SortOrder
    policyEscalate?: SortOrder
    action?: SortOrderInput | SortOrder
    recovered?: SortOrderInput | SortOrder
    amountRecovered?: SortOrderInput | SortOrder
    interventionUsed?: SortOrder
    createdAt?: SortOrder
    _count?: OpportunityCountOrderByAggregateInput
    _avg?: OpportunityAvgOrderByAggregateInput
    _max?: OpportunityMaxOrderByAggregateInput
    _min?: OpportunityMinOrderByAggregateInput
    _sum?: OpportunitySumOrderByAggregateInput
  }

  export type OpportunityScalarWhereWithAggregatesInput = {
    AND?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[]
    OR?: OpportunityScalarWhereWithAggregatesInput[]
    NOT?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Opportunity"> | string
    paymentId?: StringWithAggregatesFilter<"Opportunity"> | string
    customerId?: StringWithAggregatesFilter<"Opportunity"> | string
    amount?: FloatWithAggregatesFilter<"Opportunity"> | number
    currency?: StringWithAggregatesFilter<"Opportunity"> | string
    customerSegment?: StringWithAggregatesFilter<"Opportunity"> | string
    previousSuccessCount?: IntWithAggregatesFilter<"Opportunity"> | number
    previousFailureCount?: IntWithAggregatesFilter<"Opportunity"> | number
    daysSinceLastSuccess?: IntNullableWithAggregatesFilter<"Opportunity"> | number | null
    attemptCount?: IntWithAggregatesFilter<"Opportunity"> | number
    failureReason?: StringWithAggregatesFilter<"Opportunity"> | string
    opportunityStatus?: StringWithAggregatesFilter<"Opportunity"> | string
    hoursSinceFailure?: FloatWithAggregatesFilter<"Opportunity"> | number
    checkoutAbandoned?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    lateAuthorization?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    alreadyRecovered?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    naturalRecoveryProbability?: FloatWithAggregatesFilter<"Opportunity"> | number
    recoveredNaturally?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    aiEstimatedLift?: FloatNullableWithAggregatesFilter<"Opportunity"> | number | null
    aiRecommendedAction?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    selectedForIntervention?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    diagnosis?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    diagnosisReasoning?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    diagnosisConfidence?: FloatNullableWithAggregatesFilter<"Opportunity"> | number | null
    aiNaturalRecoveryProbability?: FloatNullableWithAggregatesFilter<"Opportunity"> | number | null
    aiRecoveryWithInterventionProbability?: FloatNullableWithAggregatesFilter<"Opportunity"> | number | null
    diagnosedAt?: DateTimeNullableWithAggregatesFilter<"Opportunity"> | Date | string | null
    incrementalLift?: FloatNullableWithAggregatesFilter<"Opportunity"> | number | null
    expectedIncrementalRevenue?: DecimalNullableWithAggregatesFilter<"Opportunity"> | Decimal | DecimalJsLike | number | string | null
    selectionReason?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    policyAllowed?: BoolNullableWithAggregatesFilter<"Opportunity"> | boolean | null
    policyReason?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    policyEscalate?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    action?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    recovered?: BoolNullableWithAggregatesFilter<"Opportunity"> | boolean | null
    amountRecovered?: FloatNullableWithAggregatesFilter<"Opportunity"> | number | null
    interventionUsed?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Opportunity"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutCustomerInput
    recoveryCases?: RecoveryCaseCreateNestedManyWithoutCustomerInput
    opportunities?: OpportunityCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    recoveryCases?: RecoveryCaseUncheckedCreateNestedManyWithoutCustomerInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
    recoveryCases?: RecoveryCaseUpdateManyWithoutCustomerNestedInput
    opportunities?: OpportunityUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    recoveryCases?: RecoveryCaseUncheckedUpdateManyWithoutCustomerNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
    events?: PaymentEventCreateNestedManyWithoutPaymentInput
    recoveryCases?: RecoveryCaseCreateNestedManyWithoutPaymentInput
    opportunity?: OpportunityCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    customerId: string
    createdAt?: Date | string
    events?: PaymentEventUncheckedCreateNestedManyWithoutPaymentInput
    recoveryCases?: RecoveryCaseUncheckedCreateNestedManyWithoutPaymentInput
    opportunity?: OpportunityUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
    events?: PaymentEventUpdateManyWithoutPaymentNestedInput
    recoveryCases?: RecoveryCaseUpdateManyWithoutPaymentNestedInput
    opportunity?: OpportunityUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: PaymentEventUncheckedUpdateManyWithoutPaymentNestedInput
    recoveryCases?: RecoveryCaseUncheckedUpdateManyWithoutPaymentNestedInput
    opportunity?: OpportunityUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    customerId: string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventCreateInput = {
    id?: string
    eventId: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    payment: PaymentCreateNestedOneWithoutEventsInput
  }

  export type PaymentEventUncheckedCreateInput = {
    id?: string
    eventId: string
    paymentId: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutEventsNestedInput
  }

  export type PaymentEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventCreateManyInput = {
    id?: string
    eventId: string
    paymentId: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCaseCreateInput = {
    id?: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutRecoveryCasesInput
    actions?: RecoveryActionCreateNestedManyWithoutRecoveryCaseInput
    auditLogs?: AuditLogCreateNestedManyWithoutRecoveryCaseInput
    customer?: CustomerCreateNestedOneWithoutRecoveryCasesInput
  }

  export type RecoveryCaseUncheckedCreateInput = {
    id?: string
    paymentId: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
    actions?: RecoveryActionUncheckedCreateNestedManyWithoutRecoveryCaseInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRecoveryCaseInput
  }

  export type RecoveryCaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutRecoveryCasesNestedInput
    actions?: RecoveryActionUpdateManyWithoutRecoveryCaseNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRecoveryCaseNestedInput
    customer?: CustomerUpdateOneWithoutRecoveryCasesNestedInput
  }

  export type RecoveryCaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: RecoveryActionUncheckedUpdateManyWithoutRecoveryCaseNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRecoveryCaseNestedInput
  }

  export type RecoveryCaseCreateManyInput = {
    id?: string
    paymentId: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type RecoveryCaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecoveryActionCreateInput = {
    id?: string
    actionType: string
    status: string
    createdAt?: Date | string
    recoveryCase: RecoveryCaseCreateNestedOneWithoutActionsInput
  }

  export type RecoveryActionUncheckedCreateInput = {
    id?: string
    recoveryCaseId: string
    actionType: string
    status: string
    createdAt?: Date | string
  }

  export type RecoveryActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryCase?: RecoveryCaseUpdateOneRequiredWithoutActionsNestedInput
  }

  export type RecoveryActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCaseId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryActionCreateManyInput = {
    id?: string
    recoveryCaseId: string
    actionType: string
    status: string
    createdAt?: Date | string
  }

  export type RecoveryActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recoveryCaseId?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    recoveryCase?: RecoveryCaseCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    recoveryCaseId?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryCase?: RecoveryCaseUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryCaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    recoveryCaseId?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryCaseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyCreateInput = {
    id?: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUncheckedCreateInput = {
    id?: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyCreateManyInput = {
    id?: string
    name: string
    rules: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityCreateInput = {
    id?: string
    amount: number
    currency?: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess?: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift?: number | null
    aiRecommendedAction?: string | null
    selectedForIntervention?: boolean
    diagnosis?: string | null
    diagnosisReasoning?: string | null
    diagnosisConfidence?: number | null
    aiNaturalRecoveryProbability?: number | null
    aiRecoveryWithInterventionProbability?: number | null
    diagnosedAt?: Date | string | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    selectionReason?: string | null
    policyAllowed?: boolean | null
    policyReason?: string | null
    policyEscalate?: boolean
    action?: string | null
    recovered?: boolean | null
    amountRecovered?: number | null
    interventionUsed?: boolean
    createdAt?: Date | string
    payment: PaymentCreateNestedOneWithoutOpportunityInput
    customer: CustomerCreateNestedOneWithoutOpportunitiesInput
  }

  export type OpportunityUncheckedCreateInput = {
    id?: string
    paymentId: string
    customerId: string
    amount: number
    currency?: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess?: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift?: number | null
    aiRecommendedAction?: string | null
    selectedForIntervention?: boolean
    diagnosis?: string | null
    diagnosisReasoning?: string | null
    diagnosisConfidence?: number | null
    aiNaturalRecoveryProbability?: number | null
    aiRecoveryWithInterventionProbability?: number | null
    diagnosedAt?: Date | string | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    selectionReason?: string | null
    policyAllowed?: boolean | null
    policyReason?: string | null
    policyEscalate?: boolean
    action?: string | null
    recovered?: boolean | null
    amountRecovered?: number | null
    interventionUsed?: boolean
    createdAt?: Date | string
  }

  export type OpportunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutOpportunityNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOpportunitiesNestedInput
  }

  export type OpportunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityCreateManyInput = {
    id?: string
    paymentId: string
    customerId: string
    amount: number
    currency?: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess?: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift?: number | null
    aiRecommendedAction?: string | null
    selectedForIntervention?: boolean
    diagnosis?: string | null
    diagnosisReasoning?: string | null
    diagnosisConfidence?: number | null
    aiNaturalRecoveryProbability?: number | null
    aiRecoveryWithInterventionProbability?: number | null
    diagnosedAt?: Date | string | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    selectionReason?: string | null
    policyAllowed?: boolean | null
    policyReason?: string | null
    policyEscalate?: boolean
    action?: string | null
    recovered?: boolean | null
    amountRecovered?: number | null
    interventionUsed?: boolean
    createdAt?: Date | string
  }

  export type OpportunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type RecoveryCaseListRelationFilter = {
    every?: RecoveryCaseWhereInput
    some?: RecoveryCaseWhereInput
    none?: RecoveryCaseWhereInput
  }

  export type OpportunityListRelationFilter = {
    every?: OpportunityWhereInput
    some?: OpportunityWhereInput
    none?: OpportunityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecoveryCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpportunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type PaymentEventListRelationFilter = {
    every?: PaymentEventWhereInput
    some?: PaymentEventWhereInput
    none?: PaymentEventWhereInput
  }

  export type OpportunityNullableScalarRelationFilter = {
    is?: OpportunityWhereInput | null
    isNot?: OpportunityWhereInput | null
  }

  export type PaymentEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type PaymentEventCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    paymentId?: SortOrder
    eventType?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentEventMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    paymentId?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentEventMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    paymentId?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumRecoveryActionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryActionType | EnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecoveryActionType[] | ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RecoveryActionType[] | ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRecoveryActionTypeNullableFilter<$PrismaModel> | $Enums.RecoveryActionType | null
  }

  export type EnumRecoveryCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryCaseStatus | EnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecoveryCaseStatus[] | ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecoveryCaseStatus[] | ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecoveryCaseStatusFilter<$PrismaModel> | $Enums.RecoveryCaseStatus
  }

  export type RecoveryActionListRelationFilter = {
    every?: RecoveryActionWhereInput
    some?: RecoveryActionWhereInput
    none?: RecoveryActionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type RecoveryActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecoveryCaseCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    diagnosis?: SortOrder
    confidence?: SortOrder
    naturalRecoveryProbability?: SortOrder
    interventionRecoveryProbability?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
    recommendedAction?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type RecoveryCaseAvgOrderByAggregateInput = {
    confidence?: SortOrder
    naturalRecoveryProbability?: SortOrder
    interventionRecoveryProbability?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
  }

  export type RecoveryCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    diagnosis?: SortOrder
    confidence?: SortOrder
    naturalRecoveryProbability?: SortOrder
    interventionRecoveryProbability?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
    recommendedAction?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type RecoveryCaseMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    diagnosis?: SortOrder
    confidence?: SortOrder
    naturalRecoveryProbability?: SortOrder
    interventionRecoveryProbability?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
    recommendedAction?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type RecoveryCaseSumOrderByAggregateInput = {
    confidence?: SortOrder
    naturalRecoveryProbability?: SortOrder
    interventionRecoveryProbability?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumRecoveryActionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryActionType | EnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecoveryActionType[] | ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RecoveryActionType[] | ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRecoveryActionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.RecoveryActionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRecoveryActionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumRecoveryActionTypeNullableFilter<$PrismaModel>
  }

  export type EnumRecoveryCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryCaseStatus | EnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecoveryCaseStatus[] | ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecoveryCaseStatus[] | ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecoveryCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecoveryCaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecoveryCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumRecoveryCaseStatusFilter<$PrismaModel>
  }

  export type RecoveryCaseScalarRelationFilter = {
    is?: RecoveryCaseWhereInput
    isNot?: RecoveryCaseWhereInput
  }

  export type RecoveryActionCountOrderByAggregateInput = {
    id?: SortOrder
    recoveryCaseId?: SortOrder
    actionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RecoveryActionMaxOrderByAggregateInput = {
    id?: SortOrder
    recoveryCaseId?: SortOrder
    actionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RecoveryActionMinOrderByAggregateInput = {
    id?: SortOrder
    recoveryCaseId?: SortOrder
    actionType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type RecoveryCaseNullableScalarRelationFilter = {
    is?: RecoveryCaseWhereInput | null
    isNot?: RecoveryCaseWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    recoveryCaseId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    recoveryCaseId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    recoveryCaseId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type OpportunityCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    customerSegment?: SortOrder
    previousSuccessCount?: SortOrder
    previousFailureCount?: SortOrder
    daysSinceLastSuccess?: SortOrder
    attemptCount?: SortOrder
    failureReason?: SortOrder
    opportunityStatus?: SortOrder
    hoursSinceFailure?: SortOrder
    checkoutAbandoned?: SortOrder
    lateAuthorization?: SortOrder
    alreadyRecovered?: SortOrder
    naturalRecoveryProbability?: SortOrder
    recoveredNaturally?: SortOrder
    aiEstimatedLift?: SortOrder
    aiRecommendedAction?: SortOrder
    selectedForIntervention?: SortOrder
    diagnosis?: SortOrder
    diagnosisReasoning?: SortOrder
    diagnosisConfidence?: SortOrder
    aiNaturalRecoveryProbability?: SortOrder
    aiRecoveryWithInterventionProbability?: SortOrder
    diagnosedAt?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
    selectionReason?: SortOrder
    policyAllowed?: SortOrder
    policyReason?: SortOrder
    policyEscalate?: SortOrder
    action?: SortOrder
    recovered?: SortOrder
    amountRecovered?: SortOrder
    interventionUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type OpportunityAvgOrderByAggregateInput = {
    amount?: SortOrder
    previousSuccessCount?: SortOrder
    previousFailureCount?: SortOrder
    daysSinceLastSuccess?: SortOrder
    attemptCount?: SortOrder
    hoursSinceFailure?: SortOrder
    naturalRecoveryProbability?: SortOrder
    aiEstimatedLift?: SortOrder
    diagnosisConfidence?: SortOrder
    aiNaturalRecoveryProbability?: SortOrder
    aiRecoveryWithInterventionProbability?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
    amountRecovered?: SortOrder
  }

  export type OpportunityMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    customerSegment?: SortOrder
    previousSuccessCount?: SortOrder
    previousFailureCount?: SortOrder
    daysSinceLastSuccess?: SortOrder
    attemptCount?: SortOrder
    failureReason?: SortOrder
    opportunityStatus?: SortOrder
    hoursSinceFailure?: SortOrder
    checkoutAbandoned?: SortOrder
    lateAuthorization?: SortOrder
    alreadyRecovered?: SortOrder
    naturalRecoveryProbability?: SortOrder
    recoveredNaturally?: SortOrder
    aiEstimatedLift?: SortOrder
    aiRecommendedAction?: SortOrder
    selectedForIntervention?: SortOrder
    diagnosis?: SortOrder
    diagnosisReasoning?: SortOrder
    diagnosisConfidence?: SortOrder
    aiNaturalRecoveryProbability?: SortOrder
    aiRecoveryWithInterventionProbability?: SortOrder
    diagnosedAt?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
    selectionReason?: SortOrder
    policyAllowed?: SortOrder
    policyReason?: SortOrder
    policyEscalate?: SortOrder
    action?: SortOrder
    recovered?: SortOrder
    amountRecovered?: SortOrder
    interventionUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type OpportunityMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    customerSegment?: SortOrder
    previousSuccessCount?: SortOrder
    previousFailureCount?: SortOrder
    daysSinceLastSuccess?: SortOrder
    attemptCount?: SortOrder
    failureReason?: SortOrder
    opportunityStatus?: SortOrder
    hoursSinceFailure?: SortOrder
    checkoutAbandoned?: SortOrder
    lateAuthorization?: SortOrder
    alreadyRecovered?: SortOrder
    naturalRecoveryProbability?: SortOrder
    recoveredNaturally?: SortOrder
    aiEstimatedLift?: SortOrder
    aiRecommendedAction?: SortOrder
    selectedForIntervention?: SortOrder
    diagnosis?: SortOrder
    diagnosisReasoning?: SortOrder
    diagnosisConfidence?: SortOrder
    aiNaturalRecoveryProbability?: SortOrder
    aiRecoveryWithInterventionProbability?: SortOrder
    diagnosedAt?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
    selectionReason?: SortOrder
    policyAllowed?: SortOrder
    policyReason?: SortOrder
    policyEscalate?: SortOrder
    action?: SortOrder
    recovered?: SortOrder
    amountRecovered?: SortOrder
    interventionUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type OpportunitySumOrderByAggregateInput = {
    amount?: SortOrder
    previousSuccessCount?: SortOrder
    previousFailureCount?: SortOrder
    daysSinceLastSuccess?: SortOrder
    attemptCount?: SortOrder
    hoursSinceFailure?: SortOrder
    naturalRecoveryProbability?: SortOrder
    aiEstimatedLift?: SortOrder
    diagnosisConfidence?: SortOrder
    aiNaturalRecoveryProbability?: SortOrder
    aiRecoveryWithInterventionProbability?: SortOrder
    incrementalLift?: SortOrder
    expectedIncrementalRevenue?: SortOrder
    amountRecovered?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type RecoveryCaseCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RecoveryCaseCreateWithoutCustomerInput, RecoveryCaseUncheckedCreateWithoutCustomerInput> | RecoveryCaseCreateWithoutCustomerInput[] | RecoveryCaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutCustomerInput | RecoveryCaseCreateOrConnectWithoutCustomerInput[]
    createMany?: RecoveryCaseCreateManyCustomerInputEnvelope
    connect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
  }

  export type OpportunityCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OpportunityCreateWithoutCustomerInput, OpportunityUncheckedCreateWithoutCustomerInput> | OpportunityCreateWithoutCustomerInput[] | OpportunityUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutCustomerInput | OpportunityCreateOrConnectWithoutCustomerInput[]
    createMany?: OpportunityCreateManyCustomerInputEnvelope
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type RecoveryCaseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RecoveryCaseCreateWithoutCustomerInput, RecoveryCaseUncheckedCreateWithoutCustomerInput> | RecoveryCaseCreateWithoutCustomerInput[] | RecoveryCaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutCustomerInput | RecoveryCaseCreateOrConnectWithoutCustomerInput[]
    createMany?: RecoveryCaseCreateManyCustomerInputEnvelope
    connect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
  }

  export type OpportunityUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OpportunityCreateWithoutCustomerInput, OpportunityUncheckedCreateWithoutCustomerInput> | OpportunityCreateWithoutCustomerInput[] | OpportunityUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutCustomerInput | OpportunityCreateOrConnectWithoutCustomerInput[]
    createMany?: OpportunityCreateManyCustomerInputEnvelope
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type RecoveryCaseUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RecoveryCaseCreateWithoutCustomerInput, RecoveryCaseUncheckedCreateWithoutCustomerInput> | RecoveryCaseCreateWithoutCustomerInput[] | RecoveryCaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutCustomerInput | RecoveryCaseCreateOrConnectWithoutCustomerInput[]
    upsert?: RecoveryCaseUpsertWithWhereUniqueWithoutCustomerInput | RecoveryCaseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RecoveryCaseCreateManyCustomerInputEnvelope
    set?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    disconnect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    delete?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    connect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    update?: RecoveryCaseUpdateWithWhereUniqueWithoutCustomerInput | RecoveryCaseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RecoveryCaseUpdateManyWithWhereWithoutCustomerInput | RecoveryCaseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RecoveryCaseScalarWhereInput | RecoveryCaseScalarWhereInput[]
  }

  export type OpportunityUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OpportunityCreateWithoutCustomerInput, OpportunityUncheckedCreateWithoutCustomerInput> | OpportunityCreateWithoutCustomerInput[] | OpportunityUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutCustomerInput | OpportunityCreateOrConnectWithoutCustomerInput[]
    upsert?: OpportunityUpsertWithWhereUniqueWithoutCustomerInput | OpportunityUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OpportunityCreateManyCustomerInputEnvelope
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    update?: OpportunityUpdateWithWhereUniqueWithoutCustomerInput | OpportunityUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OpportunityUpdateManyWithWhereWithoutCustomerInput | OpportunityUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type RecoveryCaseUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RecoveryCaseCreateWithoutCustomerInput, RecoveryCaseUncheckedCreateWithoutCustomerInput> | RecoveryCaseCreateWithoutCustomerInput[] | RecoveryCaseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutCustomerInput | RecoveryCaseCreateOrConnectWithoutCustomerInput[]
    upsert?: RecoveryCaseUpsertWithWhereUniqueWithoutCustomerInput | RecoveryCaseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RecoveryCaseCreateManyCustomerInputEnvelope
    set?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    disconnect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    delete?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    connect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    update?: RecoveryCaseUpdateWithWhereUniqueWithoutCustomerInput | RecoveryCaseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RecoveryCaseUpdateManyWithWhereWithoutCustomerInput | RecoveryCaseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RecoveryCaseScalarWhereInput | RecoveryCaseScalarWhereInput[]
  }

  export type OpportunityUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OpportunityCreateWithoutCustomerInput, OpportunityUncheckedCreateWithoutCustomerInput> | OpportunityCreateWithoutCustomerInput[] | OpportunityUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutCustomerInput | OpportunityCreateOrConnectWithoutCustomerInput[]
    upsert?: OpportunityUpsertWithWhereUniqueWithoutCustomerInput | OpportunityUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OpportunityCreateManyCustomerInputEnvelope
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    update?: OpportunityUpdateWithWhereUniqueWithoutCustomerInput | OpportunityUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OpportunityUpdateManyWithWhereWithoutCustomerInput | OpportunityUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type PaymentEventCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput> | PaymentEventCreateWithoutPaymentInput[] | PaymentEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentEventCreateOrConnectWithoutPaymentInput | PaymentEventCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentEventCreateManyPaymentInputEnvelope
    connect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
  }

  export type RecoveryCaseCreateNestedManyWithoutPaymentInput = {
    create?: XOR<RecoveryCaseCreateWithoutPaymentInput, RecoveryCaseUncheckedCreateWithoutPaymentInput> | RecoveryCaseCreateWithoutPaymentInput[] | RecoveryCaseUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutPaymentInput | RecoveryCaseCreateOrConnectWithoutPaymentInput[]
    createMany?: RecoveryCaseCreateManyPaymentInputEnvelope
    connect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
  }

  export type OpportunityCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OpportunityCreateWithoutPaymentInput, OpportunityUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutPaymentInput
    connect?: OpportunityWhereUniqueInput
  }

  export type PaymentEventUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput> | PaymentEventCreateWithoutPaymentInput[] | PaymentEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentEventCreateOrConnectWithoutPaymentInput | PaymentEventCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentEventCreateManyPaymentInputEnvelope
    connect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
  }

  export type RecoveryCaseUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<RecoveryCaseCreateWithoutPaymentInput, RecoveryCaseUncheckedCreateWithoutPaymentInput> | RecoveryCaseCreateWithoutPaymentInput[] | RecoveryCaseUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutPaymentInput | RecoveryCaseCreateOrConnectWithoutPaymentInput[]
    createMany?: RecoveryCaseCreateManyPaymentInputEnvelope
    connect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
  }

  export type OpportunityUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OpportunityCreateWithoutPaymentInput, OpportunityUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutPaymentInput
    connect?: OpportunityWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    upsert?: CustomerUpsertWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPaymentsInput, CustomerUpdateWithoutPaymentsInput>, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentEventUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput> | PaymentEventCreateWithoutPaymentInput[] | PaymentEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentEventCreateOrConnectWithoutPaymentInput | PaymentEventCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentEventUpsertWithWhereUniqueWithoutPaymentInput | PaymentEventUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentEventCreateManyPaymentInputEnvelope
    set?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    disconnect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    delete?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    connect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    update?: PaymentEventUpdateWithWhereUniqueWithoutPaymentInput | PaymentEventUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentEventUpdateManyWithWhereWithoutPaymentInput | PaymentEventUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentEventScalarWhereInput | PaymentEventScalarWhereInput[]
  }

  export type RecoveryCaseUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<RecoveryCaseCreateWithoutPaymentInput, RecoveryCaseUncheckedCreateWithoutPaymentInput> | RecoveryCaseCreateWithoutPaymentInput[] | RecoveryCaseUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutPaymentInput | RecoveryCaseCreateOrConnectWithoutPaymentInput[]
    upsert?: RecoveryCaseUpsertWithWhereUniqueWithoutPaymentInput | RecoveryCaseUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: RecoveryCaseCreateManyPaymentInputEnvelope
    set?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    disconnect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    delete?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    connect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    update?: RecoveryCaseUpdateWithWhereUniqueWithoutPaymentInput | RecoveryCaseUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: RecoveryCaseUpdateManyWithWhereWithoutPaymentInput | RecoveryCaseUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: RecoveryCaseScalarWhereInput | RecoveryCaseScalarWhereInput[]
  }

  export type OpportunityUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<OpportunityCreateWithoutPaymentInput, OpportunityUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutPaymentInput
    upsert?: OpportunityUpsertWithoutPaymentInput
    disconnect?: OpportunityWhereInput | boolean
    delete?: OpportunityWhereInput | boolean
    connect?: OpportunityWhereUniqueInput
    update?: XOR<XOR<OpportunityUpdateToOneWithWhereWithoutPaymentInput, OpportunityUpdateWithoutPaymentInput>, OpportunityUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentEventUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput> | PaymentEventCreateWithoutPaymentInput[] | PaymentEventUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentEventCreateOrConnectWithoutPaymentInput | PaymentEventCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentEventUpsertWithWhereUniqueWithoutPaymentInput | PaymentEventUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentEventCreateManyPaymentInputEnvelope
    set?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    disconnect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    delete?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    connect?: PaymentEventWhereUniqueInput | PaymentEventWhereUniqueInput[]
    update?: PaymentEventUpdateWithWhereUniqueWithoutPaymentInput | PaymentEventUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentEventUpdateManyWithWhereWithoutPaymentInput | PaymentEventUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentEventScalarWhereInput | PaymentEventScalarWhereInput[]
  }

  export type RecoveryCaseUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<RecoveryCaseCreateWithoutPaymentInput, RecoveryCaseUncheckedCreateWithoutPaymentInput> | RecoveryCaseCreateWithoutPaymentInput[] | RecoveryCaseUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutPaymentInput | RecoveryCaseCreateOrConnectWithoutPaymentInput[]
    upsert?: RecoveryCaseUpsertWithWhereUniqueWithoutPaymentInput | RecoveryCaseUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: RecoveryCaseCreateManyPaymentInputEnvelope
    set?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    disconnect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    delete?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    connect?: RecoveryCaseWhereUniqueInput | RecoveryCaseWhereUniqueInput[]
    update?: RecoveryCaseUpdateWithWhereUniqueWithoutPaymentInput | RecoveryCaseUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: RecoveryCaseUpdateManyWithWhereWithoutPaymentInput | RecoveryCaseUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: RecoveryCaseScalarWhereInput | RecoveryCaseScalarWhereInput[]
  }

  export type OpportunityUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<OpportunityCreateWithoutPaymentInput, OpportunityUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutPaymentInput
    upsert?: OpportunityUpsertWithoutPaymentInput
    disconnect?: OpportunityWhereInput | boolean
    delete?: OpportunityWhereInput | boolean
    connect?: OpportunityWhereUniqueInput
    update?: XOR<XOR<OpportunityUpdateToOneWithWhereWithoutPaymentInput, OpportunityUpdateWithoutPaymentInput>, OpportunityUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentCreateNestedOneWithoutEventsInput = {
    create?: XOR<PaymentCreateWithoutEventsInput, PaymentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutEventsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<PaymentCreateWithoutEventsInput, PaymentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutEventsInput
    upsert?: PaymentUpsertWithoutEventsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutEventsInput, PaymentUpdateWithoutEventsInput>, PaymentUncheckedUpdateWithoutEventsInput>
  }

  export type PaymentCreateNestedOneWithoutRecoveryCasesInput = {
    create?: XOR<PaymentCreateWithoutRecoveryCasesInput, PaymentUncheckedCreateWithoutRecoveryCasesInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRecoveryCasesInput
    connect?: PaymentWhereUniqueInput
  }

  export type RecoveryActionCreateNestedManyWithoutRecoveryCaseInput = {
    create?: XOR<RecoveryActionCreateWithoutRecoveryCaseInput, RecoveryActionUncheckedCreateWithoutRecoveryCaseInput> | RecoveryActionCreateWithoutRecoveryCaseInput[] | RecoveryActionUncheckedCreateWithoutRecoveryCaseInput[]
    connectOrCreate?: RecoveryActionCreateOrConnectWithoutRecoveryCaseInput | RecoveryActionCreateOrConnectWithoutRecoveryCaseInput[]
    createMany?: RecoveryActionCreateManyRecoveryCaseInputEnvelope
    connect?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutRecoveryCaseInput = {
    create?: XOR<AuditLogCreateWithoutRecoveryCaseInput, AuditLogUncheckedCreateWithoutRecoveryCaseInput> | AuditLogCreateWithoutRecoveryCaseInput[] | AuditLogUncheckedCreateWithoutRecoveryCaseInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutRecoveryCaseInput | AuditLogCreateOrConnectWithoutRecoveryCaseInput[]
    createMany?: AuditLogCreateManyRecoveryCaseInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutRecoveryCasesInput = {
    create?: XOR<CustomerCreateWithoutRecoveryCasesInput, CustomerUncheckedCreateWithoutRecoveryCasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRecoveryCasesInput
    connect?: CustomerWhereUniqueInput
  }

  export type RecoveryActionUncheckedCreateNestedManyWithoutRecoveryCaseInput = {
    create?: XOR<RecoveryActionCreateWithoutRecoveryCaseInput, RecoveryActionUncheckedCreateWithoutRecoveryCaseInput> | RecoveryActionCreateWithoutRecoveryCaseInput[] | RecoveryActionUncheckedCreateWithoutRecoveryCaseInput[]
    connectOrCreate?: RecoveryActionCreateOrConnectWithoutRecoveryCaseInput | RecoveryActionCreateOrConnectWithoutRecoveryCaseInput[]
    createMany?: RecoveryActionCreateManyRecoveryCaseInputEnvelope
    connect?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutRecoveryCaseInput = {
    create?: XOR<AuditLogCreateWithoutRecoveryCaseInput, AuditLogUncheckedCreateWithoutRecoveryCaseInput> | AuditLogCreateWithoutRecoveryCaseInput[] | AuditLogUncheckedCreateWithoutRecoveryCaseInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutRecoveryCaseInput | AuditLogCreateOrConnectWithoutRecoveryCaseInput[]
    createMany?: AuditLogCreateManyRecoveryCaseInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumRecoveryActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.RecoveryActionType | null
  }

  export type EnumRecoveryCaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecoveryCaseStatus
  }

  export type PaymentUpdateOneRequiredWithoutRecoveryCasesNestedInput = {
    create?: XOR<PaymentCreateWithoutRecoveryCasesInput, PaymentUncheckedCreateWithoutRecoveryCasesInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRecoveryCasesInput
    upsert?: PaymentUpsertWithoutRecoveryCasesInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutRecoveryCasesInput, PaymentUpdateWithoutRecoveryCasesInput>, PaymentUncheckedUpdateWithoutRecoveryCasesInput>
  }

  export type RecoveryActionUpdateManyWithoutRecoveryCaseNestedInput = {
    create?: XOR<RecoveryActionCreateWithoutRecoveryCaseInput, RecoveryActionUncheckedCreateWithoutRecoveryCaseInput> | RecoveryActionCreateWithoutRecoveryCaseInput[] | RecoveryActionUncheckedCreateWithoutRecoveryCaseInput[]
    connectOrCreate?: RecoveryActionCreateOrConnectWithoutRecoveryCaseInput | RecoveryActionCreateOrConnectWithoutRecoveryCaseInput[]
    upsert?: RecoveryActionUpsertWithWhereUniqueWithoutRecoveryCaseInput | RecoveryActionUpsertWithWhereUniqueWithoutRecoveryCaseInput[]
    createMany?: RecoveryActionCreateManyRecoveryCaseInputEnvelope
    set?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
    disconnect?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
    delete?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
    connect?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
    update?: RecoveryActionUpdateWithWhereUniqueWithoutRecoveryCaseInput | RecoveryActionUpdateWithWhereUniqueWithoutRecoveryCaseInput[]
    updateMany?: RecoveryActionUpdateManyWithWhereWithoutRecoveryCaseInput | RecoveryActionUpdateManyWithWhereWithoutRecoveryCaseInput[]
    deleteMany?: RecoveryActionScalarWhereInput | RecoveryActionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutRecoveryCaseNestedInput = {
    create?: XOR<AuditLogCreateWithoutRecoveryCaseInput, AuditLogUncheckedCreateWithoutRecoveryCaseInput> | AuditLogCreateWithoutRecoveryCaseInput[] | AuditLogUncheckedCreateWithoutRecoveryCaseInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutRecoveryCaseInput | AuditLogCreateOrConnectWithoutRecoveryCaseInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutRecoveryCaseInput | AuditLogUpsertWithWhereUniqueWithoutRecoveryCaseInput[]
    createMany?: AuditLogCreateManyRecoveryCaseInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutRecoveryCaseInput | AuditLogUpdateWithWhereUniqueWithoutRecoveryCaseInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutRecoveryCaseInput | AuditLogUpdateManyWithWhereWithoutRecoveryCaseInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type CustomerUpdateOneWithoutRecoveryCasesNestedInput = {
    create?: XOR<CustomerCreateWithoutRecoveryCasesInput, CustomerUncheckedCreateWithoutRecoveryCasesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRecoveryCasesInput
    upsert?: CustomerUpsertWithoutRecoveryCasesInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRecoveryCasesInput, CustomerUpdateWithoutRecoveryCasesInput>, CustomerUncheckedUpdateWithoutRecoveryCasesInput>
  }

  export type RecoveryActionUncheckedUpdateManyWithoutRecoveryCaseNestedInput = {
    create?: XOR<RecoveryActionCreateWithoutRecoveryCaseInput, RecoveryActionUncheckedCreateWithoutRecoveryCaseInput> | RecoveryActionCreateWithoutRecoveryCaseInput[] | RecoveryActionUncheckedCreateWithoutRecoveryCaseInput[]
    connectOrCreate?: RecoveryActionCreateOrConnectWithoutRecoveryCaseInput | RecoveryActionCreateOrConnectWithoutRecoveryCaseInput[]
    upsert?: RecoveryActionUpsertWithWhereUniqueWithoutRecoveryCaseInput | RecoveryActionUpsertWithWhereUniqueWithoutRecoveryCaseInput[]
    createMany?: RecoveryActionCreateManyRecoveryCaseInputEnvelope
    set?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
    disconnect?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
    delete?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
    connect?: RecoveryActionWhereUniqueInput | RecoveryActionWhereUniqueInput[]
    update?: RecoveryActionUpdateWithWhereUniqueWithoutRecoveryCaseInput | RecoveryActionUpdateWithWhereUniqueWithoutRecoveryCaseInput[]
    updateMany?: RecoveryActionUpdateManyWithWhereWithoutRecoveryCaseInput | RecoveryActionUpdateManyWithWhereWithoutRecoveryCaseInput[]
    deleteMany?: RecoveryActionScalarWhereInput | RecoveryActionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutRecoveryCaseNestedInput = {
    create?: XOR<AuditLogCreateWithoutRecoveryCaseInput, AuditLogUncheckedCreateWithoutRecoveryCaseInput> | AuditLogCreateWithoutRecoveryCaseInput[] | AuditLogUncheckedCreateWithoutRecoveryCaseInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutRecoveryCaseInput | AuditLogCreateOrConnectWithoutRecoveryCaseInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutRecoveryCaseInput | AuditLogUpsertWithWhereUniqueWithoutRecoveryCaseInput[]
    createMany?: AuditLogCreateManyRecoveryCaseInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutRecoveryCaseInput | AuditLogUpdateWithWhereUniqueWithoutRecoveryCaseInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutRecoveryCaseInput | AuditLogUpdateManyWithWhereWithoutRecoveryCaseInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type RecoveryCaseCreateNestedOneWithoutActionsInput = {
    create?: XOR<RecoveryCaseCreateWithoutActionsInput, RecoveryCaseUncheckedCreateWithoutActionsInput>
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutActionsInput
    connect?: RecoveryCaseWhereUniqueInput
  }

  export type RecoveryCaseUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<RecoveryCaseCreateWithoutActionsInput, RecoveryCaseUncheckedCreateWithoutActionsInput>
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutActionsInput
    upsert?: RecoveryCaseUpsertWithoutActionsInput
    connect?: RecoveryCaseWhereUniqueInput
    update?: XOR<XOR<RecoveryCaseUpdateToOneWithWhereWithoutActionsInput, RecoveryCaseUpdateWithoutActionsInput>, RecoveryCaseUncheckedUpdateWithoutActionsInput>
  }

  export type RecoveryCaseCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<RecoveryCaseCreateWithoutAuditLogsInput, RecoveryCaseUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutAuditLogsInput
    connect?: RecoveryCaseWhereUniqueInput
  }

  export type RecoveryCaseUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<RecoveryCaseCreateWithoutAuditLogsInput, RecoveryCaseUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: RecoveryCaseCreateOrConnectWithoutAuditLogsInput
    upsert?: RecoveryCaseUpsertWithoutAuditLogsInput
    disconnect?: RecoveryCaseWhereInput | boolean
    delete?: RecoveryCaseWhereInput | boolean
    connect?: RecoveryCaseWhereUniqueInput
    update?: XOR<XOR<RecoveryCaseUpdateToOneWithWhereWithoutAuditLogsInput, RecoveryCaseUpdateWithoutAuditLogsInput>, RecoveryCaseUncheckedUpdateWithoutAuditLogsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PaymentCreateNestedOneWithoutOpportunityInput = {
    create?: XOR<PaymentCreateWithoutOpportunityInput, PaymentUncheckedCreateWithoutOpportunityInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOpportunityInput
    connect?: PaymentWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutOpportunitiesInput = {
    create?: XOR<CustomerCreateWithoutOpportunitiesInput, CustomerUncheckedCreateWithoutOpportunitiesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOpportunitiesInput
    connect?: CustomerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type PaymentUpdateOneRequiredWithoutOpportunityNestedInput = {
    create?: XOR<PaymentCreateWithoutOpportunityInput, PaymentUncheckedCreateWithoutOpportunityInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOpportunityInput
    upsert?: PaymentUpsertWithoutOpportunityInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOpportunityInput, PaymentUpdateWithoutOpportunityInput>, PaymentUncheckedUpdateWithoutOpportunityInput>
  }

  export type CustomerUpdateOneRequiredWithoutOpportunitiesNestedInput = {
    create?: XOR<CustomerCreateWithoutOpportunitiesInput, CustomerUncheckedCreateWithoutOpportunitiesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOpportunitiesInput
    upsert?: CustomerUpsertWithoutOpportunitiesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOpportunitiesInput, CustomerUpdateWithoutOpportunitiesInput>, CustomerUncheckedUpdateWithoutOpportunitiesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumRecoveryActionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryActionType | EnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecoveryActionType[] | ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RecoveryActionType[] | ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRecoveryActionTypeNullableFilter<$PrismaModel> | $Enums.RecoveryActionType | null
  }

  export type NestedEnumRecoveryCaseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryCaseStatus | EnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecoveryCaseStatus[] | ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecoveryCaseStatus[] | ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecoveryCaseStatusFilter<$PrismaModel> | $Enums.RecoveryCaseStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecoveryActionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryActionType | EnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecoveryActionType[] | ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RecoveryActionType[] | ListEnumRecoveryActionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRecoveryActionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.RecoveryActionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRecoveryActionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumRecoveryActionTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecoveryCaseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryCaseStatus | EnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecoveryCaseStatus[] | ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecoveryCaseStatus[] | ListEnumRecoveryCaseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRecoveryCaseStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecoveryCaseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecoveryCaseStatusFilter<$PrismaModel>
    _max?: NestedEnumRecoveryCaseStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PaymentCreateWithoutCustomerInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    createdAt?: Date | string
    events?: PaymentEventCreateNestedManyWithoutPaymentInput
    recoveryCases?: RecoveryCaseCreateNestedManyWithoutPaymentInput
    opportunity?: OpportunityCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutCustomerInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    createdAt?: Date | string
    events?: PaymentEventUncheckedCreateNestedManyWithoutPaymentInput
    recoveryCases?: RecoveryCaseUncheckedCreateNestedManyWithoutPaymentInput
    opportunity?: OpportunityUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentCreateManyCustomerInputEnvelope = {
    data: PaymentCreateManyCustomerInput | PaymentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type RecoveryCaseCreateWithoutCustomerInput = {
    id?: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutRecoveryCasesInput
    actions?: RecoveryActionCreateNestedManyWithoutRecoveryCaseInput
    auditLogs?: AuditLogCreateNestedManyWithoutRecoveryCaseInput
  }

  export type RecoveryCaseUncheckedCreateWithoutCustomerInput = {
    id?: string
    paymentId: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    actions?: RecoveryActionUncheckedCreateNestedManyWithoutRecoveryCaseInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRecoveryCaseInput
  }

  export type RecoveryCaseCreateOrConnectWithoutCustomerInput = {
    where: RecoveryCaseWhereUniqueInput
    create: XOR<RecoveryCaseCreateWithoutCustomerInput, RecoveryCaseUncheckedCreateWithoutCustomerInput>
  }

  export type RecoveryCaseCreateManyCustomerInputEnvelope = {
    data: RecoveryCaseCreateManyCustomerInput | RecoveryCaseCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OpportunityCreateWithoutCustomerInput = {
    id?: string
    amount: number
    currency?: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess?: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift?: number | null
    aiRecommendedAction?: string | null
    selectedForIntervention?: boolean
    diagnosis?: string | null
    diagnosisReasoning?: string | null
    diagnosisConfidence?: number | null
    aiNaturalRecoveryProbability?: number | null
    aiRecoveryWithInterventionProbability?: number | null
    diagnosedAt?: Date | string | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    selectionReason?: string | null
    policyAllowed?: boolean | null
    policyReason?: string | null
    policyEscalate?: boolean
    action?: string | null
    recovered?: boolean | null
    amountRecovered?: number | null
    interventionUsed?: boolean
    createdAt?: Date | string
    payment: PaymentCreateNestedOneWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateWithoutCustomerInput = {
    id?: string
    paymentId: string
    amount: number
    currency?: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess?: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift?: number | null
    aiRecommendedAction?: string | null
    selectedForIntervention?: boolean
    diagnosis?: string | null
    diagnosisReasoning?: string | null
    diagnosisConfidence?: number | null
    aiNaturalRecoveryProbability?: number | null
    aiRecoveryWithInterventionProbability?: number | null
    diagnosedAt?: Date | string | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    selectionReason?: string | null
    policyAllowed?: boolean | null
    policyReason?: string | null
    policyEscalate?: boolean
    action?: string | null
    recovered?: boolean | null
    amountRecovered?: number | null
    interventionUsed?: boolean
    createdAt?: Date | string
  }

  export type OpportunityCreateOrConnectWithoutCustomerInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutCustomerInput, OpportunityUncheckedCreateWithoutCustomerInput>
  }

  export type OpportunityCreateManyCustomerInputEnvelope = {
    data: OpportunityCreateManyCustomerInput | OpportunityCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    customerId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type RecoveryCaseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: RecoveryCaseWhereUniqueInput
    update: XOR<RecoveryCaseUpdateWithoutCustomerInput, RecoveryCaseUncheckedUpdateWithoutCustomerInput>
    create: XOR<RecoveryCaseCreateWithoutCustomerInput, RecoveryCaseUncheckedCreateWithoutCustomerInput>
  }

  export type RecoveryCaseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: RecoveryCaseWhereUniqueInput
    data: XOR<RecoveryCaseUpdateWithoutCustomerInput, RecoveryCaseUncheckedUpdateWithoutCustomerInput>
  }

  export type RecoveryCaseUpdateManyWithWhereWithoutCustomerInput = {
    where: RecoveryCaseScalarWhereInput
    data: XOR<RecoveryCaseUpdateManyMutationInput, RecoveryCaseUncheckedUpdateManyWithoutCustomerInput>
  }

  export type RecoveryCaseScalarWhereInput = {
    AND?: RecoveryCaseScalarWhereInput | RecoveryCaseScalarWhereInput[]
    OR?: RecoveryCaseScalarWhereInput[]
    NOT?: RecoveryCaseScalarWhereInput | RecoveryCaseScalarWhereInput[]
    id?: StringFilter<"RecoveryCase"> | string
    paymentId?: StringFilter<"RecoveryCase"> | string
    diagnosis?: StringNullableFilter<"RecoveryCase"> | string | null
    confidence?: FloatNullableFilter<"RecoveryCase"> | number | null
    naturalRecoveryProbability?: FloatNullableFilter<"RecoveryCase"> | number | null
    interventionRecoveryProbability?: FloatNullableFilter<"RecoveryCase"> | number | null
    incrementalLift?: FloatNullableFilter<"RecoveryCase"> | number | null
    expectedIncrementalRevenue?: DecimalNullableFilter<"RecoveryCase"> | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: EnumRecoveryActionTypeNullableFilter<"RecoveryCase"> | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFilter<"RecoveryCase"> | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFilter<"RecoveryCase"> | Date | string
    updatedAt?: DateTimeFilter<"RecoveryCase"> | Date | string
    customerId?: StringNullableFilter<"RecoveryCase"> | string | null
  }

  export type OpportunityUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OpportunityWhereUniqueInput
    update: XOR<OpportunityUpdateWithoutCustomerInput, OpportunityUncheckedUpdateWithoutCustomerInput>
    create: XOR<OpportunityCreateWithoutCustomerInput, OpportunityUncheckedCreateWithoutCustomerInput>
  }

  export type OpportunityUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OpportunityWhereUniqueInput
    data: XOR<OpportunityUpdateWithoutCustomerInput, OpportunityUncheckedUpdateWithoutCustomerInput>
  }

  export type OpportunityUpdateManyWithWhereWithoutCustomerInput = {
    where: OpportunityScalarWhereInput
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OpportunityScalarWhereInput = {
    AND?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
    OR?: OpportunityScalarWhereInput[]
    NOT?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
    id?: StringFilter<"Opportunity"> | string
    paymentId?: StringFilter<"Opportunity"> | string
    customerId?: StringFilter<"Opportunity"> | string
    amount?: FloatFilter<"Opportunity"> | number
    currency?: StringFilter<"Opportunity"> | string
    customerSegment?: StringFilter<"Opportunity"> | string
    previousSuccessCount?: IntFilter<"Opportunity"> | number
    previousFailureCount?: IntFilter<"Opportunity"> | number
    daysSinceLastSuccess?: IntNullableFilter<"Opportunity"> | number | null
    attemptCount?: IntFilter<"Opportunity"> | number
    failureReason?: StringFilter<"Opportunity"> | string
    opportunityStatus?: StringFilter<"Opportunity"> | string
    hoursSinceFailure?: FloatFilter<"Opportunity"> | number
    checkoutAbandoned?: BoolFilter<"Opportunity"> | boolean
    lateAuthorization?: BoolFilter<"Opportunity"> | boolean
    alreadyRecovered?: BoolFilter<"Opportunity"> | boolean
    naturalRecoveryProbability?: FloatFilter<"Opportunity"> | number
    recoveredNaturally?: BoolFilter<"Opportunity"> | boolean
    aiEstimatedLift?: FloatNullableFilter<"Opportunity"> | number | null
    aiRecommendedAction?: StringNullableFilter<"Opportunity"> | string | null
    selectedForIntervention?: BoolFilter<"Opportunity"> | boolean
    diagnosis?: StringNullableFilter<"Opportunity"> | string | null
    diagnosisReasoning?: StringNullableFilter<"Opportunity"> | string | null
    diagnosisConfidence?: FloatNullableFilter<"Opportunity"> | number | null
    aiNaturalRecoveryProbability?: FloatNullableFilter<"Opportunity"> | number | null
    aiRecoveryWithInterventionProbability?: FloatNullableFilter<"Opportunity"> | number | null
    diagnosedAt?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    incrementalLift?: FloatNullableFilter<"Opportunity"> | number | null
    expectedIncrementalRevenue?: DecimalNullableFilter<"Opportunity"> | Decimal | DecimalJsLike | number | string | null
    selectionReason?: StringNullableFilter<"Opportunity"> | string | null
    policyAllowed?: BoolNullableFilter<"Opportunity"> | boolean | null
    policyReason?: StringNullableFilter<"Opportunity"> | string | null
    policyEscalate?: BoolFilter<"Opportunity"> | boolean
    action?: StringNullableFilter<"Opportunity"> | string | null
    recovered?: BoolNullableFilter<"Opportunity"> | boolean | null
    amountRecovered?: FloatNullableFilter<"Opportunity"> | number | null
    interventionUsed?: BoolFilter<"Opportunity"> | boolean
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
  }

  export type CustomerCreateWithoutPaymentsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryCases?: RecoveryCaseCreateNestedManyWithoutCustomerInput
    opportunities?: OpportunityCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recoveryCases?: RecoveryCaseUncheckedCreateNestedManyWithoutCustomerInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPaymentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentEventCreateWithoutPaymentInput = {
    id?: string
    eventId: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentEventUncheckedCreateWithoutPaymentInput = {
    id?: string
    eventId: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentEventCreateOrConnectWithoutPaymentInput = {
    where: PaymentEventWhereUniqueInput
    create: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentEventCreateManyPaymentInputEnvelope = {
    data: PaymentEventCreateManyPaymentInput | PaymentEventCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type RecoveryCaseCreateWithoutPaymentInput = {
    id?: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    actions?: RecoveryActionCreateNestedManyWithoutRecoveryCaseInput
    auditLogs?: AuditLogCreateNestedManyWithoutRecoveryCaseInput
    customer?: CustomerCreateNestedOneWithoutRecoveryCasesInput
  }

  export type RecoveryCaseUncheckedCreateWithoutPaymentInput = {
    id?: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
    actions?: RecoveryActionUncheckedCreateNestedManyWithoutRecoveryCaseInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRecoveryCaseInput
  }

  export type RecoveryCaseCreateOrConnectWithoutPaymentInput = {
    where: RecoveryCaseWhereUniqueInput
    create: XOR<RecoveryCaseCreateWithoutPaymentInput, RecoveryCaseUncheckedCreateWithoutPaymentInput>
  }

  export type RecoveryCaseCreateManyPaymentInputEnvelope = {
    data: RecoveryCaseCreateManyPaymentInput | RecoveryCaseCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type OpportunityCreateWithoutPaymentInput = {
    id?: string
    amount: number
    currency?: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess?: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift?: number | null
    aiRecommendedAction?: string | null
    selectedForIntervention?: boolean
    diagnosis?: string | null
    diagnosisReasoning?: string | null
    diagnosisConfidence?: number | null
    aiNaturalRecoveryProbability?: number | null
    aiRecoveryWithInterventionProbability?: number | null
    diagnosedAt?: Date | string | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    selectionReason?: string | null
    policyAllowed?: boolean | null
    policyReason?: string | null
    policyEscalate?: boolean
    action?: string | null
    recovered?: boolean | null
    amountRecovered?: number | null
    interventionUsed?: boolean
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOpportunitiesInput
  }

  export type OpportunityUncheckedCreateWithoutPaymentInput = {
    id?: string
    customerId: string
    amount: number
    currency?: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess?: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift?: number | null
    aiRecommendedAction?: string | null
    selectedForIntervention?: boolean
    diagnosis?: string | null
    diagnosisReasoning?: string | null
    diagnosisConfidence?: number | null
    aiNaturalRecoveryProbability?: number | null
    aiRecoveryWithInterventionProbability?: number | null
    diagnosedAt?: Date | string | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    selectionReason?: string | null
    policyAllowed?: boolean | null
    policyReason?: string | null
    policyEscalate?: boolean
    action?: string | null
    recovered?: boolean | null
    amountRecovered?: number | null
    interventionUsed?: boolean
    createdAt?: Date | string
  }

  export type OpportunityCreateOrConnectWithoutPaymentInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutPaymentInput, OpportunityUncheckedCreateWithoutPaymentInput>
  }

  export type CustomerUpsertWithoutPaymentsInput = {
    update: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryCases?: RecoveryCaseUpdateManyWithoutCustomerNestedInput
    opportunities?: OpportunityUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryCases?: RecoveryCaseUncheckedUpdateManyWithoutCustomerNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PaymentEventUpsertWithWhereUniqueWithoutPaymentInput = {
    where: PaymentEventWhereUniqueInput
    update: XOR<PaymentEventUpdateWithoutPaymentInput, PaymentEventUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentEventCreateWithoutPaymentInput, PaymentEventUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentEventUpdateWithWhereUniqueWithoutPaymentInput = {
    where: PaymentEventWhereUniqueInput
    data: XOR<PaymentEventUpdateWithoutPaymentInput, PaymentEventUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentEventUpdateManyWithWhereWithoutPaymentInput = {
    where: PaymentEventScalarWhereInput
    data: XOR<PaymentEventUpdateManyMutationInput, PaymentEventUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentEventScalarWhereInput = {
    AND?: PaymentEventScalarWhereInput | PaymentEventScalarWhereInput[]
    OR?: PaymentEventScalarWhereInput[]
    NOT?: PaymentEventScalarWhereInput | PaymentEventScalarWhereInput[]
    id?: StringFilter<"PaymentEvent"> | string
    eventId?: StringFilter<"PaymentEvent"> | string
    paymentId?: StringFilter<"PaymentEvent"> | string
    eventType?: StringFilter<"PaymentEvent"> | string
    metadata?: JsonNullableFilter<"PaymentEvent">
    createdAt?: DateTimeFilter<"PaymentEvent"> | Date | string
  }

  export type RecoveryCaseUpsertWithWhereUniqueWithoutPaymentInput = {
    where: RecoveryCaseWhereUniqueInput
    update: XOR<RecoveryCaseUpdateWithoutPaymentInput, RecoveryCaseUncheckedUpdateWithoutPaymentInput>
    create: XOR<RecoveryCaseCreateWithoutPaymentInput, RecoveryCaseUncheckedCreateWithoutPaymentInput>
  }

  export type RecoveryCaseUpdateWithWhereUniqueWithoutPaymentInput = {
    where: RecoveryCaseWhereUniqueInput
    data: XOR<RecoveryCaseUpdateWithoutPaymentInput, RecoveryCaseUncheckedUpdateWithoutPaymentInput>
  }

  export type RecoveryCaseUpdateManyWithWhereWithoutPaymentInput = {
    where: RecoveryCaseScalarWhereInput
    data: XOR<RecoveryCaseUpdateManyMutationInput, RecoveryCaseUncheckedUpdateManyWithoutPaymentInput>
  }

  export type OpportunityUpsertWithoutPaymentInput = {
    update: XOR<OpportunityUpdateWithoutPaymentInput, OpportunityUncheckedUpdateWithoutPaymentInput>
    create: XOR<OpportunityCreateWithoutPaymentInput, OpportunityUncheckedCreateWithoutPaymentInput>
    where?: OpportunityWhereInput
  }

  export type OpportunityUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OpportunityWhereInput
    data: XOR<OpportunityUpdateWithoutPaymentInput, OpportunityUncheckedUpdateWithoutPaymentInput>
  }

  export type OpportunityUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOpportunitiesNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateWithoutEventsInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
    recoveryCases?: RecoveryCaseCreateNestedManyWithoutPaymentInput
    opportunity?: OpportunityCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutEventsInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    customerId: string
    createdAt?: Date | string
    recoveryCases?: RecoveryCaseUncheckedCreateNestedManyWithoutPaymentInput
    opportunity?: OpportunityUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutEventsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutEventsInput, PaymentUncheckedCreateWithoutEventsInput>
  }

  export type PaymentUpsertWithoutEventsInput = {
    update: XOR<PaymentUpdateWithoutEventsInput, PaymentUncheckedUpdateWithoutEventsInput>
    create: XOR<PaymentCreateWithoutEventsInput, PaymentUncheckedCreateWithoutEventsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutEventsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutEventsInput, PaymentUncheckedUpdateWithoutEventsInput>
  }

  export type PaymentUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
    recoveryCases?: RecoveryCaseUpdateManyWithoutPaymentNestedInput
    opportunity?: OpportunityUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recoveryCases?: RecoveryCaseUncheckedUpdateManyWithoutPaymentNestedInput
    opportunity?: OpportunityUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateWithoutRecoveryCasesInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
    events?: PaymentEventCreateNestedManyWithoutPaymentInput
    opportunity?: OpportunityCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutRecoveryCasesInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    customerId: string
    createdAt?: Date | string
    events?: PaymentEventUncheckedCreateNestedManyWithoutPaymentInput
    opportunity?: OpportunityUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutRecoveryCasesInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRecoveryCasesInput, PaymentUncheckedCreateWithoutRecoveryCasesInput>
  }

  export type RecoveryActionCreateWithoutRecoveryCaseInput = {
    id?: string
    actionType: string
    status: string
    createdAt?: Date | string
  }

  export type RecoveryActionUncheckedCreateWithoutRecoveryCaseInput = {
    id?: string
    actionType: string
    status: string
    createdAt?: Date | string
  }

  export type RecoveryActionCreateOrConnectWithoutRecoveryCaseInput = {
    where: RecoveryActionWhereUniqueInput
    create: XOR<RecoveryActionCreateWithoutRecoveryCaseInput, RecoveryActionUncheckedCreateWithoutRecoveryCaseInput>
  }

  export type RecoveryActionCreateManyRecoveryCaseInputEnvelope = {
    data: RecoveryActionCreateManyRecoveryCaseInput | RecoveryActionCreateManyRecoveryCaseInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutRecoveryCaseInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutRecoveryCaseInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutRecoveryCaseInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutRecoveryCaseInput, AuditLogUncheckedCreateWithoutRecoveryCaseInput>
  }

  export type AuditLogCreateManyRecoveryCaseInputEnvelope = {
    data: AuditLogCreateManyRecoveryCaseInput | AuditLogCreateManyRecoveryCaseInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutRecoveryCasesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutCustomerInput
    opportunities?: OpportunityCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutRecoveryCasesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutRecoveryCasesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRecoveryCasesInput, CustomerUncheckedCreateWithoutRecoveryCasesInput>
  }

  export type PaymentUpsertWithoutRecoveryCasesInput = {
    update: XOR<PaymentUpdateWithoutRecoveryCasesInput, PaymentUncheckedUpdateWithoutRecoveryCasesInput>
    create: XOR<PaymentCreateWithoutRecoveryCasesInput, PaymentUncheckedCreateWithoutRecoveryCasesInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutRecoveryCasesInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutRecoveryCasesInput, PaymentUncheckedUpdateWithoutRecoveryCasesInput>
  }

  export type PaymentUpdateWithoutRecoveryCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
    events?: PaymentEventUpdateManyWithoutPaymentNestedInput
    opportunity?: OpportunityUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRecoveryCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: PaymentEventUncheckedUpdateManyWithoutPaymentNestedInput
    opportunity?: OpportunityUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type RecoveryActionUpsertWithWhereUniqueWithoutRecoveryCaseInput = {
    where: RecoveryActionWhereUniqueInput
    update: XOR<RecoveryActionUpdateWithoutRecoveryCaseInput, RecoveryActionUncheckedUpdateWithoutRecoveryCaseInput>
    create: XOR<RecoveryActionCreateWithoutRecoveryCaseInput, RecoveryActionUncheckedCreateWithoutRecoveryCaseInput>
  }

  export type RecoveryActionUpdateWithWhereUniqueWithoutRecoveryCaseInput = {
    where: RecoveryActionWhereUniqueInput
    data: XOR<RecoveryActionUpdateWithoutRecoveryCaseInput, RecoveryActionUncheckedUpdateWithoutRecoveryCaseInput>
  }

  export type RecoveryActionUpdateManyWithWhereWithoutRecoveryCaseInput = {
    where: RecoveryActionScalarWhereInput
    data: XOR<RecoveryActionUpdateManyMutationInput, RecoveryActionUncheckedUpdateManyWithoutRecoveryCaseInput>
  }

  export type RecoveryActionScalarWhereInput = {
    AND?: RecoveryActionScalarWhereInput | RecoveryActionScalarWhereInput[]
    OR?: RecoveryActionScalarWhereInput[]
    NOT?: RecoveryActionScalarWhereInput | RecoveryActionScalarWhereInput[]
    id?: StringFilter<"RecoveryAction"> | string
    recoveryCaseId?: StringFilter<"RecoveryAction"> | string
    actionType?: StringFilter<"RecoveryAction"> | string
    status?: StringFilter<"RecoveryAction"> | string
    createdAt?: DateTimeFilter<"RecoveryAction"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutRecoveryCaseInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutRecoveryCaseInput, AuditLogUncheckedUpdateWithoutRecoveryCaseInput>
    create: XOR<AuditLogCreateWithoutRecoveryCaseInput, AuditLogUncheckedCreateWithoutRecoveryCaseInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutRecoveryCaseInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutRecoveryCaseInput, AuditLogUncheckedUpdateWithoutRecoveryCaseInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutRecoveryCaseInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutRecoveryCaseInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    details?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    recoveryCaseId?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type CustomerUpsertWithoutRecoveryCasesInput = {
    update: XOR<CustomerUpdateWithoutRecoveryCasesInput, CustomerUncheckedUpdateWithoutRecoveryCasesInput>
    create: XOR<CustomerCreateWithoutRecoveryCasesInput, CustomerUncheckedCreateWithoutRecoveryCasesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutRecoveryCasesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutRecoveryCasesInput, CustomerUncheckedUpdateWithoutRecoveryCasesInput>
  }

  export type CustomerUpdateWithoutRecoveryCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
    opportunities?: OpportunityUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutRecoveryCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    opportunities?: OpportunityUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RecoveryCaseCreateWithoutActionsInput = {
    id?: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutRecoveryCasesInput
    auditLogs?: AuditLogCreateNestedManyWithoutRecoveryCaseInput
    customer?: CustomerCreateNestedOneWithoutRecoveryCasesInput
  }

  export type RecoveryCaseUncheckedCreateWithoutActionsInput = {
    id?: string
    paymentId: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRecoveryCaseInput
  }

  export type RecoveryCaseCreateOrConnectWithoutActionsInput = {
    where: RecoveryCaseWhereUniqueInput
    create: XOR<RecoveryCaseCreateWithoutActionsInput, RecoveryCaseUncheckedCreateWithoutActionsInput>
  }

  export type RecoveryCaseUpsertWithoutActionsInput = {
    update: XOR<RecoveryCaseUpdateWithoutActionsInput, RecoveryCaseUncheckedUpdateWithoutActionsInput>
    create: XOR<RecoveryCaseCreateWithoutActionsInput, RecoveryCaseUncheckedCreateWithoutActionsInput>
    where?: RecoveryCaseWhereInput
  }

  export type RecoveryCaseUpdateToOneWithWhereWithoutActionsInput = {
    where?: RecoveryCaseWhereInput
    data: XOR<RecoveryCaseUpdateWithoutActionsInput, RecoveryCaseUncheckedUpdateWithoutActionsInput>
  }

  export type RecoveryCaseUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutRecoveryCasesNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRecoveryCaseNestedInput
    customer?: CustomerUpdateOneWithoutRecoveryCasesNestedInput
  }

  export type RecoveryCaseUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRecoveryCaseNestedInput
  }

  export type RecoveryCaseCreateWithoutAuditLogsInput = {
    id?: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutRecoveryCasesInput
    actions?: RecoveryActionCreateNestedManyWithoutRecoveryCaseInput
    customer?: CustomerCreateNestedOneWithoutRecoveryCasesInput
  }

  export type RecoveryCaseUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    paymentId: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
    actions?: RecoveryActionUncheckedCreateNestedManyWithoutRecoveryCaseInput
  }

  export type RecoveryCaseCreateOrConnectWithoutAuditLogsInput = {
    where: RecoveryCaseWhereUniqueInput
    create: XOR<RecoveryCaseCreateWithoutAuditLogsInput, RecoveryCaseUncheckedCreateWithoutAuditLogsInput>
  }

  export type RecoveryCaseUpsertWithoutAuditLogsInput = {
    update: XOR<RecoveryCaseUpdateWithoutAuditLogsInput, RecoveryCaseUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<RecoveryCaseCreateWithoutAuditLogsInput, RecoveryCaseUncheckedCreateWithoutAuditLogsInput>
    where?: RecoveryCaseWhereInput
  }

  export type RecoveryCaseUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: RecoveryCaseWhereInput
    data: XOR<RecoveryCaseUpdateWithoutAuditLogsInput, RecoveryCaseUncheckedUpdateWithoutAuditLogsInput>
  }

  export type RecoveryCaseUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutRecoveryCasesNestedInput
    actions?: RecoveryActionUpdateManyWithoutRecoveryCaseNestedInput
    customer?: CustomerUpdateOneWithoutRecoveryCasesNestedInput
  }

  export type RecoveryCaseUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: RecoveryActionUncheckedUpdateManyWithoutRecoveryCaseNestedInput
  }

  export type PaymentCreateWithoutOpportunityInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
    events?: PaymentEventCreateNestedManyWithoutPaymentInput
    recoveryCases?: RecoveryCaseCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutOpportunityInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    customerId: string
    createdAt?: Date | string
    events?: PaymentEventUncheckedCreateNestedManyWithoutPaymentInput
    recoveryCases?: RecoveryCaseUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutOpportunityInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOpportunityInput, PaymentUncheckedCreateWithoutOpportunityInput>
  }

  export type CustomerCreateWithoutOpportunitiesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutCustomerInput
    recoveryCases?: RecoveryCaseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOpportunitiesInput = {
    id?: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
    recoveryCases?: RecoveryCaseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOpportunitiesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOpportunitiesInput, CustomerUncheckedCreateWithoutOpportunitiesInput>
  }

  export type PaymentUpsertWithoutOpportunityInput = {
    update: XOR<PaymentUpdateWithoutOpportunityInput, PaymentUncheckedUpdateWithoutOpportunityInput>
    create: XOR<PaymentCreateWithoutOpportunityInput, PaymentUncheckedCreateWithoutOpportunityInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOpportunityInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOpportunityInput, PaymentUncheckedUpdateWithoutOpportunityInput>
  }

  export type PaymentUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
    events?: PaymentEventUpdateManyWithoutPaymentNestedInput
    recoveryCases?: RecoveryCaseUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: PaymentEventUncheckedUpdateManyWithoutPaymentNestedInput
    recoveryCases?: RecoveryCaseUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type CustomerUpsertWithoutOpportunitiesInput = {
    update: XOR<CustomerUpdateWithoutOpportunitiesInput, CustomerUncheckedUpdateWithoutOpportunitiesInput>
    create: XOR<CustomerCreateWithoutOpportunitiesInput, CustomerUncheckedCreateWithoutOpportunitiesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOpportunitiesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOpportunitiesInput, CustomerUncheckedUpdateWithoutOpportunitiesInput>
  }

  export type CustomerUpdateWithoutOpportunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
    recoveryCases?: RecoveryCaseUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOpportunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
    recoveryCases?: RecoveryCaseUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type PaymentCreateManyCustomerInput = {
    id?: string
    amount: number
    currency?: string
    status: string
    createdAt?: Date | string
  }

  export type RecoveryCaseCreateManyCustomerInput = {
    id?: string
    paymentId: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpportunityCreateManyCustomerInput = {
    id?: string
    paymentId: string
    amount: number
    currency?: string
    customerSegment: string
    previousSuccessCount: number
    previousFailureCount: number
    daysSinceLastSuccess?: number | null
    attemptCount: number
    failureReason: string
    opportunityStatus: string
    hoursSinceFailure: number
    checkoutAbandoned: boolean
    lateAuthorization: boolean
    alreadyRecovered: boolean
    naturalRecoveryProbability: number
    recoveredNaturally: boolean
    aiEstimatedLift?: number | null
    aiRecommendedAction?: string | null
    selectedForIntervention?: boolean
    diagnosis?: string | null
    diagnosisReasoning?: string | null
    diagnosisConfidence?: number | null
    aiNaturalRecoveryProbability?: number | null
    aiRecoveryWithInterventionProbability?: number | null
    diagnosedAt?: Date | string | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    selectionReason?: string | null
    policyAllowed?: boolean | null
    policyReason?: string | null
    policyEscalate?: boolean
    action?: string | null
    recovered?: boolean | null
    amountRecovered?: number | null
    interventionUsed?: boolean
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: PaymentEventUpdateManyWithoutPaymentNestedInput
    recoveryCases?: RecoveryCaseUpdateManyWithoutPaymentNestedInput
    opportunity?: OpportunityUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: PaymentEventUncheckedUpdateManyWithoutPaymentNestedInput
    recoveryCases?: RecoveryCaseUncheckedUpdateManyWithoutPaymentNestedInput
    opportunity?: OpportunityUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCaseUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutRecoveryCasesNestedInput
    actions?: RecoveryActionUpdateManyWithoutRecoveryCaseNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRecoveryCaseNestedInput
  }

  export type RecoveryCaseUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actions?: RecoveryActionUncheckedUpdateManyWithoutRecoveryCaseNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRecoveryCaseNestedInput
  }

  export type RecoveryCaseUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    customerSegment?: StringFieldUpdateOperationsInput | string
    previousSuccessCount?: IntFieldUpdateOperationsInput | number
    previousFailureCount?: IntFieldUpdateOperationsInput | number
    daysSinceLastSuccess?: NullableIntFieldUpdateOperationsInput | number | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    failureReason?: StringFieldUpdateOperationsInput | string
    opportunityStatus?: StringFieldUpdateOperationsInput | string
    hoursSinceFailure?: FloatFieldUpdateOperationsInput | number
    checkoutAbandoned?: BoolFieldUpdateOperationsInput | boolean
    lateAuthorization?: BoolFieldUpdateOperationsInput | boolean
    alreadyRecovered?: BoolFieldUpdateOperationsInput | boolean
    naturalRecoveryProbability?: FloatFieldUpdateOperationsInput | number
    recoveredNaturally?: BoolFieldUpdateOperationsInput | boolean
    aiEstimatedLift?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    selectedForIntervention?: BoolFieldUpdateOperationsInput | boolean
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosisConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    aiNaturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    aiRecoveryWithInterventionProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnosedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyAllowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    policyReason?: NullableStringFieldUpdateOperationsInput | string | null
    policyEscalate?: BoolFieldUpdateOperationsInput | boolean
    action?: NullableStringFieldUpdateOperationsInput | string | null
    recovered?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amountRecovered?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventCreateManyPaymentInput = {
    id?: string
    eventId: string
    eventType: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RecoveryCaseCreateManyPaymentInput = {
    id?: string
    diagnosis?: string | null
    confidence?: number | null
    naturalRecoveryProbability?: number | null
    interventionRecoveryProbability?: number | null
    incrementalLift?: number | null
    expectedIncrementalRevenue?: Decimal | DecimalJsLike | number | string | null
    recommendedAction?: $Enums.RecoveryActionType | null
    status?: $Enums.RecoveryCaseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type PaymentEventUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentEventUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryCaseUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actions?: RecoveryActionUpdateManyWithoutRecoveryCaseNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRecoveryCaseNestedInput
    customer?: CustomerUpdateOneWithoutRecoveryCasesNestedInput
  }

  export type RecoveryCaseUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    actions?: RecoveryActionUncheckedUpdateManyWithoutRecoveryCaseNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRecoveryCaseNestedInput
  }

  export type RecoveryCaseUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    confidence?: NullableFloatFieldUpdateOperationsInput | number | null
    naturalRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    interventionRecoveryProbability?: NullableFloatFieldUpdateOperationsInput | number | null
    incrementalLift?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedIncrementalRevenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recommendedAction?: NullableEnumRecoveryActionTypeFieldUpdateOperationsInput | $Enums.RecoveryActionType | null
    status?: EnumRecoveryCaseStatusFieldUpdateOperationsInput | $Enums.RecoveryCaseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecoveryActionCreateManyRecoveryCaseInput = {
    id?: string
    actionType: string
    status: string
    createdAt?: Date | string
  }

  export type AuditLogCreateManyRecoveryCaseInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RecoveryActionUpdateWithoutRecoveryCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryActionUncheckedUpdateWithoutRecoveryCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecoveryActionUncheckedUpdateManyWithoutRecoveryCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutRecoveryCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutRecoveryCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutRecoveryCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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