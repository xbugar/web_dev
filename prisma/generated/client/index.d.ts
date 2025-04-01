
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProfilePicture
 * 
 */
export type ProfilePicture = $Result.DefaultSelection<Prisma.$ProfilePicturePayload>
/**
 * Model Notebook
 * 
 */
export type Notebook = $Result.DefaultSelection<Prisma.$NotebookPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Calendar
 * 
 */
export type Calendar = $Result.DefaultSelection<Prisma.$CalendarPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventTime
 * 
 */
export type EventTime = $Result.DefaultSelection<Prisma.$EventTimePayload>
/**
 * Model FlashDeck
 * 
 */
export type FlashDeck = $Result.DefaultSelection<Prisma.$FlashDeckPayload>
/**
 * Model FlashCard
 * 
 */
export type FlashCard = $Result.DefaultSelection<Prisma.$FlashCardPayload>
/**
 * Model FlashCardAnswer
 * 
 */
export type FlashCardAnswer = $Result.DefaultSelection<Prisma.$FlashCardAnswerPayload>
/**
 * Model Icon
 * 
 */
export type Icon = $Result.DefaultSelection<Prisma.$IconPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profilePicture`: Exposes CRUD operations for the **ProfilePicture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfilePictures
    * const profilePictures = await prisma.profilePicture.findMany()
    * ```
    */
  get profilePicture(): Prisma.ProfilePictureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notebook`: Exposes CRUD operations for the **Notebook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notebooks
    * const notebooks = await prisma.notebook.findMany()
    * ```
    */
  get notebook(): Prisma.NotebookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendar`: Exposes CRUD operations for the **Calendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendars
    * const calendars = await prisma.calendar.findMany()
    * ```
    */
  get calendar(): Prisma.CalendarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventTime`: Exposes CRUD operations for the **EventTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTimes
    * const eventTimes = await prisma.eventTime.findMany()
    * ```
    */
  get eventTime(): Prisma.EventTimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashDeck`: Exposes CRUD operations for the **FlashDeck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashDecks
    * const flashDecks = await prisma.flashDeck.findMany()
    * ```
    */
  get flashDeck(): Prisma.FlashDeckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashCard`: Exposes CRUD operations for the **FlashCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashCards
    * const flashCards = await prisma.flashCard.findMany()
    * ```
    */
  get flashCard(): Prisma.FlashCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flashCardAnswer`: Exposes CRUD operations for the **FlashCardAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlashCardAnswers
    * const flashCardAnswers = await prisma.flashCardAnswer.findMany()
    * ```
    */
  get flashCardAnswer(): Prisma.FlashCardAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.icon`: Exposes CRUD operations for the **Icon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Icons
    * const icons = await prisma.icon.findMany()
    * ```
    */
  get icon(): Prisma.IconDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    ProfilePicture: 'ProfilePicture',
    Notebook: 'Notebook',
    Note: 'Note',
    Calendar: 'Calendar',
    Event: 'Event',
    EventTime: 'EventTime',
    FlashDeck: 'FlashDeck',
    FlashCard: 'FlashCard',
    FlashCardAnswer: 'FlashCardAnswer',
    Icon: 'Icon'
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
      modelProps: "user" | "profilePicture" | "notebook" | "note" | "calendar" | "event" | "eventTime" | "flashDeck" | "flashCard" | "flashCardAnswer" | "icon"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProfilePicture: {
        payload: Prisma.$ProfilePicturePayload<ExtArgs>
        fields: Prisma.ProfilePictureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfilePictureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfilePictureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>
          }
          findFirst: {
            args: Prisma.ProfilePictureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfilePictureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>
          }
          findMany: {
            args: Prisma.ProfilePictureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>[]
          }
          create: {
            args: Prisma.ProfilePictureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>
          }
          createMany: {
            args: Prisma.ProfilePictureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfilePictureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>[]
          }
          delete: {
            args: Prisma.ProfilePictureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>
          }
          update: {
            args: Prisma.ProfilePictureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>
          }
          deleteMany: {
            args: Prisma.ProfilePictureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfilePictureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfilePictureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>[]
          }
          upsert: {
            args: Prisma.ProfilePictureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePicturePayload>
          }
          aggregate: {
            args: Prisma.ProfilePictureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfilePicture>
          }
          groupBy: {
            args: Prisma.ProfilePictureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilePictureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfilePictureCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilePictureCountAggregateOutputType> | number
          }
        }
      }
      Notebook: {
        payload: Prisma.$NotebookPayload<ExtArgs>
        fields: Prisma.NotebookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotebookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotebookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          findFirst: {
            args: Prisma.NotebookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotebookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          findMany: {
            args: Prisma.NotebookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>[]
          }
          create: {
            args: Prisma.NotebookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          createMany: {
            args: Prisma.NotebookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotebookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>[]
          }
          delete: {
            args: Prisma.NotebookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          update: {
            args: Prisma.NotebookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          deleteMany: {
            args: Prisma.NotebookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotebookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotebookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>[]
          }
          upsert: {
            args: Prisma.NotebookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          aggregate: {
            args: Prisma.NotebookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotebook>
          }
          groupBy: {
            args: Prisma.NotebookGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotebookGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotebookCountArgs<ExtArgs>
            result: $Utils.Optional<NotebookCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Calendar: {
        payload: Prisma.$CalendarPayload<ExtArgs>
        fields: Prisma.CalendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          findFirst: {
            args: Prisma.CalendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          findMany: {
            args: Prisma.CalendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          create: {
            args: Prisma.CalendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          createMany: {
            args: Prisma.CalendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          delete: {
            args: Prisma.CalendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          update: {
            args: Prisma.CalendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          deleteMany: {
            args: Prisma.CalendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          upsert: {
            args: Prisma.CalendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          aggregate: {
            args: Prisma.CalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendar>
          }
          groupBy: {
            args: Prisma.CalendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventTime: {
        payload: Prisma.$EventTimePayload<ExtArgs>
        fields: Prisma.EventTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>
          }
          findFirst: {
            args: Prisma.EventTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>
          }
          findMany: {
            args: Prisma.EventTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>[]
          }
          create: {
            args: Prisma.EventTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>
          }
          createMany: {
            args: Prisma.EventTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>[]
          }
          delete: {
            args: Prisma.EventTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>
          }
          update: {
            args: Prisma.EventTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>
          }
          deleteMany: {
            args: Prisma.EventTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>[]
          }
          upsert: {
            args: Prisma.EventTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTimePayload>
          }
          aggregate: {
            args: Prisma.EventTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventTime>
          }
          groupBy: {
            args: Prisma.EventTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTimeCountArgs<ExtArgs>
            result: $Utils.Optional<EventTimeCountAggregateOutputType> | number
          }
        }
      }
      FlashDeck: {
        payload: Prisma.$FlashDeckPayload<ExtArgs>
        fields: Prisma.FlashDeckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashDeckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashDeckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>
          }
          findFirst: {
            args: Prisma.FlashDeckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashDeckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>
          }
          findMany: {
            args: Prisma.FlashDeckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>[]
          }
          create: {
            args: Prisma.FlashDeckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>
          }
          createMany: {
            args: Prisma.FlashDeckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashDeckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>[]
          }
          delete: {
            args: Prisma.FlashDeckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>
          }
          update: {
            args: Prisma.FlashDeckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>
          }
          deleteMany: {
            args: Prisma.FlashDeckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashDeckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashDeckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>[]
          }
          upsert: {
            args: Prisma.FlashDeckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashDeckPayload>
          }
          aggregate: {
            args: Prisma.FlashDeckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashDeck>
          }
          groupBy: {
            args: Prisma.FlashDeckGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashDeckGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashDeckCountArgs<ExtArgs>
            result: $Utils.Optional<FlashDeckCountAggregateOutputType> | number
          }
        }
      }
      FlashCard: {
        payload: Prisma.$FlashCardPayload<ExtArgs>
        fields: Prisma.FlashCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          findFirst: {
            args: Prisma.FlashCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          findMany: {
            args: Prisma.FlashCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          create: {
            args: Prisma.FlashCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          createMany: {
            args: Prisma.FlashCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          delete: {
            args: Prisma.FlashCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          update: {
            args: Prisma.FlashCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          deleteMany: {
            args: Prisma.FlashCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>[]
          }
          upsert: {
            args: Prisma.FlashCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardPayload>
          }
          aggregate: {
            args: Prisma.FlashCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashCard>
          }
          groupBy: {
            args: Prisma.FlashCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashCardCountArgs<ExtArgs>
            result: $Utils.Optional<FlashCardCountAggregateOutputType> | number
          }
        }
      }
      FlashCardAnswer: {
        payload: Prisma.$FlashCardAnswerPayload<ExtArgs>
        fields: Prisma.FlashCardAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlashCardAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlashCardAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>
          }
          findFirst: {
            args: Prisma.FlashCardAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlashCardAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>
          }
          findMany: {
            args: Prisma.FlashCardAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>[]
          }
          create: {
            args: Prisma.FlashCardAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>
          }
          createMany: {
            args: Prisma.FlashCardAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlashCardAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>[]
          }
          delete: {
            args: Prisma.FlashCardAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>
          }
          update: {
            args: Prisma.FlashCardAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>
          }
          deleteMany: {
            args: Prisma.FlashCardAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlashCardAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlashCardAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>[]
          }
          upsert: {
            args: Prisma.FlashCardAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlashCardAnswerPayload>
          }
          aggregate: {
            args: Prisma.FlashCardAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlashCardAnswer>
          }
          groupBy: {
            args: Prisma.FlashCardAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlashCardAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlashCardAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<FlashCardAnswerCountAggregateOutputType> | number
          }
        }
      }
      Icon: {
        payload: Prisma.$IconPayload<ExtArgs>
        fields: Prisma.IconFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IconFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IconFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          findFirst: {
            args: Prisma.IconFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IconFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          findMany: {
            args: Prisma.IconFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>[]
          }
          create: {
            args: Prisma.IconCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          createMany: {
            args: Prisma.IconCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IconCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>[]
          }
          delete: {
            args: Prisma.IconDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          update: {
            args: Prisma.IconUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          deleteMany: {
            args: Prisma.IconDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IconUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IconUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>[]
          }
          upsert: {
            args: Prisma.IconUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IconPayload>
          }
          aggregate: {
            args: Prisma.IconAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIcon>
          }
          groupBy: {
            args: Prisma.IconGroupByArgs<ExtArgs>
            result: $Utils.Optional<IconGroupByOutputType>[]
          }
          count: {
            args: Prisma.IconCountArgs<ExtArgs>
            result: $Utils.Optional<IconCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    profilePicture?: ProfilePictureOmit
    notebook?: NotebookOmit
    note?: NoteOmit
    calendar?: CalendarOmit
    event?: EventOmit
    eventTime?: EventTimeOmit
    flashDeck?: FlashDeckOmit
    flashCard?: FlashCardOmit
    flashCardAnswer?: FlashCardAnswerOmit
    icon?: IconOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notebooks: number
    flashDecks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notebooks?: boolean | UserCountOutputTypeCountNotebooksArgs
    flashDecks?: boolean | UserCountOutputTypeCountFlashDecksArgs
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
  export type UserCountOutputTypeCountNotebooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotebookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlashDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashDeckWhereInput
  }


  /**
   * Count Type ProfilePictureCountOutputType
   */

  export type ProfilePictureCountOutputType = {
    users: number
  }

  export type ProfilePictureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ProfilePictureCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ProfilePictureCountOutputType without action
   */
  export type ProfilePictureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePictureCountOutputType
     */
    select?: ProfilePictureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfilePictureCountOutputType without action
   */
  export type ProfilePictureCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type NotebookCountOutputType
   */

  export type NotebookCountOutputType = {
    notes: number
    flashDecks: number
  }

  export type NotebookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | NotebookCountOutputTypeCountNotesArgs
    flashDecks?: boolean | NotebookCountOutputTypeCountFlashDecksArgs
  }

  // Custom InputTypes
  /**
   * NotebookCountOutputType without action
   */
  export type NotebookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookCountOutputType
     */
    select?: NotebookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotebookCountOutputType without action
   */
  export type NotebookCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * NotebookCountOutputType without action
   */
  export type NotebookCountOutputTypeCountFlashDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashDeckWhereInput
  }


  /**
   * Count Type CalendarCountOutputType
   */

  export type CalendarCountOutputType = {
    events: number
  }

  export type CalendarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CalendarCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarCountOutputType
     */
    select?: CalendarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    eventTimes: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventTimes?: boolean | EventCountOutputTypeCountEventTimesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTimeWhereInput
  }


  /**
   * Count Type FlashDeckCountOutputType
   */

  export type FlashDeckCountOutputType = {
    flashCards: number
  }

  export type FlashDeckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashCards?: boolean | FlashDeckCountOutputTypeCountFlashCardsArgs
  }

  // Custom InputTypes
  /**
   * FlashDeckCountOutputType without action
   */
  export type FlashDeckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeckCountOutputType
     */
    select?: FlashDeckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlashDeckCountOutputType without action
   */
  export type FlashDeckCountOutputTypeCountFlashCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardWhereInput
  }


  /**
   * Count Type FlashCardCountOutputType
   */

  export type FlashCardCountOutputType = {
    answers: number
  }

  export type FlashCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | FlashCardCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * FlashCardCountOutputType without action
   */
  export type FlashCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardCountOutputType
     */
    select?: FlashCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlashCardCountOutputType without action
   */
  export type FlashCardCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardAnswerWhereInput
  }


  /**
   * Count Type IconCountOutputType
   */

  export type IconCountOutputType = {
    notebooks: number
    flashDecks: number
  }

  export type IconCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notebooks?: boolean | IconCountOutputTypeCountNotebooksArgs
    flashDecks?: boolean | IconCountOutputTypeCountFlashDecksArgs
  }

  // Custom InputTypes
  /**
   * IconCountOutputType without action
   */
  export type IconCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IconCountOutputType
     */
    select?: IconCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IconCountOutputType without action
   */
  export type IconCountOutputTypeCountNotebooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotebookWhereInput
  }

  /**
   * IconCountOutputType without action
   */
  export type IconCountOutputTypeCountFlashDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashDeckWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    isAdmin: boolean | null
    hashedPassword: string | null
    passwordSalt: string | null
    profilePictureId: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    isAdmin: boolean | null
    hashedPassword: string | null
    passwordSalt: string | null
    profilePictureId: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    firstName: number
    lastName: number
    email: number
    isAdmin: number
    hashedPassword: number
    passwordSalt: number
    profilePictureId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    isAdmin?: true
    hashedPassword?: true
    passwordSalt?: true
    profilePictureId?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    isAdmin?: true
    hashedPassword?: true
    passwordSalt?: true
    profilePictureId?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    email?: true
    isAdmin?: true
    hashedPassword?: true
    passwordSalt?: true
    profilePictureId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    firstName: string
    lastName: string
    email: string
    isAdmin: boolean
    hashedPassword: string
    passwordSalt: string
    profilePictureId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    isAdmin?: boolean
    hashedPassword?: boolean
    passwordSalt?: boolean
    profilePictureId?: boolean
    profilePicture?: boolean | ProfilePictureDefaultArgs<ExtArgs>
    notebooks?: boolean | User$notebooksArgs<ExtArgs>
    calendar?: boolean | User$calendarArgs<ExtArgs>
    flashDecks?: boolean | User$flashDecksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    isAdmin?: boolean
    hashedPassword?: boolean
    passwordSalt?: boolean
    profilePictureId?: boolean
    profilePicture?: boolean | ProfilePictureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    isAdmin?: boolean
    hashedPassword?: boolean
    passwordSalt?: boolean
    profilePictureId?: boolean
    profilePicture?: boolean | ProfilePictureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    isAdmin?: boolean
    hashedPassword?: boolean
    passwordSalt?: boolean
    profilePictureId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "firstName" | "lastName" | "email" | "isAdmin" | "hashedPassword" | "passwordSalt" | "profilePictureId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profilePicture?: boolean | ProfilePictureDefaultArgs<ExtArgs>
    notebooks?: boolean | User$notebooksArgs<ExtArgs>
    calendar?: boolean | User$calendarArgs<ExtArgs>
    flashDecks?: boolean | User$flashDecksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profilePicture?: boolean | ProfilePictureDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profilePicture?: boolean | ProfilePictureDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profilePicture: Prisma.$ProfilePicturePayload<ExtArgs>
      notebooks: Prisma.$NotebookPayload<ExtArgs>[]
      calendar: Prisma.$CalendarPayload<ExtArgs> | null
      flashDecks: Prisma.$FlashDeckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      firstName: string
      lastName: string
      email: string
      isAdmin: boolean
      hashedPassword: string
      passwordSalt: string
      profilePictureId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profilePicture<T extends ProfilePictureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfilePictureDefaultArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notebooks<T extends User$notebooksArgs<ExtArgs> = {}>(args?: Subset<T, User$notebooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendar<T extends User$calendarArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flashDecks<T extends User$flashDecksArgs<ExtArgs> = {}>(args?: Subset<T, User$flashDecksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly passwordSalt: FieldRef<"User", 'String'>
    readonly profilePictureId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notebooks
   */
  export type User$notebooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    where?: NotebookWhereInput
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    cursor?: NotebookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotebookScalarFieldEnum | NotebookScalarFieldEnum[]
  }

  /**
   * User.calendar
   */
  export type User$calendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    where?: CalendarWhereInput
  }

  /**
   * User.flashDecks
   */
  export type User$flashDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    where?: FlashDeckWhereInput
    orderBy?: FlashDeckOrderByWithRelationInput | FlashDeckOrderByWithRelationInput[]
    cursor?: FlashDeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashDeckScalarFieldEnum | FlashDeckScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ProfilePicture
   */

  export type AggregateProfilePicture = {
    _count: ProfilePictureCountAggregateOutputType | null
    _min: ProfilePictureMinAggregateOutputType | null
    _max: ProfilePictureMaxAggregateOutputType | null
  }

  export type ProfilePictureMinAggregateOutputType = {
    profilePictureId: string | null
    picture: Uint8Array | null
  }

  export type ProfilePictureMaxAggregateOutputType = {
    profilePictureId: string | null
    picture: Uint8Array | null
  }

  export type ProfilePictureCountAggregateOutputType = {
    profilePictureId: number
    picture: number
    _all: number
  }


  export type ProfilePictureMinAggregateInputType = {
    profilePictureId?: true
    picture?: true
  }

  export type ProfilePictureMaxAggregateInputType = {
    profilePictureId?: true
    picture?: true
  }

  export type ProfilePictureCountAggregateInputType = {
    profilePictureId?: true
    picture?: true
    _all?: true
  }

  export type ProfilePictureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfilePicture to aggregate.
     */
    where?: ProfilePictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilePictures to fetch.
     */
    orderBy?: ProfilePictureOrderByWithRelationInput | ProfilePictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfilePictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilePictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilePictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfilePictures
    **/
    _count?: true | ProfilePictureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilePictureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilePictureMaxAggregateInputType
  }

  export type GetProfilePictureAggregateType<T extends ProfilePictureAggregateArgs> = {
        [P in keyof T & keyof AggregateProfilePicture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfilePicture[P]>
      : GetScalarType<T[P], AggregateProfilePicture[P]>
  }




  export type ProfilePictureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfilePictureWhereInput
    orderBy?: ProfilePictureOrderByWithAggregationInput | ProfilePictureOrderByWithAggregationInput[]
    by: ProfilePictureScalarFieldEnum[] | ProfilePictureScalarFieldEnum
    having?: ProfilePictureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilePictureCountAggregateInputType | true
    _min?: ProfilePictureMinAggregateInputType
    _max?: ProfilePictureMaxAggregateInputType
  }

  export type ProfilePictureGroupByOutputType = {
    profilePictureId: string
    picture: Uint8Array
    _count: ProfilePictureCountAggregateOutputType | null
    _min: ProfilePictureMinAggregateOutputType | null
    _max: ProfilePictureMaxAggregateOutputType | null
  }

  type GetProfilePictureGroupByPayload<T extends ProfilePictureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilePictureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilePictureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilePictureGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilePictureGroupByOutputType[P]>
        }
      >
    >


  export type ProfilePictureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profilePictureId?: boolean
    picture?: boolean
    users?: boolean | ProfilePicture$usersArgs<ExtArgs>
    _count?: boolean | ProfilePictureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profilePicture"]>

  export type ProfilePictureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profilePictureId?: boolean
    picture?: boolean
  }, ExtArgs["result"]["profilePicture"]>

  export type ProfilePictureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profilePictureId?: boolean
    picture?: boolean
  }, ExtArgs["result"]["profilePicture"]>

  export type ProfilePictureSelectScalar = {
    profilePictureId?: boolean
    picture?: boolean
  }

  export type ProfilePictureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profilePictureId" | "picture", ExtArgs["result"]["profilePicture"]>
  export type ProfilePictureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ProfilePicture$usersArgs<ExtArgs>
    _count?: boolean | ProfilePictureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfilePictureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfilePictureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePicturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfilePicture"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      profilePictureId: string
      picture: Uint8Array
    }, ExtArgs["result"]["profilePicture"]>
    composites: {}
  }

  type ProfilePictureGetPayload<S extends boolean | null | undefined | ProfilePictureDefaultArgs> = $Result.GetResult<Prisma.$ProfilePicturePayload, S>

  type ProfilePictureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfilePictureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilePictureCountAggregateInputType | true
    }

  export interface ProfilePictureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfilePicture'], meta: { name: 'ProfilePicture' } }
    /**
     * Find zero or one ProfilePicture that matches the filter.
     * @param {ProfilePictureFindUniqueArgs} args - Arguments to find a ProfilePicture
     * @example
     * // Get one ProfilePicture
     * const profilePicture = await prisma.profilePicture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfilePictureFindUniqueArgs>(args: SelectSubset<T, ProfilePictureFindUniqueArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfilePicture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfilePictureFindUniqueOrThrowArgs} args - Arguments to find a ProfilePicture
     * @example
     * // Get one ProfilePicture
     * const profilePicture = await prisma.profilePicture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfilePictureFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfilePictureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfilePicture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePictureFindFirstArgs} args - Arguments to find a ProfilePicture
     * @example
     * // Get one ProfilePicture
     * const profilePicture = await prisma.profilePicture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfilePictureFindFirstArgs>(args?: SelectSubset<T, ProfilePictureFindFirstArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfilePicture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePictureFindFirstOrThrowArgs} args - Arguments to find a ProfilePicture
     * @example
     * // Get one ProfilePicture
     * const profilePicture = await prisma.profilePicture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfilePictureFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfilePictureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfilePictures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePictureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfilePictures
     * const profilePictures = await prisma.profilePicture.findMany()
     * 
     * // Get first 10 ProfilePictures
     * const profilePictures = await prisma.profilePicture.findMany({ take: 10 })
     * 
     * // Only select the `profilePictureId`
     * const profilePictureWithProfilePictureIdOnly = await prisma.profilePicture.findMany({ select: { profilePictureId: true } })
     * 
     */
    findMany<T extends ProfilePictureFindManyArgs>(args?: SelectSubset<T, ProfilePictureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfilePicture.
     * @param {ProfilePictureCreateArgs} args - Arguments to create a ProfilePicture.
     * @example
     * // Create one ProfilePicture
     * const ProfilePicture = await prisma.profilePicture.create({
     *   data: {
     *     // ... data to create a ProfilePicture
     *   }
     * })
     * 
     */
    create<T extends ProfilePictureCreateArgs>(args: SelectSubset<T, ProfilePictureCreateArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfilePictures.
     * @param {ProfilePictureCreateManyArgs} args - Arguments to create many ProfilePictures.
     * @example
     * // Create many ProfilePictures
     * const profilePicture = await prisma.profilePicture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfilePictureCreateManyArgs>(args?: SelectSubset<T, ProfilePictureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfilePictures and returns the data saved in the database.
     * @param {ProfilePictureCreateManyAndReturnArgs} args - Arguments to create many ProfilePictures.
     * @example
     * // Create many ProfilePictures
     * const profilePicture = await prisma.profilePicture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfilePictures and only return the `profilePictureId`
     * const profilePictureWithProfilePictureIdOnly = await prisma.profilePicture.createManyAndReturn({
     *   select: { profilePictureId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfilePictureCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfilePictureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfilePicture.
     * @param {ProfilePictureDeleteArgs} args - Arguments to delete one ProfilePicture.
     * @example
     * // Delete one ProfilePicture
     * const ProfilePicture = await prisma.profilePicture.delete({
     *   where: {
     *     // ... filter to delete one ProfilePicture
     *   }
     * })
     * 
     */
    delete<T extends ProfilePictureDeleteArgs>(args: SelectSubset<T, ProfilePictureDeleteArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfilePicture.
     * @param {ProfilePictureUpdateArgs} args - Arguments to update one ProfilePicture.
     * @example
     * // Update one ProfilePicture
     * const profilePicture = await prisma.profilePicture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfilePictureUpdateArgs>(args: SelectSubset<T, ProfilePictureUpdateArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfilePictures.
     * @param {ProfilePictureDeleteManyArgs} args - Arguments to filter ProfilePictures to delete.
     * @example
     * // Delete a few ProfilePictures
     * const { count } = await prisma.profilePicture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfilePictureDeleteManyArgs>(args?: SelectSubset<T, ProfilePictureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfilePictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePictureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfilePictures
     * const profilePicture = await prisma.profilePicture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfilePictureUpdateManyArgs>(args: SelectSubset<T, ProfilePictureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfilePictures and returns the data updated in the database.
     * @param {ProfilePictureUpdateManyAndReturnArgs} args - Arguments to update many ProfilePictures.
     * @example
     * // Update many ProfilePictures
     * const profilePicture = await prisma.profilePicture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfilePictures and only return the `profilePictureId`
     * const profilePictureWithProfilePictureIdOnly = await prisma.profilePicture.updateManyAndReturn({
     *   select: { profilePictureId: true },
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
    updateManyAndReturn<T extends ProfilePictureUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfilePictureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfilePicture.
     * @param {ProfilePictureUpsertArgs} args - Arguments to update or create a ProfilePicture.
     * @example
     * // Update or create a ProfilePicture
     * const profilePicture = await prisma.profilePicture.upsert({
     *   create: {
     *     // ... data to create a ProfilePicture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfilePicture we want to update
     *   }
     * })
     */
    upsert<T extends ProfilePictureUpsertArgs>(args: SelectSubset<T, ProfilePictureUpsertArgs<ExtArgs>>): Prisma__ProfilePictureClient<$Result.GetResult<Prisma.$ProfilePicturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfilePictures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePictureCountArgs} args - Arguments to filter ProfilePictures to count.
     * @example
     * // Count the number of ProfilePictures
     * const count = await prisma.profilePicture.count({
     *   where: {
     *     // ... the filter for the ProfilePictures we want to count
     *   }
     * })
    **/
    count<T extends ProfilePictureCountArgs>(
      args?: Subset<T, ProfilePictureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilePictureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfilePicture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePictureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilePictureAggregateArgs>(args: Subset<T, ProfilePictureAggregateArgs>): Prisma.PrismaPromise<GetProfilePictureAggregateType<T>>

    /**
     * Group by ProfilePicture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilePictureGroupByArgs} args - Group by arguments.
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
      T extends ProfilePictureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilePictureGroupByArgs['orderBy'] }
        : { orderBy?: ProfilePictureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfilePictureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilePictureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfilePicture model
   */
  readonly fields: ProfilePictureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfilePicture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfilePictureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends ProfilePicture$usersArgs<ExtArgs> = {}>(args?: Subset<T, ProfilePicture$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProfilePicture model
   */ 
  interface ProfilePictureFieldRefs {
    readonly profilePictureId: FieldRef<"ProfilePicture", 'String'>
    readonly picture: FieldRef<"ProfilePicture", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * ProfilePicture findUnique
   */
  export type ProfilePictureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePicture to fetch.
     */
    where: ProfilePictureWhereUniqueInput
  }

  /**
   * ProfilePicture findUniqueOrThrow
   */
  export type ProfilePictureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePicture to fetch.
     */
    where: ProfilePictureWhereUniqueInput
  }

  /**
   * ProfilePicture findFirst
   */
  export type ProfilePictureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePicture to fetch.
     */
    where?: ProfilePictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilePictures to fetch.
     */
    orderBy?: ProfilePictureOrderByWithRelationInput | ProfilePictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfilePictures.
     */
    cursor?: ProfilePictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilePictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilePictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfilePictures.
     */
    distinct?: ProfilePictureScalarFieldEnum | ProfilePictureScalarFieldEnum[]
  }

  /**
   * ProfilePicture findFirstOrThrow
   */
  export type ProfilePictureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePicture to fetch.
     */
    where?: ProfilePictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilePictures to fetch.
     */
    orderBy?: ProfilePictureOrderByWithRelationInput | ProfilePictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfilePictures.
     */
    cursor?: ProfilePictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilePictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilePictures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfilePictures.
     */
    distinct?: ProfilePictureScalarFieldEnum | ProfilePictureScalarFieldEnum[]
  }

  /**
   * ProfilePicture findMany
   */
  export type ProfilePictureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * Filter, which ProfilePictures to fetch.
     */
    where?: ProfilePictureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfilePictures to fetch.
     */
    orderBy?: ProfilePictureOrderByWithRelationInput | ProfilePictureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfilePictures.
     */
    cursor?: ProfilePictureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfilePictures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfilePictures.
     */
    skip?: number
    distinct?: ProfilePictureScalarFieldEnum | ProfilePictureScalarFieldEnum[]
  }

  /**
   * ProfilePicture create
   */
  export type ProfilePictureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfilePicture.
     */
    data: XOR<ProfilePictureCreateInput, ProfilePictureUncheckedCreateInput>
  }

  /**
   * ProfilePicture createMany
   */
  export type ProfilePictureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfilePictures.
     */
    data: ProfilePictureCreateManyInput | ProfilePictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfilePicture createManyAndReturn
   */
  export type ProfilePictureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * The data used to create many ProfilePictures.
     */
    data: ProfilePictureCreateManyInput | ProfilePictureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfilePicture update
   */
  export type ProfilePictureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfilePicture.
     */
    data: XOR<ProfilePictureUpdateInput, ProfilePictureUncheckedUpdateInput>
    /**
     * Choose, which ProfilePicture to update.
     */
    where: ProfilePictureWhereUniqueInput
  }

  /**
   * ProfilePicture updateMany
   */
  export type ProfilePictureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfilePictures.
     */
    data: XOR<ProfilePictureUpdateManyMutationInput, ProfilePictureUncheckedUpdateManyInput>
    /**
     * Filter which ProfilePictures to update
     */
    where?: ProfilePictureWhereInput
    /**
     * Limit how many ProfilePictures to update.
     */
    limit?: number
  }

  /**
   * ProfilePicture updateManyAndReturn
   */
  export type ProfilePictureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * The data used to update ProfilePictures.
     */
    data: XOR<ProfilePictureUpdateManyMutationInput, ProfilePictureUncheckedUpdateManyInput>
    /**
     * Filter which ProfilePictures to update
     */
    where?: ProfilePictureWhereInput
    /**
     * Limit how many ProfilePictures to update.
     */
    limit?: number
  }

  /**
   * ProfilePicture upsert
   */
  export type ProfilePictureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfilePicture to update in case it exists.
     */
    where: ProfilePictureWhereUniqueInput
    /**
     * In case the ProfilePicture found by the `where` argument doesn't exist, create a new ProfilePicture with this data.
     */
    create: XOR<ProfilePictureCreateInput, ProfilePictureUncheckedCreateInput>
    /**
     * In case the ProfilePicture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfilePictureUpdateInput, ProfilePictureUncheckedUpdateInput>
  }

  /**
   * ProfilePicture delete
   */
  export type ProfilePictureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
    /**
     * Filter which ProfilePicture to delete.
     */
    where: ProfilePictureWhereUniqueInput
  }

  /**
   * ProfilePicture deleteMany
   */
  export type ProfilePictureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfilePictures to delete
     */
    where?: ProfilePictureWhereInput
    /**
     * Limit how many ProfilePictures to delete.
     */
    limit?: number
  }

  /**
   * ProfilePicture.users
   */
  export type ProfilePicture$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * ProfilePicture without action
   */
  export type ProfilePictureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfilePicture
     */
    select?: ProfilePictureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfilePicture
     */
    omit?: ProfilePictureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfilePictureInclude<ExtArgs> | null
  }


  /**
   * Model Notebook
   */

  export type AggregateNotebook = {
    _count: NotebookCountAggregateOutputType | null
    _min: NotebookMinAggregateOutputType | null
    _max: NotebookMaxAggregateOutputType | null
  }

  export type NotebookMinAggregateOutputType = {
    notebookId: string | null
    title: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
    iconId: string | null
  }

  export type NotebookMaxAggregateOutputType = {
    notebookId: string | null
    title: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ownerId: string | null
    iconId: string | null
  }

  export type NotebookCountAggregateOutputType = {
    notebookId: number
    title: number
    color: number
    tags: number
    createdAt: number
    updatedAt: number
    ownerId: number
    iconId: number
    _all: number
  }


  export type NotebookMinAggregateInputType = {
    notebookId?: true
    title?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    iconId?: true
  }

  export type NotebookMaxAggregateInputType = {
    notebookId?: true
    title?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    iconId?: true
  }

  export type NotebookCountAggregateInputType = {
    notebookId?: true
    title?: true
    color?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    ownerId?: true
    iconId?: true
    _all?: true
  }

  export type NotebookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notebook to aggregate.
     */
    where?: NotebookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notebooks to fetch.
     */
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotebookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notebooks
    **/
    _count?: true | NotebookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotebookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotebookMaxAggregateInputType
  }

  export type GetNotebookAggregateType<T extends NotebookAggregateArgs> = {
        [P in keyof T & keyof AggregateNotebook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotebook[P]>
      : GetScalarType<T[P], AggregateNotebook[P]>
  }




  export type NotebookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotebookWhereInput
    orderBy?: NotebookOrderByWithAggregationInput | NotebookOrderByWithAggregationInput[]
    by: NotebookScalarFieldEnum[] | NotebookScalarFieldEnum
    having?: NotebookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotebookCountAggregateInputType | true
    _min?: NotebookMinAggregateInputType
    _max?: NotebookMaxAggregateInputType
  }

  export type NotebookGroupByOutputType = {
    notebookId: string
    title: string
    color: string | null
    tags: string[]
    createdAt: Date
    updatedAt: Date
    ownerId: string
    iconId: string
    _count: NotebookCountAggregateOutputType | null
    _min: NotebookMinAggregateOutputType | null
    _max: NotebookMaxAggregateOutputType | null
  }

  type GetNotebookGroupByPayload<T extends NotebookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotebookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotebookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotebookGroupByOutputType[P]>
            : GetScalarType<T[P], NotebookGroupByOutputType[P]>
        }
      >
    >


  export type NotebookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notebookId?: boolean
    title?: boolean
    color?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    iconId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
    notes?: boolean | Notebook$notesArgs<ExtArgs>
    flashDecks?: boolean | Notebook$flashDecksArgs<ExtArgs>
    _count?: boolean | NotebookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notebook"]>

  export type NotebookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notebookId?: boolean
    title?: boolean
    color?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    iconId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notebook"]>

  export type NotebookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notebookId?: boolean
    title?: boolean
    color?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    iconId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notebook"]>

  export type NotebookSelectScalar = {
    notebookId?: boolean
    title?: boolean
    color?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownerId?: boolean
    iconId?: boolean
  }

  export type NotebookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notebookId" | "title" | "color" | "tags" | "createdAt" | "updatedAt" | "ownerId" | "iconId", ExtArgs["result"]["notebook"]>
  export type NotebookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
    notes?: boolean | Notebook$notesArgs<ExtArgs>
    flashDecks?: boolean | Notebook$flashDecksArgs<ExtArgs>
    _count?: boolean | NotebookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotebookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
  }
  export type NotebookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
  }

  export type $NotebookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notebook"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      icon: Prisma.$IconPayload<ExtArgs>
      notes: Prisma.$NotePayload<ExtArgs>[]
      flashDecks: Prisma.$FlashDeckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      notebookId: string
      title: string
      color: string | null
      tags: string[]
      createdAt: Date
      updatedAt: Date
      ownerId: string
      iconId: string
    }, ExtArgs["result"]["notebook"]>
    composites: {}
  }

  type NotebookGetPayload<S extends boolean | null | undefined | NotebookDefaultArgs> = $Result.GetResult<Prisma.$NotebookPayload, S>

  type NotebookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotebookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotebookCountAggregateInputType | true
    }

  export interface NotebookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notebook'], meta: { name: 'Notebook' } }
    /**
     * Find zero or one Notebook that matches the filter.
     * @param {NotebookFindUniqueArgs} args - Arguments to find a Notebook
     * @example
     * // Get one Notebook
     * const notebook = await prisma.notebook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotebookFindUniqueArgs>(args: SelectSubset<T, NotebookFindUniqueArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notebook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotebookFindUniqueOrThrowArgs} args - Arguments to find a Notebook
     * @example
     * // Get one Notebook
     * const notebook = await prisma.notebook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotebookFindUniqueOrThrowArgs>(args: SelectSubset<T, NotebookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notebook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookFindFirstArgs} args - Arguments to find a Notebook
     * @example
     * // Get one Notebook
     * const notebook = await prisma.notebook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotebookFindFirstArgs>(args?: SelectSubset<T, NotebookFindFirstArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notebook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookFindFirstOrThrowArgs} args - Arguments to find a Notebook
     * @example
     * // Get one Notebook
     * const notebook = await prisma.notebook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotebookFindFirstOrThrowArgs>(args?: SelectSubset<T, NotebookFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notebooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notebooks
     * const notebooks = await prisma.notebook.findMany()
     * 
     * // Get first 10 Notebooks
     * const notebooks = await prisma.notebook.findMany({ take: 10 })
     * 
     * // Only select the `notebookId`
     * const notebookWithNotebookIdOnly = await prisma.notebook.findMany({ select: { notebookId: true } })
     * 
     */
    findMany<T extends NotebookFindManyArgs>(args?: SelectSubset<T, NotebookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notebook.
     * @param {NotebookCreateArgs} args - Arguments to create a Notebook.
     * @example
     * // Create one Notebook
     * const Notebook = await prisma.notebook.create({
     *   data: {
     *     // ... data to create a Notebook
     *   }
     * })
     * 
     */
    create<T extends NotebookCreateArgs>(args: SelectSubset<T, NotebookCreateArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notebooks.
     * @param {NotebookCreateManyArgs} args - Arguments to create many Notebooks.
     * @example
     * // Create many Notebooks
     * const notebook = await prisma.notebook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotebookCreateManyArgs>(args?: SelectSubset<T, NotebookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notebooks and returns the data saved in the database.
     * @param {NotebookCreateManyAndReturnArgs} args - Arguments to create many Notebooks.
     * @example
     * // Create many Notebooks
     * const notebook = await prisma.notebook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notebooks and only return the `notebookId`
     * const notebookWithNotebookIdOnly = await prisma.notebook.createManyAndReturn({
     *   select: { notebookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotebookCreateManyAndReturnArgs>(args?: SelectSubset<T, NotebookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notebook.
     * @param {NotebookDeleteArgs} args - Arguments to delete one Notebook.
     * @example
     * // Delete one Notebook
     * const Notebook = await prisma.notebook.delete({
     *   where: {
     *     // ... filter to delete one Notebook
     *   }
     * })
     * 
     */
    delete<T extends NotebookDeleteArgs>(args: SelectSubset<T, NotebookDeleteArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notebook.
     * @param {NotebookUpdateArgs} args - Arguments to update one Notebook.
     * @example
     * // Update one Notebook
     * const notebook = await prisma.notebook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotebookUpdateArgs>(args: SelectSubset<T, NotebookUpdateArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notebooks.
     * @param {NotebookDeleteManyArgs} args - Arguments to filter Notebooks to delete.
     * @example
     * // Delete a few Notebooks
     * const { count } = await prisma.notebook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotebookDeleteManyArgs>(args?: SelectSubset<T, NotebookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notebooks
     * const notebook = await prisma.notebook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotebookUpdateManyArgs>(args: SelectSubset<T, NotebookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notebooks and returns the data updated in the database.
     * @param {NotebookUpdateManyAndReturnArgs} args - Arguments to update many Notebooks.
     * @example
     * // Update many Notebooks
     * const notebook = await prisma.notebook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notebooks and only return the `notebookId`
     * const notebookWithNotebookIdOnly = await prisma.notebook.updateManyAndReturn({
     *   select: { notebookId: true },
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
    updateManyAndReturn<T extends NotebookUpdateManyAndReturnArgs>(args: SelectSubset<T, NotebookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notebook.
     * @param {NotebookUpsertArgs} args - Arguments to update or create a Notebook.
     * @example
     * // Update or create a Notebook
     * const notebook = await prisma.notebook.upsert({
     *   create: {
     *     // ... data to create a Notebook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notebook we want to update
     *   }
     * })
     */
    upsert<T extends NotebookUpsertArgs>(args: SelectSubset<T, NotebookUpsertArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookCountArgs} args - Arguments to filter Notebooks to count.
     * @example
     * // Count the number of Notebooks
     * const count = await prisma.notebook.count({
     *   where: {
     *     // ... the filter for the Notebooks we want to count
     *   }
     * })
    **/
    count<T extends NotebookCountArgs>(
      args?: Subset<T, NotebookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotebookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotebookAggregateArgs>(args: Subset<T, NotebookAggregateArgs>): Prisma.PrismaPromise<GetNotebookAggregateType<T>>

    /**
     * Group by Notebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookGroupByArgs} args - Group by arguments.
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
      T extends NotebookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotebookGroupByArgs['orderBy'] }
        : { orderBy?: NotebookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotebookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotebookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notebook model
   */
  readonly fields: NotebookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notebook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotebookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    icon<T extends IconDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IconDefaultArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notes<T extends Notebook$notesArgs<ExtArgs> = {}>(args?: Subset<T, Notebook$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flashDecks<T extends Notebook$flashDecksArgs<ExtArgs> = {}>(args?: Subset<T, Notebook$flashDecksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Notebook model
   */ 
  interface NotebookFieldRefs {
    readonly notebookId: FieldRef<"Notebook", 'String'>
    readonly title: FieldRef<"Notebook", 'String'>
    readonly color: FieldRef<"Notebook", 'String'>
    readonly tags: FieldRef<"Notebook", 'String[]'>
    readonly createdAt: FieldRef<"Notebook", 'DateTime'>
    readonly updatedAt: FieldRef<"Notebook", 'DateTime'>
    readonly ownerId: FieldRef<"Notebook", 'String'>
    readonly iconId: FieldRef<"Notebook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notebook findUnique
   */
  export type NotebookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebook to fetch.
     */
    where: NotebookWhereUniqueInput
  }

  /**
   * Notebook findUniqueOrThrow
   */
  export type NotebookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebook to fetch.
     */
    where: NotebookWhereUniqueInput
  }

  /**
   * Notebook findFirst
   */
  export type NotebookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebook to fetch.
     */
    where?: NotebookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notebooks to fetch.
     */
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notebooks.
     */
    cursor?: NotebookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notebooks.
     */
    distinct?: NotebookScalarFieldEnum | NotebookScalarFieldEnum[]
  }

  /**
   * Notebook findFirstOrThrow
   */
  export type NotebookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebook to fetch.
     */
    where?: NotebookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notebooks to fetch.
     */
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notebooks.
     */
    cursor?: NotebookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notebooks.
     */
    distinct?: NotebookScalarFieldEnum | NotebookScalarFieldEnum[]
  }

  /**
   * Notebook findMany
   */
  export type NotebookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebooks to fetch.
     */
    where?: NotebookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notebooks to fetch.
     */
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notebooks.
     */
    cursor?: NotebookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notebooks.
     */
    skip?: number
    distinct?: NotebookScalarFieldEnum | NotebookScalarFieldEnum[]
  }

  /**
   * Notebook create
   */
  export type NotebookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * The data needed to create a Notebook.
     */
    data: XOR<NotebookCreateInput, NotebookUncheckedCreateInput>
  }

  /**
   * Notebook createMany
   */
  export type NotebookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notebooks.
     */
    data: NotebookCreateManyInput | NotebookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notebook createManyAndReturn
   */
  export type NotebookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * The data used to create many Notebooks.
     */
    data: NotebookCreateManyInput | NotebookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notebook update
   */
  export type NotebookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * The data needed to update a Notebook.
     */
    data: XOR<NotebookUpdateInput, NotebookUncheckedUpdateInput>
    /**
     * Choose, which Notebook to update.
     */
    where: NotebookWhereUniqueInput
  }

  /**
   * Notebook updateMany
   */
  export type NotebookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notebooks.
     */
    data: XOR<NotebookUpdateManyMutationInput, NotebookUncheckedUpdateManyInput>
    /**
     * Filter which Notebooks to update
     */
    where?: NotebookWhereInput
    /**
     * Limit how many Notebooks to update.
     */
    limit?: number
  }

  /**
   * Notebook updateManyAndReturn
   */
  export type NotebookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * The data used to update Notebooks.
     */
    data: XOR<NotebookUpdateManyMutationInput, NotebookUncheckedUpdateManyInput>
    /**
     * Filter which Notebooks to update
     */
    where?: NotebookWhereInput
    /**
     * Limit how many Notebooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notebook upsert
   */
  export type NotebookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * The filter to search for the Notebook to update in case it exists.
     */
    where: NotebookWhereUniqueInput
    /**
     * In case the Notebook found by the `where` argument doesn't exist, create a new Notebook with this data.
     */
    create: XOR<NotebookCreateInput, NotebookUncheckedCreateInput>
    /**
     * In case the Notebook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotebookUpdateInput, NotebookUncheckedUpdateInput>
  }

  /**
   * Notebook delete
   */
  export type NotebookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter which Notebook to delete.
     */
    where: NotebookWhereUniqueInput
  }

  /**
   * Notebook deleteMany
   */
  export type NotebookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notebooks to delete
     */
    where?: NotebookWhereInput
    /**
     * Limit how many Notebooks to delete.
     */
    limit?: number
  }

  /**
   * Notebook.notes
   */
  export type Notebook$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Notebook.flashDecks
   */
  export type Notebook$flashDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    where?: FlashDeckWhereInput
    orderBy?: FlashDeckOrderByWithRelationInput | FlashDeckOrderByWithRelationInput[]
    cursor?: FlashDeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashDeckScalarFieldEnum | FlashDeckScalarFieldEnum[]
  }

  /**
   * Notebook without action
   */
  export type NotebookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    noteId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    notebookId: string | null
  }

  export type NoteMaxAggregateOutputType = {
    noteId: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    notebookId: string | null
  }

  export type NoteCountAggregateOutputType = {
    noteId: number
    title: number
    content: number
    tags: number
    createdAt: number
    updatedAt: number
    notebookId: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    noteId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    notebookId?: true
  }

  export type NoteMaxAggregateInputType = {
    noteId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    notebookId?: true
  }

  export type NoteCountAggregateInputType = {
    noteId?: true
    title?: true
    content?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    notebookId?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    noteId: string
    title: string
    content: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
    notebookId: string
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notebookId?: boolean
    notebook?: boolean | NotebookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notebookId?: boolean
    notebook?: boolean | NotebookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notebookId?: boolean
    notebook?: boolean | NotebookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    noteId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notebookId?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"noteId" | "title" | "content" | "tags" | "createdAt" | "updatedAt" | "notebookId", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notebook?: boolean | NotebookDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notebook?: boolean | NotebookDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notebook?: boolean | NotebookDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      notebook: Prisma.$NotebookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      noteId: string
      title: string
      content: string
      tags: string[]
      createdAt: Date
      updatedAt: Date
      notebookId: string
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `noteId`
     * const noteWithNoteIdOnly = await prisma.note.findMany({ select: { noteId: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `noteId`
     * const noteWithNoteIdOnly = await prisma.note.createManyAndReturn({
     *   select: { noteId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `noteId`
     * const noteWithNoteIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { noteId: true },
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notebook<T extends NotebookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotebookDefaultArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Note model
   */ 
  interface NoteFieldRefs {
    readonly noteId: FieldRef<"Note", 'String'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly tags: FieldRef<"Note", 'String[]'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
    readonly notebookId: FieldRef<"Note", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Calendar
   */

  export type AggregateCalendar = {
    _count: CalendarCountAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  export type CalendarMinAggregateOutputType = {
    calendarId: string | null
    title: string | null
    color: string | null
    userId: string | null
  }

  export type CalendarMaxAggregateOutputType = {
    calendarId: string | null
    title: string | null
    color: string | null
    userId: string | null
  }

  export type CalendarCountAggregateOutputType = {
    calendarId: number
    title: number
    color: number
    userId: number
    _all: number
  }


  export type CalendarMinAggregateInputType = {
    calendarId?: true
    title?: true
    color?: true
    userId?: true
  }

  export type CalendarMaxAggregateInputType = {
    calendarId?: true
    title?: true
    color?: true
    userId?: true
  }

  export type CalendarCountAggregateInputType = {
    calendarId?: true
    title?: true
    color?: true
    userId?: true
    _all?: true
  }

  export type CalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendar to aggregate.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calendars
    **/
    _count?: true | CalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarMaxAggregateInputType
  }

  export type GetCalendarAggregateType<T extends CalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendar[P]>
      : GetScalarType<T[P], AggregateCalendar[P]>
  }




  export type CalendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarWhereInput
    orderBy?: CalendarOrderByWithAggregationInput | CalendarOrderByWithAggregationInput[]
    by: CalendarScalarFieldEnum[] | CalendarScalarFieldEnum
    having?: CalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarCountAggregateInputType | true
    _min?: CalendarMinAggregateInputType
    _max?: CalendarMaxAggregateInputType
  }

  export type CalendarGroupByOutputType = {
    calendarId: string
    title: string
    color: string | null
    userId: string
    _count: CalendarCountAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  type GetCalendarGroupByPayload<T extends CalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarGroupByOutputType[P]>
        }
      >
    >


  export type CalendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    calendarId?: boolean
    title?: boolean
    color?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    events?: boolean | Calendar$eventsArgs<ExtArgs>
    _count?: boolean | CalendarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar"]>

  export type CalendarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    calendarId?: boolean
    title?: boolean
    color?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar"]>

  export type CalendarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    calendarId?: boolean
    title?: boolean
    color?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar"]>

  export type CalendarSelectScalar = {
    calendarId?: boolean
    title?: boolean
    color?: boolean
    userId?: boolean
  }

  export type CalendarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"calendarId" | "title" | "color" | "userId", ExtArgs["result"]["calendar"]>
  export type CalendarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    events?: boolean | Calendar$eventsArgs<ExtArgs>
    _count?: boolean | CalendarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CalendarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CalendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calendar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      calendarId: string
      title: string
      color: string | null
      userId: string
    }, ExtArgs["result"]["calendar"]>
    composites: {}
  }

  type CalendarGetPayload<S extends boolean | null | undefined | CalendarDefaultArgs> = $Result.GetResult<Prisma.$CalendarPayload, S>

  type CalendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarCountAggregateInputType | true
    }

  export interface CalendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calendar'], meta: { name: 'Calendar' } }
    /**
     * Find zero or one Calendar that matches the filter.
     * @param {CalendarFindUniqueArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarFindUniqueArgs>(args: SelectSubset<T, CalendarFindUniqueArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarFindUniqueOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarFindFirstArgs>(args?: SelectSubset<T, CalendarFindFirstArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendars
     * const calendars = await prisma.calendar.findMany()
     * 
     * // Get first 10 Calendars
     * const calendars = await prisma.calendar.findMany({ take: 10 })
     * 
     * // Only select the `calendarId`
     * const calendarWithCalendarIdOnly = await prisma.calendar.findMany({ select: { calendarId: true } })
     * 
     */
    findMany<T extends CalendarFindManyArgs>(args?: SelectSubset<T, CalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendar.
     * @param {CalendarCreateArgs} args - Arguments to create a Calendar.
     * @example
     * // Create one Calendar
     * const Calendar = await prisma.calendar.create({
     *   data: {
     *     // ... data to create a Calendar
     *   }
     * })
     * 
     */
    create<T extends CalendarCreateArgs>(args: SelectSubset<T, CalendarCreateArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendars.
     * @param {CalendarCreateManyArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendar = await prisma.calendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarCreateManyArgs>(args?: SelectSubset<T, CalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calendars and returns the data saved in the database.
     * @param {CalendarCreateManyAndReturnArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendar = await prisma.calendar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calendars and only return the `calendarId`
     * const calendarWithCalendarIdOnly = await prisma.calendar.createManyAndReturn({
     *   select: { calendarId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calendar.
     * @param {CalendarDeleteArgs} args - Arguments to delete one Calendar.
     * @example
     * // Delete one Calendar
     * const Calendar = await prisma.calendar.delete({
     *   where: {
     *     // ... filter to delete one Calendar
     *   }
     * })
     * 
     */
    delete<T extends CalendarDeleteArgs>(args: SelectSubset<T, CalendarDeleteArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendar.
     * @param {CalendarUpdateArgs} args - Arguments to update one Calendar.
     * @example
     * // Update one Calendar
     * const calendar = await prisma.calendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarUpdateArgs>(args: SelectSubset<T, CalendarUpdateArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendars.
     * @param {CalendarDeleteManyArgs} args - Arguments to filter Calendars to delete.
     * @example
     * // Delete a few Calendars
     * const { count } = await prisma.calendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarDeleteManyArgs>(args?: SelectSubset<T, CalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendars
     * const calendar = await prisma.calendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarUpdateManyArgs>(args: SelectSubset<T, CalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars and returns the data updated in the database.
     * @param {CalendarUpdateManyAndReturnArgs} args - Arguments to update many Calendars.
     * @example
     * // Update many Calendars
     * const calendar = await prisma.calendar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calendars and only return the `calendarId`
     * const calendarWithCalendarIdOnly = await prisma.calendar.updateManyAndReturn({
     *   select: { calendarId: true },
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
    updateManyAndReturn<T extends CalendarUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calendar.
     * @param {CalendarUpsertArgs} args - Arguments to update or create a Calendar.
     * @example
     * // Update or create a Calendar
     * const calendar = await prisma.calendar.upsert({
     *   create: {
     *     // ... data to create a Calendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendar we want to update
     *   }
     * })
     */
    upsert<T extends CalendarUpsertArgs>(args: SelectSubset<T, CalendarUpsertArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarCountArgs} args - Arguments to filter Calendars to count.
     * @example
     * // Count the number of Calendars
     * const count = await prisma.calendar.count({
     *   where: {
     *     // ... the filter for the Calendars we want to count
     *   }
     * })
    **/
    count<T extends CalendarCountArgs>(
      args?: Subset<T, CalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendarAggregateArgs>(args: Subset<T, CalendarAggregateArgs>): Prisma.PrismaPromise<GetCalendarAggregateType<T>>

    /**
     * Group by Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarGroupByArgs} args - Group by arguments.
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
      T extends CalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarGroupByArgs['orderBy'] }
        : { orderBy?: CalendarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calendar model
   */
  readonly fields: CalendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Calendar$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Calendar$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Calendar model
   */ 
  interface CalendarFieldRefs {
    readonly calendarId: FieldRef<"Calendar", 'String'>
    readonly title: FieldRef<"Calendar", 'String'>
    readonly color: FieldRef<"Calendar", 'String'>
    readonly userId: FieldRef<"Calendar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Calendar findUnique
   */
  export type CalendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findUniqueOrThrow
   */
  export type CalendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findFirst
   */
  export type CalendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar findFirstOrThrow
   */
  export type CalendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar findMany
   */
  export type CalendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendars to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar create
   */
  export type CalendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The data needed to create a Calendar.
     */
    data: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
  }

  /**
   * Calendar createMany
   */
  export type CalendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calendars.
     */
    data: CalendarCreateManyInput | CalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calendar createManyAndReturn
   */
  export type CalendarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * The data used to create many Calendars.
     */
    data: CalendarCreateManyInput | CalendarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calendar update
   */
  export type CalendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The data needed to update a Calendar.
     */
    data: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
    /**
     * Choose, which Calendar to update.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar updateMany
   */
  export type CalendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calendars.
     */
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyInput>
    /**
     * Filter which Calendars to update
     */
    where?: CalendarWhereInput
    /**
     * Limit how many Calendars to update.
     */
    limit?: number
  }

  /**
   * Calendar updateManyAndReturn
   */
  export type CalendarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * The data used to update Calendars.
     */
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyInput>
    /**
     * Filter which Calendars to update
     */
    where?: CalendarWhereInput
    /**
     * Limit how many Calendars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calendar upsert
   */
  export type CalendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The filter to search for the Calendar to update in case it exists.
     */
    where: CalendarWhereUniqueInput
    /**
     * In case the Calendar found by the `where` argument doesn't exist, create a new Calendar with this data.
     */
    create: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
    /**
     * In case the Calendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
  }

  /**
   * Calendar delete
   */
  export type CalendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter which Calendar to delete.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar deleteMany
   */
  export type CalendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendars to delete
     */
    where?: CalendarWhereInput
    /**
     * Limit how many Calendars to delete.
     */
    limit?: number
  }

  /**
   * Calendar.events
   */
  export type Calendar$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Calendar without action
   */
  export type CalendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    eventId: string | null
    title: string | null
    description: string | null
    color: string | null
    calendarId: string | null
  }

  export type EventMaxAggregateOutputType = {
    eventId: string | null
    title: string | null
    description: string | null
    color: string | null
    calendarId: string | null
  }

  export type EventCountAggregateOutputType = {
    eventId: number
    title: number
    description: number
    tags: number
    color: number
    calendarId: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    eventId?: true
    title?: true
    description?: true
    color?: true
    calendarId?: true
  }

  export type EventMaxAggregateInputType = {
    eventId?: true
    title?: true
    description?: true
    color?: true
    calendarId?: true
  }

  export type EventCountAggregateInputType = {
    eventId?: true
    title?: true
    description?: true
    tags?: true
    color?: true
    calendarId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    eventId: string
    title: string
    description: string
    tags: string[]
    color: string | null
    calendarId: string
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    color?: boolean
    calendarId?: boolean
    calendar?: boolean | CalendarDefaultArgs<ExtArgs>
    eventTimes?: boolean | Event$eventTimesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    color?: boolean
    calendarId?: boolean
    calendar?: boolean | CalendarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    color?: boolean
    calendarId?: boolean
    calendar?: boolean | CalendarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    eventId?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    color?: boolean
    calendarId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "title" | "description" | "tags" | "color" | "calendarId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | CalendarDefaultArgs<ExtArgs>
    eventTimes?: boolean | Event$eventTimesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | CalendarDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | CalendarDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      calendar: Prisma.$CalendarPayload<ExtArgs>
      eventTimes: Prisma.$EventTimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      title: string
      description: string
      tags: string[]
      color: string | null
      calendarId: string
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventWithEventIdOnly = await prisma.event.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `eventId`
     * const eventWithEventIdOnly = await prisma.event.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `eventId`
     * const eventWithEventIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { eventId: true },
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calendar<T extends CalendarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CalendarDefaultArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventTimes<T extends Event$eventTimesArgs<ExtArgs> = {}>(args?: Subset<T, Event$eventTimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly eventId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly tags: FieldRef<"Event", 'String[]'>
    readonly color: FieldRef<"Event", 'String'>
    readonly calendarId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.eventTimes
   */
  export type Event$eventTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    where?: EventTimeWhereInput
    orderBy?: EventTimeOrderByWithRelationInput | EventTimeOrderByWithRelationInput[]
    cursor?: EventTimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventTimeScalarFieldEnum | EventTimeScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventTime
   */

  export type AggregateEventTime = {
    _count: EventTimeCountAggregateOutputType | null
    _min: EventTimeMinAggregateOutputType | null
    _max: EventTimeMaxAggregateOutputType | null
  }

  export type EventTimeMinAggregateOutputType = {
    eventTimeId: string | null
    date: Date | null
    start_time: Date | null
    end_time: Date | null
    eventId: string | null
  }

  export type EventTimeMaxAggregateOutputType = {
    eventTimeId: string | null
    date: Date | null
    start_time: Date | null
    end_time: Date | null
    eventId: string | null
  }

  export type EventTimeCountAggregateOutputType = {
    eventTimeId: number
    date: number
    start_time: number
    end_time: number
    eventId: number
    _all: number
  }


  export type EventTimeMinAggregateInputType = {
    eventTimeId?: true
    date?: true
    start_time?: true
    end_time?: true
    eventId?: true
  }

  export type EventTimeMaxAggregateInputType = {
    eventTimeId?: true
    date?: true
    start_time?: true
    end_time?: true
    eventId?: true
  }

  export type EventTimeCountAggregateInputType = {
    eventTimeId?: true
    date?: true
    start_time?: true
    end_time?: true
    eventId?: true
    _all?: true
  }

  export type EventTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTime to aggregate.
     */
    where?: EventTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTimes to fetch.
     */
    orderBy?: EventTimeOrderByWithRelationInput | EventTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTimes
    **/
    _count?: true | EventTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTimeMaxAggregateInputType
  }

  export type GetEventTimeAggregateType<T extends EventTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTime[P]>
      : GetScalarType<T[P], AggregateEventTime[P]>
  }




  export type EventTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTimeWhereInput
    orderBy?: EventTimeOrderByWithAggregationInput | EventTimeOrderByWithAggregationInput[]
    by: EventTimeScalarFieldEnum[] | EventTimeScalarFieldEnum
    having?: EventTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTimeCountAggregateInputType | true
    _min?: EventTimeMinAggregateInputType
    _max?: EventTimeMaxAggregateInputType
  }

  export type EventTimeGroupByOutputType = {
    eventTimeId: string
    date: Date
    start_time: Date
    end_time: Date
    eventId: string
    _count: EventTimeCountAggregateOutputType | null
    _min: EventTimeMinAggregateOutputType | null
    _max: EventTimeMaxAggregateOutputType | null
  }

  type GetEventTimeGroupByPayload<T extends EventTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTimeGroupByOutputType[P]>
            : GetScalarType<T[P], EventTimeGroupByOutputType[P]>
        }
      >
    >


  export type EventTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventTimeId?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTime"]>

  export type EventTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventTimeId?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTime"]>

  export type EventTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventTimeId?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTime"]>

  export type EventTimeSelectScalar = {
    eventTimeId?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    eventId?: boolean
  }

  export type EventTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventTimeId" | "date" | "start_time" | "end_time" | "eventId", ExtArgs["result"]["eventTime"]>
  export type EventTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventTimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventTimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventTime"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      eventTimeId: string
      date: Date
      start_time: Date
      end_time: Date
      eventId: string
    }, ExtArgs["result"]["eventTime"]>
    composites: {}
  }

  type EventTimeGetPayload<S extends boolean | null | undefined | EventTimeDefaultArgs> = $Result.GetResult<Prisma.$EventTimePayload, S>

  type EventTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventTimeCountAggregateInputType | true
    }

  export interface EventTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventTime'], meta: { name: 'EventTime' } }
    /**
     * Find zero or one EventTime that matches the filter.
     * @param {EventTimeFindUniqueArgs} args - Arguments to find a EventTime
     * @example
     * // Get one EventTime
     * const eventTime = await prisma.eventTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTimeFindUniqueArgs>(args: SelectSubset<T, EventTimeFindUniqueArgs<ExtArgs>>): Prisma__EventTimeClient<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTimeFindUniqueOrThrowArgs} args - Arguments to find a EventTime
     * @example
     * // Get one EventTime
     * const eventTime = await prisma.eventTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTimeClient<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTimeFindFirstArgs} args - Arguments to find a EventTime
     * @example
     * // Get one EventTime
     * const eventTime = await prisma.eventTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTimeFindFirstArgs>(args?: SelectSubset<T, EventTimeFindFirstArgs<ExtArgs>>): Prisma__EventTimeClient<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTimeFindFirstOrThrowArgs} args - Arguments to find a EventTime
     * @example
     * // Get one EventTime
     * const eventTime = await prisma.eventTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTimeClient<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTimes
     * const eventTimes = await prisma.eventTime.findMany()
     * 
     * // Get first 10 EventTimes
     * const eventTimes = await prisma.eventTime.findMany({ take: 10 })
     * 
     * // Only select the `eventTimeId`
     * const eventTimeWithEventTimeIdOnly = await prisma.eventTime.findMany({ select: { eventTimeId: true } })
     * 
     */
    findMany<T extends EventTimeFindManyArgs>(args?: SelectSubset<T, EventTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventTime.
     * @param {EventTimeCreateArgs} args - Arguments to create a EventTime.
     * @example
     * // Create one EventTime
     * const EventTime = await prisma.eventTime.create({
     *   data: {
     *     // ... data to create a EventTime
     *   }
     * })
     * 
     */
    create<T extends EventTimeCreateArgs>(args: SelectSubset<T, EventTimeCreateArgs<ExtArgs>>): Prisma__EventTimeClient<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventTimes.
     * @param {EventTimeCreateManyArgs} args - Arguments to create many EventTimes.
     * @example
     * // Create many EventTimes
     * const eventTime = await prisma.eventTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTimeCreateManyArgs>(args?: SelectSubset<T, EventTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTimes and returns the data saved in the database.
     * @param {EventTimeCreateManyAndReturnArgs} args - Arguments to create many EventTimes.
     * @example
     * // Create many EventTimes
     * const eventTime = await prisma.eventTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTimes and only return the `eventTimeId`
     * const eventTimeWithEventTimeIdOnly = await prisma.eventTime.createManyAndReturn({
     *   select: { eventTimeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventTime.
     * @param {EventTimeDeleteArgs} args - Arguments to delete one EventTime.
     * @example
     * // Delete one EventTime
     * const EventTime = await prisma.eventTime.delete({
     *   where: {
     *     // ... filter to delete one EventTime
     *   }
     * })
     * 
     */
    delete<T extends EventTimeDeleteArgs>(args: SelectSubset<T, EventTimeDeleteArgs<ExtArgs>>): Prisma__EventTimeClient<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventTime.
     * @param {EventTimeUpdateArgs} args - Arguments to update one EventTime.
     * @example
     * // Update one EventTime
     * const eventTime = await prisma.eventTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTimeUpdateArgs>(args: SelectSubset<T, EventTimeUpdateArgs<ExtArgs>>): Prisma__EventTimeClient<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventTimes.
     * @param {EventTimeDeleteManyArgs} args - Arguments to filter EventTimes to delete.
     * @example
     * // Delete a few EventTimes
     * const { count } = await prisma.eventTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTimeDeleteManyArgs>(args?: SelectSubset<T, EventTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTimes
     * const eventTime = await prisma.eventTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTimeUpdateManyArgs>(args: SelectSubset<T, EventTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTimes and returns the data updated in the database.
     * @param {EventTimeUpdateManyAndReturnArgs} args - Arguments to update many EventTimes.
     * @example
     * // Update many EventTimes
     * const eventTime = await prisma.eventTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventTimes and only return the `eventTimeId`
     * const eventTimeWithEventTimeIdOnly = await prisma.eventTime.updateManyAndReturn({
     *   select: { eventTimeId: true },
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
    updateManyAndReturn<T extends EventTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, EventTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventTime.
     * @param {EventTimeUpsertArgs} args - Arguments to update or create a EventTime.
     * @example
     * // Update or create a EventTime
     * const eventTime = await prisma.eventTime.upsert({
     *   create: {
     *     // ... data to create a EventTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTime we want to update
     *   }
     * })
     */
    upsert<T extends EventTimeUpsertArgs>(args: SelectSubset<T, EventTimeUpsertArgs<ExtArgs>>): Prisma__EventTimeClient<$Result.GetResult<Prisma.$EventTimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTimeCountArgs} args - Arguments to filter EventTimes to count.
     * @example
     * // Count the number of EventTimes
     * const count = await prisma.eventTime.count({
     *   where: {
     *     // ... the filter for the EventTimes we want to count
     *   }
     * })
    **/
    count<T extends EventTimeCountArgs>(
      args?: Subset<T, EventTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTimeAggregateArgs>(args: Subset<T, EventTimeAggregateArgs>): Prisma.PrismaPromise<GetEventTimeAggregateType<T>>

    /**
     * Group by EventTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTimeGroupByArgs} args - Group by arguments.
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
      T extends EventTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTimeGroupByArgs['orderBy'] }
        : { orderBy?: EventTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventTime model
   */
  readonly fields: EventTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventTime model
   */ 
  interface EventTimeFieldRefs {
    readonly eventTimeId: FieldRef<"EventTime", 'String'>
    readonly date: FieldRef<"EventTime", 'DateTime'>
    readonly start_time: FieldRef<"EventTime", 'DateTime'>
    readonly end_time: FieldRef<"EventTime", 'DateTime'>
    readonly eventId: FieldRef<"EventTime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventTime findUnique
   */
  export type EventTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventTime to fetch.
     */
    where: EventTimeWhereUniqueInput
  }

  /**
   * EventTime findUniqueOrThrow
   */
  export type EventTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventTime to fetch.
     */
    where: EventTimeWhereUniqueInput
  }

  /**
   * EventTime findFirst
   */
  export type EventTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventTime to fetch.
     */
    where?: EventTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTimes to fetch.
     */
    orderBy?: EventTimeOrderByWithRelationInput | EventTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTimes.
     */
    cursor?: EventTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTimes.
     */
    distinct?: EventTimeScalarFieldEnum | EventTimeScalarFieldEnum[]
  }

  /**
   * EventTime findFirstOrThrow
   */
  export type EventTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventTime to fetch.
     */
    where?: EventTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTimes to fetch.
     */
    orderBy?: EventTimeOrderByWithRelationInput | EventTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTimes.
     */
    cursor?: EventTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTimes.
     */
    distinct?: EventTimeScalarFieldEnum | EventTimeScalarFieldEnum[]
  }

  /**
   * EventTime findMany
   */
  export type EventTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * Filter, which EventTimes to fetch.
     */
    where?: EventTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTimes to fetch.
     */
    orderBy?: EventTimeOrderByWithRelationInput | EventTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTimes.
     */
    cursor?: EventTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTimes.
     */
    skip?: number
    distinct?: EventTimeScalarFieldEnum | EventTimeScalarFieldEnum[]
  }

  /**
   * EventTime create
   */
  export type EventTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventTime.
     */
    data: XOR<EventTimeCreateInput, EventTimeUncheckedCreateInput>
  }

  /**
   * EventTime createMany
   */
  export type EventTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTimes.
     */
    data: EventTimeCreateManyInput | EventTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTime createManyAndReturn
   */
  export type EventTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * The data used to create many EventTimes.
     */
    data: EventTimeCreateManyInput | EventTimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventTime update
   */
  export type EventTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventTime.
     */
    data: XOR<EventTimeUpdateInput, EventTimeUncheckedUpdateInput>
    /**
     * Choose, which EventTime to update.
     */
    where: EventTimeWhereUniqueInput
  }

  /**
   * EventTime updateMany
   */
  export type EventTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTimes.
     */
    data: XOR<EventTimeUpdateManyMutationInput, EventTimeUncheckedUpdateManyInput>
    /**
     * Filter which EventTimes to update
     */
    where?: EventTimeWhereInput
    /**
     * Limit how many EventTimes to update.
     */
    limit?: number
  }

  /**
   * EventTime updateManyAndReturn
   */
  export type EventTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * The data used to update EventTimes.
     */
    data: XOR<EventTimeUpdateManyMutationInput, EventTimeUncheckedUpdateManyInput>
    /**
     * Filter which EventTimes to update
     */
    where?: EventTimeWhereInput
    /**
     * Limit how many EventTimes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventTime upsert
   */
  export type EventTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventTime to update in case it exists.
     */
    where: EventTimeWhereUniqueInput
    /**
     * In case the EventTime found by the `where` argument doesn't exist, create a new EventTime with this data.
     */
    create: XOR<EventTimeCreateInput, EventTimeUncheckedCreateInput>
    /**
     * In case the EventTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTimeUpdateInput, EventTimeUncheckedUpdateInput>
  }

  /**
   * EventTime delete
   */
  export type EventTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
    /**
     * Filter which EventTime to delete.
     */
    where: EventTimeWhereUniqueInput
  }

  /**
   * EventTime deleteMany
   */
  export type EventTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTimes to delete
     */
    where?: EventTimeWhereInput
    /**
     * Limit how many EventTimes to delete.
     */
    limit?: number
  }

  /**
   * EventTime without action
   */
  export type EventTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTime
     */
    select?: EventTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTime
     */
    omit?: EventTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTimeInclude<ExtArgs> | null
  }


  /**
   * Model FlashDeck
   */

  export type AggregateFlashDeck = {
    _count: FlashDeckCountAggregateOutputType | null
    _min: FlashDeckMinAggregateOutputType | null
    _max: FlashDeckMaxAggregateOutputType | null
  }

  export type FlashDeckMinAggregateOutputType = {
    flashDeckId: string | null
    title: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    iconId: string | null
    notebookId: string | null
  }

  export type FlashDeckMaxAggregateOutputType = {
    flashDeckId: string | null
    title: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    iconId: string | null
    notebookId: string | null
  }

  export type FlashDeckCountAggregateOutputType = {
    flashDeckId: number
    title: number
    description: number
    color: number
    tags: number
    createdAt: number
    updatedAt: number
    userId: number
    iconId: number
    notebookId: number
    _all: number
  }


  export type FlashDeckMinAggregateInputType = {
    flashDeckId?: true
    title?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    iconId?: true
    notebookId?: true
  }

  export type FlashDeckMaxAggregateInputType = {
    flashDeckId?: true
    title?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    iconId?: true
    notebookId?: true
  }

  export type FlashDeckCountAggregateInputType = {
    flashDeckId?: true
    title?: true
    description?: true
    color?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    iconId?: true
    notebookId?: true
    _all?: true
  }

  export type FlashDeckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashDeck to aggregate.
     */
    where?: FlashDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashDecks to fetch.
     */
    orderBy?: FlashDeckOrderByWithRelationInput | FlashDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashDecks
    **/
    _count?: true | FlashDeckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashDeckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashDeckMaxAggregateInputType
  }

  export type GetFlashDeckAggregateType<T extends FlashDeckAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashDeck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashDeck[P]>
      : GetScalarType<T[P], AggregateFlashDeck[P]>
  }




  export type FlashDeckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashDeckWhereInput
    orderBy?: FlashDeckOrderByWithAggregationInput | FlashDeckOrderByWithAggregationInput[]
    by: FlashDeckScalarFieldEnum[] | FlashDeckScalarFieldEnum
    having?: FlashDeckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashDeckCountAggregateInputType | true
    _min?: FlashDeckMinAggregateInputType
    _max?: FlashDeckMaxAggregateInputType
  }

  export type FlashDeckGroupByOutputType = {
    flashDeckId: string
    title: string
    description: string
    color: string | null
    tags: string[]
    createdAt: Date
    updatedAt: Date
    userId: string
    iconId: string
    notebookId: string | null
    _count: FlashDeckCountAggregateOutputType | null
    _min: FlashDeckMinAggregateOutputType | null
    _max: FlashDeckMaxAggregateOutputType | null
  }

  type GetFlashDeckGroupByPayload<T extends FlashDeckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashDeckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashDeckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashDeckGroupByOutputType[P]>
            : GetScalarType<T[P], FlashDeckGroupByOutputType[P]>
        }
      >
    >


  export type FlashDeckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashDeckId?: boolean
    title?: boolean
    description?: boolean
    color?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    iconId?: boolean
    notebookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
    notebook?: boolean | FlashDeck$notebookArgs<ExtArgs>
    flashCards?: boolean | FlashDeck$flashCardsArgs<ExtArgs>
    _count?: boolean | FlashDeckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashDeck"]>

  export type FlashDeckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashDeckId?: boolean
    title?: boolean
    description?: boolean
    color?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    iconId?: boolean
    notebookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
    notebook?: boolean | FlashDeck$notebookArgs<ExtArgs>
  }, ExtArgs["result"]["flashDeck"]>

  export type FlashDeckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashDeckId?: boolean
    title?: boolean
    description?: boolean
    color?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    iconId?: boolean
    notebookId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
    notebook?: boolean | FlashDeck$notebookArgs<ExtArgs>
  }, ExtArgs["result"]["flashDeck"]>

  export type FlashDeckSelectScalar = {
    flashDeckId?: boolean
    title?: boolean
    description?: boolean
    color?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    iconId?: boolean
    notebookId?: boolean
  }

  export type FlashDeckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flashDeckId" | "title" | "description" | "color" | "tags" | "createdAt" | "updatedAt" | "userId" | "iconId" | "notebookId", ExtArgs["result"]["flashDeck"]>
  export type FlashDeckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
    notebook?: boolean | FlashDeck$notebookArgs<ExtArgs>
    flashCards?: boolean | FlashDeck$flashCardsArgs<ExtArgs>
    _count?: boolean | FlashDeckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlashDeckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
    notebook?: boolean | FlashDeck$notebookArgs<ExtArgs>
  }
  export type FlashDeckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    icon?: boolean | IconDefaultArgs<ExtArgs>
    notebook?: boolean | FlashDeck$notebookArgs<ExtArgs>
  }

  export type $FlashDeckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashDeck"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      icon: Prisma.$IconPayload<ExtArgs>
      notebook: Prisma.$NotebookPayload<ExtArgs> | null
      flashCards: Prisma.$FlashCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      flashDeckId: string
      title: string
      description: string
      color: string | null
      tags: string[]
      createdAt: Date
      updatedAt: Date
      userId: string
      iconId: string
      notebookId: string | null
    }, ExtArgs["result"]["flashDeck"]>
    composites: {}
  }

  type FlashDeckGetPayload<S extends boolean | null | undefined | FlashDeckDefaultArgs> = $Result.GetResult<Prisma.$FlashDeckPayload, S>

  type FlashDeckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashDeckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashDeckCountAggregateInputType | true
    }

  export interface FlashDeckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashDeck'], meta: { name: 'FlashDeck' } }
    /**
     * Find zero or one FlashDeck that matches the filter.
     * @param {FlashDeckFindUniqueArgs} args - Arguments to find a FlashDeck
     * @example
     * // Get one FlashDeck
     * const flashDeck = await prisma.flashDeck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashDeckFindUniqueArgs>(args: SelectSubset<T, FlashDeckFindUniqueArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashDeck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashDeckFindUniqueOrThrowArgs} args - Arguments to find a FlashDeck
     * @example
     * // Get one FlashDeck
     * const flashDeck = await prisma.flashDeck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashDeckFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashDeckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashDeck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashDeckFindFirstArgs} args - Arguments to find a FlashDeck
     * @example
     * // Get one FlashDeck
     * const flashDeck = await prisma.flashDeck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashDeckFindFirstArgs>(args?: SelectSubset<T, FlashDeckFindFirstArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashDeck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashDeckFindFirstOrThrowArgs} args - Arguments to find a FlashDeck
     * @example
     * // Get one FlashDeck
     * const flashDeck = await prisma.flashDeck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashDeckFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashDeckFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashDecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashDeckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashDecks
     * const flashDecks = await prisma.flashDeck.findMany()
     * 
     * // Get first 10 FlashDecks
     * const flashDecks = await prisma.flashDeck.findMany({ take: 10 })
     * 
     * // Only select the `flashDeckId`
     * const flashDeckWithFlashDeckIdOnly = await prisma.flashDeck.findMany({ select: { flashDeckId: true } })
     * 
     */
    findMany<T extends FlashDeckFindManyArgs>(args?: SelectSubset<T, FlashDeckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashDeck.
     * @param {FlashDeckCreateArgs} args - Arguments to create a FlashDeck.
     * @example
     * // Create one FlashDeck
     * const FlashDeck = await prisma.flashDeck.create({
     *   data: {
     *     // ... data to create a FlashDeck
     *   }
     * })
     * 
     */
    create<T extends FlashDeckCreateArgs>(args: SelectSubset<T, FlashDeckCreateArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashDecks.
     * @param {FlashDeckCreateManyArgs} args - Arguments to create many FlashDecks.
     * @example
     * // Create many FlashDecks
     * const flashDeck = await prisma.flashDeck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashDeckCreateManyArgs>(args?: SelectSubset<T, FlashDeckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashDecks and returns the data saved in the database.
     * @param {FlashDeckCreateManyAndReturnArgs} args - Arguments to create many FlashDecks.
     * @example
     * // Create many FlashDecks
     * const flashDeck = await prisma.flashDeck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashDecks and only return the `flashDeckId`
     * const flashDeckWithFlashDeckIdOnly = await prisma.flashDeck.createManyAndReturn({
     *   select: { flashDeckId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashDeckCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashDeckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashDeck.
     * @param {FlashDeckDeleteArgs} args - Arguments to delete one FlashDeck.
     * @example
     * // Delete one FlashDeck
     * const FlashDeck = await prisma.flashDeck.delete({
     *   where: {
     *     // ... filter to delete one FlashDeck
     *   }
     * })
     * 
     */
    delete<T extends FlashDeckDeleteArgs>(args: SelectSubset<T, FlashDeckDeleteArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashDeck.
     * @param {FlashDeckUpdateArgs} args - Arguments to update one FlashDeck.
     * @example
     * // Update one FlashDeck
     * const flashDeck = await prisma.flashDeck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashDeckUpdateArgs>(args: SelectSubset<T, FlashDeckUpdateArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashDecks.
     * @param {FlashDeckDeleteManyArgs} args - Arguments to filter FlashDecks to delete.
     * @example
     * // Delete a few FlashDecks
     * const { count } = await prisma.flashDeck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashDeckDeleteManyArgs>(args?: SelectSubset<T, FlashDeckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashDecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashDeckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashDecks
     * const flashDeck = await prisma.flashDeck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashDeckUpdateManyArgs>(args: SelectSubset<T, FlashDeckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashDecks and returns the data updated in the database.
     * @param {FlashDeckUpdateManyAndReturnArgs} args - Arguments to update many FlashDecks.
     * @example
     * // Update many FlashDecks
     * const flashDeck = await prisma.flashDeck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashDecks and only return the `flashDeckId`
     * const flashDeckWithFlashDeckIdOnly = await prisma.flashDeck.updateManyAndReturn({
     *   select: { flashDeckId: true },
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
    updateManyAndReturn<T extends FlashDeckUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashDeckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashDeck.
     * @param {FlashDeckUpsertArgs} args - Arguments to update or create a FlashDeck.
     * @example
     * // Update or create a FlashDeck
     * const flashDeck = await prisma.flashDeck.upsert({
     *   create: {
     *     // ... data to create a FlashDeck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashDeck we want to update
     *   }
     * })
     */
    upsert<T extends FlashDeckUpsertArgs>(args: SelectSubset<T, FlashDeckUpsertArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashDecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashDeckCountArgs} args - Arguments to filter FlashDecks to count.
     * @example
     * // Count the number of FlashDecks
     * const count = await prisma.flashDeck.count({
     *   where: {
     *     // ... the filter for the FlashDecks we want to count
     *   }
     * })
    **/
    count<T extends FlashDeckCountArgs>(
      args?: Subset<T, FlashDeckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashDeckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashDeck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashDeckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlashDeckAggregateArgs>(args: Subset<T, FlashDeckAggregateArgs>): Prisma.PrismaPromise<GetFlashDeckAggregateType<T>>

    /**
     * Group by FlashDeck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashDeckGroupByArgs} args - Group by arguments.
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
      T extends FlashDeckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashDeckGroupByArgs['orderBy'] }
        : { orderBy?: FlashDeckGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlashDeckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashDeckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashDeck model
   */
  readonly fields: FlashDeckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashDeck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashDeckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    icon<T extends IconDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IconDefaultArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notebook<T extends FlashDeck$notebookArgs<ExtArgs> = {}>(args?: Subset<T, FlashDeck$notebookArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flashCards<T extends FlashDeck$flashCardsArgs<ExtArgs> = {}>(args?: Subset<T, FlashDeck$flashCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FlashDeck model
   */ 
  interface FlashDeckFieldRefs {
    readonly flashDeckId: FieldRef<"FlashDeck", 'String'>
    readonly title: FieldRef<"FlashDeck", 'String'>
    readonly description: FieldRef<"FlashDeck", 'String'>
    readonly color: FieldRef<"FlashDeck", 'String'>
    readonly tags: FieldRef<"FlashDeck", 'String[]'>
    readonly createdAt: FieldRef<"FlashDeck", 'DateTime'>
    readonly updatedAt: FieldRef<"FlashDeck", 'DateTime'>
    readonly userId: FieldRef<"FlashDeck", 'String'>
    readonly iconId: FieldRef<"FlashDeck", 'String'>
    readonly notebookId: FieldRef<"FlashDeck", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FlashDeck findUnique
   */
  export type FlashDeckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * Filter, which FlashDeck to fetch.
     */
    where: FlashDeckWhereUniqueInput
  }

  /**
   * FlashDeck findUniqueOrThrow
   */
  export type FlashDeckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * Filter, which FlashDeck to fetch.
     */
    where: FlashDeckWhereUniqueInput
  }

  /**
   * FlashDeck findFirst
   */
  export type FlashDeckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * Filter, which FlashDeck to fetch.
     */
    where?: FlashDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashDecks to fetch.
     */
    orderBy?: FlashDeckOrderByWithRelationInput | FlashDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashDecks.
     */
    cursor?: FlashDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashDecks.
     */
    distinct?: FlashDeckScalarFieldEnum | FlashDeckScalarFieldEnum[]
  }

  /**
   * FlashDeck findFirstOrThrow
   */
  export type FlashDeckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * Filter, which FlashDeck to fetch.
     */
    where?: FlashDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashDecks to fetch.
     */
    orderBy?: FlashDeckOrderByWithRelationInput | FlashDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashDecks.
     */
    cursor?: FlashDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashDecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashDecks.
     */
    distinct?: FlashDeckScalarFieldEnum | FlashDeckScalarFieldEnum[]
  }

  /**
   * FlashDeck findMany
   */
  export type FlashDeckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * Filter, which FlashDecks to fetch.
     */
    where?: FlashDeckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashDecks to fetch.
     */
    orderBy?: FlashDeckOrderByWithRelationInput | FlashDeckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashDecks.
     */
    cursor?: FlashDeckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashDecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashDecks.
     */
    skip?: number
    distinct?: FlashDeckScalarFieldEnum | FlashDeckScalarFieldEnum[]
  }

  /**
   * FlashDeck create
   */
  export type FlashDeckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashDeck.
     */
    data: XOR<FlashDeckCreateInput, FlashDeckUncheckedCreateInput>
  }

  /**
   * FlashDeck createMany
   */
  export type FlashDeckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashDecks.
     */
    data: FlashDeckCreateManyInput | FlashDeckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashDeck createManyAndReturn
   */
  export type FlashDeckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * The data used to create many FlashDecks.
     */
    data: FlashDeckCreateManyInput | FlashDeckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashDeck update
   */
  export type FlashDeckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashDeck.
     */
    data: XOR<FlashDeckUpdateInput, FlashDeckUncheckedUpdateInput>
    /**
     * Choose, which FlashDeck to update.
     */
    where: FlashDeckWhereUniqueInput
  }

  /**
   * FlashDeck updateMany
   */
  export type FlashDeckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashDecks.
     */
    data: XOR<FlashDeckUpdateManyMutationInput, FlashDeckUncheckedUpdateManyInput>
    /**
     * Filter which FlashDecks to update
     */
    where?: FlashDeckWhereInput
    /**
     * Limit how many FlashDecks to update.
     */
    limit?: number
  }

  /**
   * FlashDeck updateManyAndReturn
   */
  export type FlashDeckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * The data used to update FlashDecks.
     */
    data: XOR<FlashDeckUpdateManyMutationInput, FlashDeckUncheckedUpdateManyInput>
    /**
     * Filter which FlashDecks to update
     */
    where?: FlashDeckWhereInput
    /**
     * Limit how many FlashDecks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashDeck upsert
   */
  export type FlashDeckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashDeck to update in case it exists.
     */
    where: FlashDeckWhereUniqueInput
    /**
     * In case the FlashDeck found by the `where` argument doesn't exist, create a new FlashDeck with this data.
     */
    create: XOR<FlashDeckCreateInput, FlashDeckUncheckedCreateInput>
    /**
     * In case the FlashDeck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashDeckUpdateInput, FlashDeckUncheckedUpdateInput>
  }

  /**
   * FlashDeck delete
   */
  export type FlashDeckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    /**
     * Filter which FlashDeck to delete.
     */
    where: FlashDeckWhereUniqueInput
  }

  /**
   * FlashDeck deleteMany
   */
  export type FlashDeckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashDecks to delete
     */
    where?: FlashDeckWhereInput
    /**
     * Limit how many FlashDecks to delete.
     */
    limit?: number
  }

  /**
   * FlashDeck.notebook
   */
  export type FlashDeck$notebookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    where?: NotebookWhereInput
  }

  /**
   * FlashDeck.flashCards
   */
  export type FlashDeck$flashCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    where?: FlashCardWhereInput
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    cursor?: FlashCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashDeck without action
   */
  export type FlashDeckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
  }


  /**
   * Model FlashCard
   */

  export type AggregateFlashCard = {
    _count: FlashCardCountAggregateOutputType | null
    _min: FlashCardMinAggregateOutputType | null
    _max: FlashCardMaxAggregateOutputType | null
  }

  export type FlashCardMinAggregateOutputType = {
    flashCardId: string | null
    question: string | null
    createdAt: Date | null
    updatedAt: Date | null
    flashDeckId: string | null
  }

  export type FlashCardMaxAggregateOutputType = {
    flashCardId: string | null
    question: string | null
    createdAt: Date | null
    updatedAt: Date | null
    flashDeckId: string | null
  }

  export type FlashCardCountAggregateOutputType = {
    flashCardId: number
    question: number
    createdAt: number
    updatedAt: number
    flashDeckId: number
    _all: number
  }


  export type FlashCardMinAggregateInputType = {
    flashCardId?: true
    question?: true
    createdAt?: true
    updatedAt?: true
    flashDeckId?: true
  }

  export type FlashCardMaxAggregateInputType = {
    flashCardId?: true
    question?: true
    createdAt?: true
    updatedAt?: true
    flashDeckId?: true
  }

  export type FlashCardCountAggregateInputType = {
    flashCardId?: true
    question?: true
    createdAt?: true
    updatedAt?: true
    flashDeckId?: true
    _all?: true
  }

  export type FlashCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCard to aggregate.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashCards
    **/
    _count?: true | FlashCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashCardMaxAggregateInputType
  }

  export type GetFlashCardAggregateType<T extends FlashCardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashCard[P]>
      : GetScalarType<T[P], AggregateFlashCard[P]>
  }




  export type FlashCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardWhereInput
    orderBy?: FlashCardOrderByWithAggregationInput | FlashCardOrderByWithAggregationInput[]
    by: FlashCardScalarFieldEnum[] | FlashCardScalarFieldEnum
    having?: FlashCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashCardCountAggregateInputType | true
    _min?: FlashCardMinAggregateInputType
    _max?: FlashCardMaxAggregateInputType
  }

  export type FlashCardGroupByOutputType = {
    flashCardId: string
    question: string
    createdAt: Date
    updatedAt: Date
    flashDeckId: string
    _count: FlashCardCountAggregateOutputType | null
    _min: FlashCardMinAggregateOutputType | null
    _max: FlashCardMaxAggregateOutputType | null
  }

  type GetFlashCardGroupByPayload<T extends FlashCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashCardGroupByOutputType[P]>
            : GetScalarType<T[P], FlashCardGroupByOutputType[P]>
        }
      >
    >


  export type FlashCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashCardId?: boolean
    question?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flashDeckId?: boolean
    alashDeck?: boolean | FlashDeckDefaultArgs<ExtArgs>
    answers?: boolean | FlashCard$answersArgs<ExtArgs>
    _count?: boolean | FlashCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashCardId?: boolean
    question?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flashDeckId?: boolean
    alashDeck?: boolean | FlashDeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flashCardId?: boolean
    question?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flashDeckId?: boolean
    alashDeck?: boolean | FlashDeckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCard"]>

  export type FlashCardSelectScalar = {
    flashCardId?: boolean
    question?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flashDeckId?: boolean
  }

  export type FlashCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flashCardId" | "question" | "createdAt" | "updatedAt" | "flashDeckId", ExtArgs["result"]["flashCard"]>
  export type FlashCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alashDeck?: boolean | FlashDeckDefaultArgs<ExtArgs>
    answers?: boolean | FlashCard$answersArgs<ExtArgs>
    _count?: boolean | FlashCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlashCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alashDeck?: boolean | FlashDeckDefaultArgs<ExtArgs>
  }
  export type FlashCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alashDeck?: boolean | FlashDeckDefaultArgs<ExtArgs>
  }

  export type $FlashCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashCard"
    objects: {
      alashDeck: Prisma.$FlashDeckPayload<ExtArgs>
      answers: Prisma.$FlashCardAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      flashCardId: string
      question: string
      createdAt: Date
      updatedAt: Date
      flashDeckId: string
    }, ExtArgs["result"]["flashCard"]>
    composites: {}
  }

  type FlashCardGetPayload<S extends boolean | null | undefined | FlashCardDefaultArgs> = $Result.GetResult<Prisma.$FlashCardPayload, S>

  type FlashCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashCardCountAggregateInputType | true
    }

  export interface FlashCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashCard'], meta: { name: 'FlashCard' } }
    /**
     * Find zero or one FlashCard that matches the filter.
     * @param {FlashCardFindUniqueArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashCardFindUniqueArgs>(args: SelectSubset<T, FlashCardFindUniqueArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashCardFindUniqueOrThrowArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashCardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindFirstArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashCardFindFirstArgs>(args?: SelectSubset<T, FlashCardFindFirstArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindFirstOrThrowArgs} args - Arguments to find a FlashCard
     * @example
     * // Get one FlashCard
     * const flashCard = await prisma.flashCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashCardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashCards
     * const flashCards = await prisma.flashCard.findMany()
     * 
     * // Get first 10 FlashCards
     * const flashCards = await prisma.flashCard.findMany({ take: 10 })
     * 
     * // Only select the `flashCardId`
     * const flashCardWithFlashCardIdOnly = await prisma.flashCard.findMany({ select: { flashCardId: true } })
     * 
     */
    findMany<T extends FlashCardFindManyArgs>(args?: SelectSubset<T, FlashCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashCard.
     * @param {FlashCardCreateArgs} args - Arguments to create a FlashCard.
     * @example
     * // Create one FlashCard
     * const FlashCard = await prisma.flashCard.create({
     *   data: {
     *     // ... data to create a FlashCard
     *   }
     * })
     * 
     */
    create<T extends FlashCardCreateArgs>(args: SelectSubset<T, FlashCardCreateArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashCards.
     * @param {FlashCardCreateManyArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCard = await prisma.flashCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashCardCreateManyArgs>(args?: SelectSubset<T, FlashCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashCards and returns the data saved in the database.
     * @param {FlashCardCreateManyAndReturnArgs} args - Arguments to create many FlashCards.
     * @example
     * // Create many FlashCards
     * const flashCard = await prisma.flashCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashCards and only return the `flashCardId`
     * const flashCardWithFlashCardIdOnly = await prisma.flashCard.createManyAndReturn({
     *   select: { flashCardId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashCardCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashCard.
     * @param {FlashCardDeleteArgs} args - Arguments to delete one FlashCard.
     * @example
     * // Delete one FlashCard
     * const FlashCard = await prisma.flashCard.delete({
     *   where: {
     *     // ... filter to delete one FlashCard
     *   }
     * })
     * 
     */
    delete<T extends FlashCardDeleteArgs>(args: SelectSubset<T, FlashCardDeleteArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashCard.
     * @param {FlashCardUpdateArgs} args - Arguments to update one FlashCard.
     * @example
     * // Update one FlashCard
     * const flashCard = await prisma.flashCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashCardUpdateArgs>(args: SelectSubset<T, FlashCardUpdateArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashCards.
     * @param {FlashCardDeleteManyArgs} args - Arguments to filter FlashCards to delete.
     * @example
     * // Delete a few FlashCards
     * const { count } = await prisma.flashCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashCardDeleteManyArgs>(args?: SelectSubset<T, FlashCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashCards
     * const flashCard = await prisma.flashCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashCardUpdateManyArgs>(args: SelectSubset<T, FlashCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCards and returns the data updated in the database.
     * @param {FlashCardUpdateManyAndReturnArgs} args - Arguments to update many FlashCards.
     * @example
     * // Update many FlashCards
     * const flashCard = await prisma.flashCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashCards and only return the `flashCardId`
     * const flashCardWithFlashCardIdOnly = await prisma.flashCard.updateManyAndReturn({
     *   select: { flashCardId: true },
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
    updateManyAndReturn<T extends FlashCardUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashCard.
     * @param {FlashCardUpsertArgs} args - Arguments to update or create a FlashCard.
     * @example
     * // Update or create a FlashCard
     * const flashCard = await prisma.flashCard.upsert({
     *   create: {
     *     // ... data to create a FlashCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashCard we want to update
     *   }
     * })
     */
    upsert<T extends FlashCardUpsertArgs>(args: SelectSubset<T, FlashCardUpsertArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardCountArgs} args - Arguments to filter FlashCards to count.
     * @example
     * // Count the number of FlashCards
     * const count = await prisma.flashCard.count({
     *   where: {
     *     // ... the filter for the FlashCards we want to count
     *   }
     * })
    **/
    count<T extends FlashCardCountArgs>(
      args?: Subset<T, FlashCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlashCardAggregateArgs>(args: Subset<T, FlashCardAggregateArgs>): Prisma.PrismaPromise<GetFlashCardAggregateType<T>>

    /**
     * Group by FlashCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardGroupByArgs} args - Group by arguments.
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
      T extends FlashCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashCardGroupByArgs['orderBy'] }
        : { orderBy?: FlashCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlashCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashCard model
   */
  readonly fields: FlashCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alashDeck<T extends FlashDeckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlashDeckDefaultArgs<ExtArgs>>): Prisma__FlashDeckClient<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends FlashCard$answersArgs<ExtArgs> = {}>(args?: Subset<T, FlashCard$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FlashCard model
   */ 
  interface FlashCardFieldRefs {
    readonly flashCardId: FieldRef<"FlashCard", 'String'>
    readonly question: FieldRef<"FlashCard", 'String'>
    readonly createdAt: FieldRef<"FlashCard", 'DateTime'>
    readonly updatedAt: FieldRef<"FlashCard", 'DateTime'>
    readonly flashDeckId: FieldRef<"FlashCard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FlashCard findUnique
   */
  export type FlashCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard findUniqueOrThrow
   */
  export type FlashCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard findFirst
   */
  export type FlashCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard findFirstOrThrow
   */
  export type FlashCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCard to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCards.
     */
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard findMany
   */
  export type FlashCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter, which FlashCards to fetch.
     */
    where?: FlashCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCards to fetch.
     */
    orderBy?: FlashCardOrderByWithRelationInput | FlashCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashCards.
     */
    cursor?: FlashCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCards.
     */
    skip?: number
    distinct?: FlashCardScalarFieldEnum | FlashCardScalarFieldEnum[]
  }

  /**
   * FlashCard create
   */
  export type FlashCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashCard.
     */
    data: XOR<FlashCardCreateInput, FlashCardUncheckedCreateInput>
  }

  /**
   * FlashCard createMany
   */
  export type FlashCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardCreateManyInput | FlashCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashCard createManyAndReturn
   */
  export type FlashCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * The data used to create many FlashCards.
     */
    data: FlashCardCreateManyInput | FlashCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCard update
   */
  export type FlashCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashCard.
     */
    data: XOR<FlashCardUpdateInput, FlashCardUncheckedUpdateInput>
    /**
     * Choose, which FlashCard to update.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard updateMany
   */
  export type FlashCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
  }

  /**
   * FlashCard updateManyAndReturn
   */
  export type FlashCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * The data used to update FlashCards.
     */
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyInput>
    /**
     * Filter which FlashCards to update
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCard upsert
   */
  export type FlashCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashCard to update in case it exists.
     */
    where: FlashCardWhereUniqueInput
    /**
     * In case the FlashCard found by the `where` argument doesn't exist, create a new FlashCard with this data.
     */
    create: XOR<FlashCardCreateInput, FlashCardUncheckedCreateInput>
    /**
     * In case the FlashCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashCardUpdateInput, FlashCardUncheckedUpdateInput>
  }

  /**
   * FlashCard delete
   */
  export type FlashCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
    /**
     * Filter which FlashCard to delete.
     */
    where: FlashCardWhereUniqueInput
  }

  /**
   * FlashCard deleteMany
   */
  export type FlashCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCards to delete
     */
    where?: FlashCardWhereInput
    /**
     * Limit how many FlashCards to delete.
     */
    limit?: number
  }

  /**
   * FlashCard.answers
   */
  export type FlashCard$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    where?: FlashCardAnswerWhereInput
    orderBy?: FlashCardAnswerOrderByWithRelationInput | FlashCardAnswerOrderByWithRelationInput[]
    cursor?: FlashCardAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashCardAnswerScalarFieldEnum | FlashCardAnswerScalarFieldEnum[]
  }

  /**
   * FlashCard without action
   */
  export type FlashCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCard
     */
    select?: FlashCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCard
     */
    omit?: FlashCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardInclude<ExtArgs> | null
  }


  /**
   * Model FlashCardAnswer
   */

  export type AggregateFlashCardAnswer = {
    _count: FlashCardAnswerCountAggregateOutputType | null
    _min: FlashCardAnswerMinAggregateOutputType | null
    _max: FlashCardAnswerMaxAggregateOutputType | null
  }

  export type FlashCardAnswerMinAggregateOutputType = {
    answerId: string | null
    answer: string | null
    isCorrect: boolean | null
    flashCardId: string | null
  }

  export type FlashCardAnswerMaxAggregateOutputType = {
    answerId: string | null
    answer: string | null
    isCorrect: boolean | null
    flashCardId: string | null
  }

  export type FlashCardAnswerCountAggregateOutputType = {
    answerId: number
    answer: number
    isCorrect: number
    flashCardId: number
    _all: number
  }


  export type FlashCardAnswerMinAggregateInputType = {
    answerId?: true
    answer?: true
    isCorrect?: true
    flashCardId?: true
  }

  export type FlashCardAnswerMaxAggregateInputType = {
    answerId?: true
    answer?: true
    isCorrect?: true
    flashCardId?: true
  }

  export type FlashCardAnswerCountAggregateInputType = {
    answerId?: true
    answer?: true
    isCorrect?: true
    flashCardId?: true
    _all?: true
  }

  export type FlashCardAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCardAnswer to aggregate.
     */
    where?: FlashCardAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCardAnswers to fetch.
     */
    orderBy?: FlashCardAnswerOrderByWithRelationInput | FlashCardAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlashCardAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCardAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCardAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlashCardAnswers
    **/
    _count?: true | FlashCardAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlashCardAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlashCardAnswerMaxAggregateInputType
  }

  export type GetFlashCardAnswerAggregateType<T extends FlashCardAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateFlashCardAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlashCardAnswer[P]>
      : GetScalarType<T[P], AggregateFlashCardAnswer[P]>
  }




  export type FlashCardAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlashCardAnswerWhereInput
    orderBy?: FlashCardAnswerOrderByWithAggregationInput | FlashCardAnswerOrderByWithAggregationInput[]
    by: FlashCardAnswerScalarFieldEnum[] | FlashCardAnswerScalarFieldEnum
    having?: FlashCardAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlashCardAnswerCountAggregateInputType | true
    _min?: FlashCardAnswerMinAggregateInputType
    _max?: FlashCardAnswerMaxAggregateInputType
  }

  export type FlashCardAnswerGroupByOutputType = {
    answerId: string
    answer: string
    isCorrect: boolean
    flashCardId: string
    _count: FlashCardAnswerCountAggregateOutputType | null
    _min: FlashCardAnswerMinAggregateOutputType | null
    _max: FlashCardAnswerMaxAggregateOutputType | null
  }

  type GetFlashCardAnswerGroupByPayload<T extends FlashCardAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlashCardAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlashCardAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlashCardAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], FlashCardAnswerGroupByOutputType[P]>
        }
      >
    >


  export type FlashCardAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answerId?: boolean
    answer?: boolean
    isCorrect?: boolean
    flashCardId?: boolean
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCardAnswer"]>

  export type FlashCardAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answerId?: boolean
    answer?: boolean
    isCorrect?: boolean
    flashCardId?: boolean
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCardAnswer"]>

  export type FlashCardAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    answerId?: boolean
    answer?: boolean
    isCorrect?: boolean
    flashCardId?: boolean
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flashCardAnswer"]>

  export type FlashCardAnswerSelectScalar = {
    answerId?: boolean
    answer?: boolean
    isCorrect?: boolean
    flashCardId?: boolean
  }

  export type FlashCardAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"answerId" | "answer" | "isCorrect" | "flashCardId", ExtArgs["result"]["flashCardAnswer"]>
  export type FlashCardAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }
  export type FlashCardAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }
  export type FlashCardAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flashCard?: boolean | FlashCardDefaultArgs<ExtArgs>
  }

  export type $FlashCardAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlashCardAnswer"
    objects: {
      flashCard: Prisma.$FlashCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      answerId: string
      answer: string
      isCorrect: boolean
      flashCardId: string
    }, ExtArgs["result"]["flashCardAnswer"]>
    composites: {}
  }

  type FlashCardAnswerGetPayload<S extends boolean | null | undefined | FlashCardAnswerDefaultArgs> = $Result.GetResult<Prisma.$FlashCardAnswerPayload, S>

  type FlashCardAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlashCardAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlashCardAnswerCountAggregateInputType | true
    }

  export interface FlashCardAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlashCardAnswer'], meta: { name: 'FlashCardAnswer' } }
    /**
     * Find zero or one FlashCardAnswer that matches the filter.
     * @param {FlashCardAnswerFindUniqueArgs} args - Arguments to find a FlashCardAnswer
     * @example
     * // Get one FlashCardAnswer
     * const flashCardAnswer = await prisma.flashCardAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlashCardAnswerFindUniqueArgs>(args: SelectSubset<T, FlashCardAnswerFindUniqueArgs<ExtArgs>>): Prisma__FlashCardAnswerClient<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlashCardAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlashCardAnswerFindUniqueOrThrowArgs} args - Arguments to find a FlashCardAnswer
     * @example
     * // Get one FlashCardAnswer
     * const flashCardAnswer = await prisma.flashCardAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlashCardAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, FlashCardAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlashCardAnswerClient<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCardAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAnswerFindFirstArgs} args - Arguments to find a FlashCardAnswer
     * @example
     * // Get one FlashCardAnswer
     * const flashCardAnswer = await prisma.flashCardAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlashCardAnswerFindFirstArgs>(args?: SelectSubset<T, FlashCardAnswerFindFirstArgs<ExtArgs>>): Prisma__FlashCardAnswerClient<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlashCardAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAnswerFindFirstOrThrowArgs} args - Arguments to find a FlashCardAnswer
     * @example
     * // Get one FlashCardAnswer
     * const flashCardAnswer = await prisma.flashCardAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlashCardAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, FlashCardAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlashCardAnswerClient<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlashCardAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlashCardAnswers
     * const flashCardAnswers = await prisma.flashCardAnswer.findMany()
     * 
     * // Get first 10 FlashCardAnswers
     * const flashCardAnswers = await prisma.flashCardAnswer.findMany({ take: 10 })
     * 
     * // Only select the `answerId`
     * const flashCardAnswerWithAnswerIdOnly = await prisma.flashCardAnswer.findMany({ select: { answerId: true } })
     * 
     */
    findMany<T extends FlashCardAnswerFindManyArgs>(args?: SelectSubset<T, FlashCardAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlashCardAnswer.
     * @param {FlashCardAnswerCreateArgs} args - Arguments to create a FlashCardAnswer.
     * @example
     * // Create one FlashCardAnswer
     * const FlashCardAnswer = await prisma.flashCardAnswer.create({
     *   data: {
     *     // ... data to create a FlashCardAnswer
     *   }
     * })
     * 
     */
    create<T extends FlashCardAnswerCreateArgs>(args: SelectSubset<T, FlashCardAnswerCreateArgs<ExtArgs>>): Prisma__FlashCardAnswerClient<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlashCardAnswers.
     * @param {FlashCardAnswerCreateManyArgs} args - Arguments to create many FlashCardAnswers.
     * @example
     * // Create many FlashCardAnswers
     * const flashCardAnswer = await prisma.flashCardAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlashCardAnswerCreateManyArgs>(args?: SelectSubset<T, FlashCardAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlashCardAnswers and returns the data saved in the database.
     * @param {FlashCardAnswerCreateManyAndReturnArgs} args - Arguments to create many FlashCardAnswers.
     * @example
     * // Create many FlashCardAnswers
     * const flashCardAnswer = await prisma.flashCardAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlashCardAnswers and only return the `answerId`
     * const flashCardAnswerWithAnswerIdOnly = await prisma.flashCardAnswer.createManyAndReturn({
     *   select: { answerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlashCardAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, FlashCardAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlashCardAnswer.
     * @param {FlashCardAnswerDeleteArgs} args - Arguments to delete one FlashCardAnswer.
     * @example
     * // Delete one FlashCardAnswer
     * const FlashCardAnswer = await prisma.flashCardAnswer.delete({
     *   where: {
     *     // ... filter to delete one FlashCardAnswer
     *   }
     * })
     * 
     */
    delete<T extends FlashCardAnswerDeleteArgs>(args: SelectSubset<T, FlashCardAnswerDeleteArgs<ExtArgs>>): Prisma__FlashCardAnswerClient<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlashCardAnswer.
     * @param {FlashCardAnswerUpdateArgs} args - Arguments to update one FlashCardAnswer.
     * @example
     * // Update one FlashCardAnswer
     * const flashCardAnswer = await prisma.flashCardAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlashCardAnswerUpdateArgs>(args: SelectSubset<T, FlashCardAnswerUpdateArgs<ExtArgs>>): Prisma__FlashCardAnswerClient<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlashCardAnswers.
     * @param {FlashCardAnswerDeleteManyArgs} args - Arguments to filter FlashCardAnswers to delete.
     * @example
     * // Delete a few FlashCardAnswers
     * const { count } = await prisma.flashCardAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlashCardAnswerDeleteManyArgs>(args?: SelectSubset<T, FlashCardAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCardAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlashCardAnswers
     * const flashCardAnswer = await prisma.flashCardAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlashCardAnswerUpdateManyArgs>(args: SelectSubset<T, FlashCardAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlashCardAnswers and returns the data updated in the database.
     * @param {FlashCardAnswerUpdateManyAndReturnArgs} args - Arguments to update many FlashCardAnswers.
     * @example
     * // Update many FlashCardAnswers
     * const flashCardAnswer = await prisma.flashCardAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlashCardAnswers and only return the `answerId`
     * const flashCardAnswerWithAnswerIdOnly = await prisma.flashCardAnswer.updateManyAndReturn({
     *   select: { answerId: true },
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
    updateManyAndReturn<T extends FlashCardAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, FlashCardAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlashCardAnswer.
     * @param {FlashCardAnswerUpsertArgs} args - Arguments to update or create a FlashCardAnswer.
     * @example
     * // Update or create a FlashCardAnswer
     * const flashCardAnswer = await prisma.flashCardAnswer.upsert({
     *   create: {
     *     // ... data to create a FlashCardAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlashCardAnswer we want to update
     *   }
     * })
     */
    upsert<T extends FlashCardAnswerUpsertArgs>(args: SelectSubset<T, FlashCardAnswerUpsertArgs<ExtArgs>>): Prisma__FlashCardAnswerClient<$Result.GetResult<Prisma.$FlashCardAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlashCardAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAnswerCountArgs} args - Arguments to filter FlashCardAnswers to count.
     * @example
     * // Count the number of FlashCardAnswers
     * const count = await prisma.flashCardAnswer.count({
     *   where: {
     *     // ... the filter for the FlashCardAnswers we want to count
     *   }
     * })
    **/
    count<T extends FlashCardAnswerCountArgs>(
      args?: Subset<T, FlashCardAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlashCardAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlashCardAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlashCardAnswerAggregateArgs>(args: Subset<T, FlashCardAnswerAggregateArgs>): Prisma.PrismaPromise<GetFlashCardAnswerAggregateType<T>>

    /**
     * Group by FlashCardAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlashCardAnswerGroupByArgs} args - Group by arguments.
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
      T extends FlashCardAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlashCardAnswerGroupByArgs['orderBy'] }
        : { orderBy?: FlashCardAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlashCardAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlashCardAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlashCardAnswer model
   */
  readonly fields: FlashCardAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlashCardAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlashCardAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flashCard<T extends FlashCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlashCardDefaultArgs<ExtArgs>>): Prisma__FlashCardClient<$Result.GetResult<Prisma.$FlashCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FlashCardAnswer model
   */ 
  interface FlashCardAnswerFieldRefs {
    readonly answerId: FieldRef<"FlashCardAnswer", 'String'>
    readonly answer: FieldRef<"FlashCardAnswer", 'String'>
    readonly isCorrect: FieldRef<"FlashCardAnswer", 'Boolean'>
    readonly flashCardId: FieldRef<"FlashCardAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FlashCardAnswer findUnique
   */
  export type FlashCardAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardAnswer to fetch.
     */
    where: FlashCardAnswerWhereUniqueInput
  }

  /**
   * FlashCardAnswer findUniqueOrThrow
   */
  export type FlashCardAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardAnswer to fetch.
     */
    where: FlashCardAnswerWhereUniqueInput
  }

  /**
   * FlashCardAnswer findFirst
   */
  export type FlashCardAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardAnswer to fetch.
     */
    where?: FlashCardAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCardAnswers to fetch.
     */
    orderBy?: FlashCardAnswerOrderByWithRelationInput | FlashCardAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCardAnswers.
     */
    cursor?: FlashCardAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCardAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCardAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCardAnswers.
     */
    distinct?: FlashCardAnswerScalarFieldEnum | FlashCardAnswerScalarFieldEnum[]
  }

  /**
   * FlashCardAnswer findFirstOrThrow
   */
  export type FlashCardAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardAnswer to fetch.
     */
    where?: FlashCardAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCardAnswers to fetch.
     */
    orderBy?: FlashCardAnswerOrderByWithRelationInput | FlashCardAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlashCardAnswers.
     */
    cursor?: FlashCardAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCardAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCardAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlashCardAnswers.
     */
    distinct?: FlashCardAnswerScalarFieldEnum | FlashCardAnswerScalarFieldEnum[]
  }

  /**
   * FlashCardAnswer findMany
   */
  export type FlashCardAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FlashCardAnswers to fetch.
     */
    where?: FlashCardAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlashCardAnswers to fetch.
     */
    orderBy?: FlashCardAnswerOrderByWithRelationInput | FlashCardAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlashCardAnswers.
     */
    cursor?: FlashCardAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlashCardAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlashCardAnswers.
     */
    skip?: number
    distinct?: FlashCardAnswerScalarFieldEnum | FlashCardAnswerScalarFieldEnum[]
  }

  /**
   * FlashCardAnswer create
   */
  export type FlashCardAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a FlashCardAnswer.
     */
    data: XOR<FlashCardAnswerCreateInput, FlashCardAnswerUncheckedCreateInput>
  }

  /**
   * FlashCardAnswer createMany
   */
  export type FlashCardAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlashCardAnswers.
     */
    data: FlashCardAnswerCreateManyInput | FlashCardAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlashCardAnswer createManyAndReturn
   */
  export type FlashCardAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many FlashCardAnswers.
     */
    data: FlashCardAnswerCreateManyInput | FlashCardAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCardAnswer update
   */
  export type FlashCardAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a FlashCardAnswer.
     */
    data: XOR<FlashCardAnswerUpdateInput, FlashCardAnswerUncheckedUpdateInput>
    /**
     * Choose, which FlashCardAnswer to update.
     */
    where: FlashCardAnswerWhereUniqueInput
  }

  /**
   * FlashCardAnswer updateMany
   */
  export type FlashCardAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlashCardAnswers.
     */
    data: XOR<FlashCardAnswerUpdateManyMutationInput, FlashCardAnswerUncheckedUpdateManyInput>
    /**
     * Filter which FlashCardAnswers to update
     */
    where?: FlashCardAnswerWhereInput
    /**
     * Limit how many FlashCardAnswers to update.
     */
    limit?: number
  }

  /**
   * FlashCardAnswer updateManyAndReturn
   */
  export type FlashCardAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * The data used to update FlashCardAnswers.
     */
    data: XOR<FlashCardAnswerUpdateManyMutationInput, FlashCardAnswerUncheckedUpdateManyInput>
    /**
     * Filter which FlashCardAnswers to update
     */
    where?: FlashCardAnswerWhereInput
    /**
     * Limit how many FlashCardAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlashCardAnswer upsert
   */
  export type FlashCardAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the FlashCardAnswer to update in case it exists.
     */
    where: FlashCardAnswerWhereUniqueInput
    /**
     * In case the FlashCardAnswer found by the `where` argument doesn't exist, create a new FlashCardAnswer with this data.
     */
    create: XOR<FlashCardAnswerCreateInput, FlashCardAnswerUncheckedCreateInput>
    /**
     * In case the FlashCardAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlashCardAnswerUpdateInput, FlashCardAnswerUncheckedUpdateInput>
  }

  /**
   * FlashCardAnswer delete
   */
  export type FlashCardAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
    /**
     * Filter which FlashCardAnswer to delete.
     */
    where: FlashCardAnswerWhereUniqueInput
  }

  /**
   * FlashCardAnswer deleteMany
   */
  export type FlashCardAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlashCardAnswers to delete
     */
    where?: FlashCardAnswerWhereInput
    /**
     * Limit how many FlashCardAnswers to delete.
     */
    limit?: number
  }

  /**
   * FlashCardAnswer without action
   */
  export type FlashCardAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashCardAnswer
     */
    select?: FlashCardAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashCardAnswer
     */
    omit?: FlashCardAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashCardAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Icon
   */

  export type AggregateIcon = {
    _count: IconCountAggregateOutputType | null
    _min: IconMinAggregateOutputType | null
    _max: IconMaxAggregateOutputType | null
  }

  export type IconMinAggregateOutputType = {
    iconId: string | null
    icon: Uint8Array | null
  }

  export type IconMaxAggregateOutputType = {
    iconId: string | null
    icon: Uint8Array | null
  }

  export type IconCountAggregateOutputType = {
    iconId: number
    icon: number
    _all: number
  }


  export type IconMinAggregateInputType = {
    iconId?: true
    icon?: true
  }

  export type IconMaxAggregateInputType = {
    iconId?: true
    icon?: true
  }

  export type IconCountAggregateInputType = {
    iconId?: true
    icon?: true
    _all?: true
  }

  export type IconAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Icon to aggregate.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Icons
    **/
    _count?: true | IconCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IconMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IconMaxAggregateInputType
  }

  export type GetIconAggregateType<T extends IconAggregateArgs> = {
        [P in keyof T & keyof AggregateIcon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIcon[P]>
      : GetScalarType<T[P], AggregateIcon[P]>
  }




  export type IconGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IconWhereInput
    orderBy?: IconOrderByWithAggregationInput | IconOrderByWithAggregationInput[]
    by: IconScalarFieldEnum[] | IconScalarFieldEnum
    having?: IconScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IconCountAggregateInputType | true
    _min?: IconMinAggregateInputType
    _max?: IconMaxAggregateInputType
  }

  export type IconGroupByOutputType = {
    iconId: string
    icon: Uint8Array
    _count: IconCountAggregateOutputType | null
    _min: IconMinAggregateOutputType | null
    _max: IconMaxAggregateOutputType | null
  }

  type GetIconGroupByPayload<T extends IconGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IconGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IconGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IconGroupByOutputType[P]>
            : GetScalarType<T[P], IconGroupByOutputType[P]>
        }
      >
    >


  export type IconSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iconId?: boolean
    icon?: boolean
    notebooks?: boolean | Icon$notebooksArgs<ExtArgs>
    flashDecks?: boolean | Icon$flashDecksArgs<ExtArgs>
    _count?: boolean | IconCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["icon"]>

  export type IconSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iconId?: boolean
    icon?: boolean
  }, ExtArgs["result"]["icon"]>

  export type IconSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iconId?: boolean
    icon?: boolean
  }, ExtArgs["result"]["icon"]>

  export type IconSelectScalar = {
    iconId?: boolean
    icon?: boolean
  }

  export type IconOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"iconId" | "icon", ExtArgs["result"]["icon"]>
  export type IconInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notebooks?: boolean | Icon$notebooksArgs<ExtArgs>
    flashDecks?: boolean | Icon$flashDecksArgs<ExtArgs>
    _count?: boolean | IconCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IconIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IconIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IconPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Icon"
    objects: {
      notebooks: Prisma.$NotebookPayload<ExtArgs>[]
      flashDecks: Prisma.$FlashDeckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      iconId: string
      icon: Uint8Array
    }, ExtArgs["result"]["icon"]>
    composites: {}
  }

  type IconGetPayload<S extends boolean | null | undefined | IconDefaultArgs> = $Result.GetResult<Prisma.$IconPayload, S>

  type IconCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IconFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IconCountAggregateInputType | true
    }

  export interface IconDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Icon'], meta: { name: 'Icon' } }
    /**
     * Find zero or one Icon that matches the filter.
     * @param {IconFindUniqueArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IconFindUniqueArgs>(args: SelectSubset<T, IconFindUniqueArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Icon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IconFindUniqueOrThrowArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IconFindUniqueOrThrowArgs>(args: SelectSubset<T, IconFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Icon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindFirstArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IconFindFirstArgs>(args?: SelectSubset<T, IconFindFirstArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Icon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindFirstOrThrowArgs} args - Arguments to find a Icon
     * @example
     * // Get one Icon
     * const icon = await prisma.icon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IconFindFirstOrThrowArgs>(args?: SelectSubset<T, IconFindFirstOrThrowArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Icons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Icons
     * const icons = await prisma.icon.findMany()
     * 
     * // Get first 10 Icons
     * const icons = await prisma.icon.findMany({ take: 10 })
     * 
     * // Only select the `iconId`
     * const iconWithIconIdOnly = await prisma.icon.findMany({ select: { iconId: true } })
     * 
     */
    findMany<T extends IconFindManyArgs>(args?: SelectSubset<T, IconFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Icon.
     * @param {IconCreateArgs} args - Arguments to create a Icon.
     * @example
     * // Create one Icon
     * const Icon = await prisma.icon.create({
     *   data: {
     *     // ... data to create a Icon
     *   }
     * })
     * 
     */
    create<T extends IconCreateArgs>(args: SelectSubset<T, IconCreateArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Icons.
     * @param {IconCreateManyArgs} args - Arguments to create many Icons.
     * @example
     * // Create many Icons
     * const icon = await prisma.icon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IconCreateManyArgs>(args?: SelectSubset<T, IconCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Icons and returns the data saved in the database.
     * @param {IconCreateManyAndReturnArgs} args - Arguments to create many Icons.
     * @example
     * // Create many Icons
     * const icon = await prisma.icon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Icons and only return the `iconId`
     * const iconWithIconIdOnly = await prisma.icon.createManyAndReturn({
     *   select: { iconId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IconCreateManyAndReturnArgs>(args?: SelectSubset<T, IconCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Icon.
     * @param {IconDeleteArgs} args - Arguments to delete one Icon.
     * @example
     * // Delete one Icon
     * const Icon = await prisma.icon.delete({
     *   where: {
     *     // ... filter to delete one Icon
     *   }
     * })
     * 
     */
    delete<T extends IconDeleteArgs>(args: SelectSubset<T, IconDeleteArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Icon.
     * @param {IconUpdateArgs} args - Arguments to update one Icon.
     * @example
     * // Update one Icon
     * const icon = await prisma.icon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IconUpdateArgs>(args: SelectSubset<T, IconUpdateArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Icons.
     * @param {IconDeleteManyArgs} args - Arguments to filter Icons to delete.
     * @example
     * // Delete a few Icons
     * const { count } = await prisma.icon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IconDeleteManyArgs>(args?: SelectSubset<T, IconDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Icons
     * const icon = await prisma.icon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IconUpdateManyArgs>(args: SelectSubset<T, IconUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Icons and returns the data updated in the database.
     * @param {IconUpdateManyAndReturnArgs} args - Arguments to update many Icons.
     * @example
     * // Update many Icons
     * const icon = await prisma.icon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Icons and only return the `iconId`
     * const iconWithIconIdOnly = await prisma.icon.updateManyAndReturn({
     *   select: { iconId: true },
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
    updateManyAndReturn<T extends IconUpdateManyAndReturnArgs>(args: SelectSubset<T, IconUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Icon.
     * @param {IconUpsertArgs} args - Arguments to update or create a Icon.
     * @example
     * // Update or create a Icon
     * const icon = await prisma.icon.upsert({
     *   create: {
     *     // ... data to create a Icon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Icon we want to update
     *   }
     * })
     */
    upsert<T extends IconUpsertArgs>(args: SelectSubset<T, IconUpsertArgs<ExtArgs>>): Prisma__IconClient<$Result.GetResult<Prisma.$IconPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Icons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconCountArgs} args - Arguments to filter Icons to count.
     * @example
     * // Count the number of Icons
     * const count = await prisma.icon.count({
     *   where: {
     *     // ... the filter for the Icons we want to count
     *   }
     * })
    **/
    count<T extends IconCountArgs>(
      args?: Subset<T, IconCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IconCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Icon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IconAggregateArgs>(args: Subset<T, IconAggregateArgs>): Prisma.PrismaPromise<GetIconAggregateType<T>>

    /**
     * Group by Icon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IconGroupByArgs} args - Group by arguments.
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
      T extends IconGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IconGroupByArgs['orderBy'] }
        : { orderBy?: IconGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IconGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIconGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Icon model
   */
  readonly fields: IconFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Icon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IconClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notebooks<T extends Icon$notebooksArgs<ExtArgs> = {}>(args?: Subset<T, Icon$notebooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flashDecks<T extends Icon$flashDecksArgs<ExtArgs> = {}>(args?: Subset<T, Icon$flashDecksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlashDeckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Icon model
   */ 
  interface IconFieldRefs {
    readonly iconId: FieldRef<"Icon", 'String'>
    readonly icon: FieldRef<"Icon", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * Icon findUnique
   */
  export type IconFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon findUniqueOrThrow
   */
  export type IconFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon findFirst
   */
  export type IconFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Icons.
     */
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon findFirstOrThrow
   */
  export type IconFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icon to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Icons.
     */
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon findMany
   */
  export type IconFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter, which Icons to fetch.
     */
    where?: IconWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icons to fetch.
     */
    orderBy?: IconOrderByWithRelationInput | IconOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Icons.
     */
    cursor?: IconWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icons.
     */
    skip?: number
    distinct?: IconScalarFieldEnum | IconScalarFieldEnum[]
  }

  /**
   * Icon create
   */
  export type IconCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * The data needed to create a Icon.
     */
    data: XOR<IconCreateInput, IconUncheckedCreateInput>
  }

  /**
   * Icon createMany
   */
  export type IconCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Icons.
     */
    data: IconCreateManyInput | IconCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Icon createManyAndReturn
   */
  export type IconCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * The data used to create many Icons.
     */
    data: IconCreateManyInput | IconCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Icon update
   */
  export type IconUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * The data needed to update a Icon.
     */
    data: XOR<IconUpdateInput, IconUncheckedUpdateInput>
    /**
     * Choose, which Icon to update.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon updateMany
   */
  export type IconUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Icons.
     */
    data: XOR<IconUpdateManyMutationInput, IconUncheckedUpdateManyInput>
    /**
     * Filter which Icons to update
     */
    where?: IconWhereInput
    /**
     * Limit how many Icons to update.
     */
    limit?: number
  }

  /**
   * Icon updateManyAndReturn
   */
  export type IconUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * The data used to update Icons.
     */
    data: XOR<IconUpdateManyMutationInput, IconUncheckedUpdateManyInput>
    /**
     * Filter which Icons to update
     */
    where?: IconWhereInput
    /**
     * Limit how many Icons to update.
     */
    limit?: number
  }

  /**
   * Icon upsert
   */
  export type IconUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * The filter to search for the Icon to update in case it exists.
     */
    where: IconWhereUniqueInput
    /**
     * In case the Icon found by the `where` argument doesn't exist, create a new Icon with this data.
     */
    create: XOR<IconCreateInput, IconUncheckedCreateInput>
    /**
     * In case the Icon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IconUpdateInput, IconUncheckedUpdateInput>
  }

  /**
   * Icon delete
   */
  export type IconDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
    /**
     * Filter which Icon to delete.
     */
    where: IconWhereUniqueInput
  }

  /**
   * Icon deleteMany
   */
  export type IconDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Icons to delete
     */
    where?: IconWhereInput
    /**
     * Limit how many Icons to delete.
     */
    limit?: number
  }

  /**
   * Icon.notebooks
   */
  export type Icon$notebooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notebook
     */
    omit?: NotebookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotebookInclude<ExtArgs> | null
    where?: NotebookWhereInput
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    cursor?: NotebookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotebookScalarFieldEnum | NotebookScalarFieldEnum[]
  }

  /**
   * Icon.flashDecks
   */
  export type Icon$flashDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlashDeck
     */
    select?: FlashDeckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlashDeck
     */
    omit?: FlashDeckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlashDeckInclude<ExtArgs> | null
    where?: FlashDeckWhereInput
    orderBy?: FlashDeckOrderByWithRelationInput | FlashDeckOrderByWithRelationInput[]
    cursor?: FlashDeckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlashDeckScalarFieldEnum | FlashDeckScalarFieldEnum[]
  }

  /**
   * Icon without action
   */
  export type IconDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icon
     */
    select?: IconSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icon
     */
    omit?: IconOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IconInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    isAdmin: 'isAdmin',
    hashedPassword: 'hashedPassword',
    passwordSalt: 'passwordSalt',
    profilePictureId: 'profilePictureId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfilePictureScalarFieldEnum: {
    profilePictureId: 'profilePictureId',
    picture: 'picture'
  };

  export type ProfilePictureScalarFieldEnum = (typeof ProfilePictureScalarFieldEnum)[keyof typeof ProfilePictureScalarFieldEnum]


  export const NotebookScalarFieldEnum: {
    notebookId: 'notebookId',
    title: 'title',
    color: 'color',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ownerId: 'ownerId',
    iconId: 'iconId'
  };

  export type NotebookScalarFieldEnum = (typeof NotebookScalarFieldEnum)[keyof typeof NotebookScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    noteId: 'noteId',
    title: 'title',
    content: 'content',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    notebookId: 'notebookId'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const CalendarScalarFieldEnum: {
    calendarId: 'calendarId',
    title: 'title',
    color: 'color',
    userId: 'userId'
  };

  export type CalendarScalarFieldEnum = (typeof CalendarScalarFieldEnum)[keyof typeof CalendarScalarFieldEnum]


  export const EventScalarFieldEnum: {
    eventId: 'eventId',
    title: 'title',
    description: 'description',
    tags: 'tags',
    color: 'color',
    calendarId: 'calendarId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventTimeScalarFieldEnum: {
    eventTimeId: 'eventTimeId',
    date: 'date',
    start_time: 'start_time',
    end_time: 'end_time',
    eventId: 'eventId'
  };

  export type EventTimeScalarFieldEnum = (typeof EventTimeScalarFieldEnum)[keyof typeof EventTimeScalarFieldEnum]


  export const FlashDeckScalarFieldEnum: {
    flashDeckId: 'flashDeckId',
    title: 'title',
    description: 'description',
    color: 'color',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    iconId: 'iconId',
    notebookId: 'notebookId'
  };

  export type FlashDeckScalarFieldEnum = (typeof FlashDeckScalarFieldEnum)[keyof typeof FlashDeckScalarFieldEnum]


  export const FlashCardScalarFieldEnum: {
    flashCardId: 'flashCardId',
    question: 'question',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    flashDeckId: 'flashDeckId'
  };

  export type FlashCardScalarFieldEnum = (typeof FlashCardScalarFieldEnum)[keyof typeof FlashCardScalarFieldEnum]


  export const FlashCardAnswerScalarFieldEnum: {
    answerId: 'answerId',
    answer: 'answer',
    isCorrect: 'isCorrect',
    flashCardId: 'flashCardId'
  };

  export type FlashCardAnswerScalarFieldEnum = (typeof FlashCardAnswerScalarFieldEnum)[keyof typeof FlashCardAnswerScalarFieldEnum]


  export const IconScalarFieldEnum: {
    iconId: 'iconId',
    icon: 'icon'
  };

  export type IconScalarFieldEnum = (typeof IconScalarFieldEnum)[keyof typeof IconScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    hashedPassword?: StringFilter<"User"> | string
    passwordSalt?: StringFilter<"User"> | string
    profilePictureId?: StringFilter<"User"> | string
    profilePicture?: XOR<ProfilePictureScalarRelationFilter, ProfilePictureWhereInput>
    notebooks?: NotebookListRelationFilter
    calendar?: XOR<CalendarNullableScalarRelationFilter, CalendarWhereInput> | null
    flashDecks?: FlashDeckListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    hashedPassword?: SortOrder
    passwordSalt?: SortOrder
    profilePictureId?: SortOrder
    profilePicture?: ProfilePictureOrderByWithRelationInput
    notebooks?: NotebookOrderByRelationAggregateInput
    calendar?: CalendarOrderByWithRelationInput
    flashDecks?: FlashDeckOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    hashedPassword?: StringFilter<"User"> | string
    passwordSalt?: StringFilter<"User"> | string
    profilePictureId?: StringFilter<"User"> | string
    profilePicture?: XOR<ProfilePictureScalarRelationFilter, ProfilePictureWhereInput>
    notebooks?: NotebookListRelationFilter
    calendar?: XOR<CalendarNullableScalarRelationFilter, CalendarWhereInput> | null
    flashDecks?: FlashDeckListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    hashedPassword?: SortOrder
    passwordSalt?: SortOrder
    profilePictureId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    passwordSalt?: StringWithAggregatesFilter<"User"> | string
    profilePictureId?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProfilePictureWhereInput = {
    AND?: ProfilePictureWhereInput | ProfilePictureWhereInput[]
    OR?: ProfilePictureWhereInput[]
    NOT?: ProfilePictureWhereInput | ProfilePictureWhereInput[]
    profilePictureId?: StringFilter<"ProfilePicture"> | string
    picture?: BytesFilter<"ProfilePicture"> | Uint8Array
    users?: UserListRelationFilter
  }

  export type ProfilePictureOrderByWithRelationInput = {
    profilePictureId?: SortOrder
    picture?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type ProfilePictureWhereUniqueInput = Prisma.AtLeast<{
    profilePictureId?: string
    AND?: ProfilePictureWhereInput | ProfilePictureWhereInput[]
    OR?: ProfilePictureWhereInput[]
    NOT?: ProfilePictureWhereInput | ProfilePictureWhereInput[]
    picture?: BytesFilter<"ProfilePicture"> | Uint8Array
    users?: UserListRelationFilter
  }, "profilePictureId">

  export type ProfilePictureOrderByWithAggregationInput = {
    profilePictureId?: SortOrder
    picture?: SortOrder
    _count?: ProfilePictureCountOrderByAggregateInput
    _max?: ProfilePictureMaxOrderByAggregateInput
    _min?: ProfilePictureMinOrderByAggregateInput
  }

  export type ProfilePictureScalarWhereWithAggregatesInput = {
    AND?: ProfilePictureScalarWhereWithAggregatesInput | ProfilePictureScalarWhereWithAggregatesInput[]
    OR?: ProfilePictureScalarWhereWithAggregatesInput[]
    NOT?: ProfilePictureScalarWhereWithAggregatesInput | ProfilePictureScalarWhereWithAggregatesInput[]
    profilePictureId?: StringWithAggregatesFilter<"ProfilePicture"> | string
    picture?: BytesWithAggregatesFilter<"ProfilePicture"> | Uint8Array
  }

  export type NotebookWhereInput = {
    AND?: NotebookWhereInput | NotebookWhereInput[]
    OR?: NotebookWhereInput[]
    NOT?: NotebookWhereInput | NotebookWhereInput[]
    notebookId?: StringFilter<"Notebook"> | string
    title?: StringFilter<"Notebook"> | string
    color?: StringNullableFilter<"Notebook"> | string | null
    tags?: StringNullableListFilter<"Notebook">
    createdAt?: DateTimeFilter<"Notebook"> | Date | string
    updatedAt?: DateTimeFilter<"Notebook"> | Date | string
    ownerId?: StringFilter<"Notebook"> | string
    iconId?: StringFilter<"Notebook"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    icon?: XOR<IconScalarRelationFilter, IconWhereInput>
    notes?: NoteListRelationFilter
    flashDecks?: FlashDeckListRelationFilter
  }

  export type NotebookOrderByWithRelationInput = {
    notebookId?: SortOrder
    title?: SortOrder
    color?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    iconId?: SortOrder
    owner?: UserOrderByWithRelationInput
    icon?: IconOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
    flashDecks?: FlashDeckOrderByRelationAggregateInput
  }

  export type NotebookWhereUniqueInput = Prisma.AtLeast<{
    notebookId?: string
    AND?: NotebookWhereInput | NotebookWhereInput[]
    OR?: NotebookWhereInput[]
    NOT?: NotebookWhereInput | NotebookWhereInput[]
    title?: StringFilter<"Notebook"> | string
    color?: StringNullableFilter<"Notebook"> | string | null
    tags?: StringNullableListFilter<"Notebook">
    createdAt?: DateTimeFilter<"Notebook"> | Date | string
    updatedAt?: DateTimeFilter<"Notebook"> | Date | string
    ownerId?: StringFilter<"Notebook"> | string
    iconId?: StringFilter<"Notebook"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    icon?: XOR<IconScalarRelationFilter, IconWhereInput>
    notes?: NoteListRelationFilter
    flashDecks?: FlashDeckListRelationFilter
  }, "notebookId">

  export type NotebookOrderByWithAggregationInput = {
    notebookId?: SortOrder
    title?: SortOrder
    color?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    iconId?: SortOrder
    _count?: NotebookCountOrderByAggregateInput
    _max?: NotebookMaxOrderByAggregateInput
    _min?: NotebookMinOrderByAggregateInput
  }

  export type NotebookScalarWhereWithAggregatesInput = {
    AND?: NotebookScalarWhereWithAggregatesInput | NotebookScalarWhereWithAggregatesInput[]
    OR?: NotebookScalarWhereWithAggregatesInput[]
    NOT?: NotebookScalarWhereWithAggregatesInput | NotebookScalarWhereWithAggregatesInput[]
    notebookId?: StringWithAggregatesFilter<"Notebook"> | string
    title?: StringWithAggregatesFilter<"Notebook"> | string
    color?: StringNullableWithAggregatesFilter<"Notebook"> | string | null
    tags?: StringNullableListFilter<"Notebook">
    createdAt?: DateTimeWithAggregatesFilter<"Notebook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notebook"> | Date | string
    ownerId?: StringWithAggregatesFilter<"Notebook"> | string
    iconId?: StringWithAggregatesFilter<"Notebook"> | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    noteId?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    tags?: StringNullableListFilter<"Note">
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    notebookId?: StringFilter<"Note"> | string
    notebook?: XOR<NotebookScalarRelationFilter, NotebookWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notebookId?: SortOrder
    notebook?: NotebookOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    noteId?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    tags?: StringNullableListFilter<"Note">
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    notebookId?: StringFilter<"Note"> | string
    notebook?: XOR<NotebookScalarRelationFilter, NotebookWhereInput>
  }, "noteId">

  export type NoteOrderByWithAggregationInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notebookId?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    noteId?: StringWithAggregatesFilter<"Note"> | string
    title?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    tags?: StringNullableListFilter<"Note">
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    notebookId?: StringWithAggregatesFilter<"Note"> | string
  }

  export type CalendarWhereInput = {
    AND?: CalendarWhereInput | CalendarWhereInput[]
    OR?: CalendarWhereInput[]
    NOT?: CalendarWhereInput | CalendarWhereInput[]
    calendarId?: StringFilter<"Calendar"> | string
    title?: StringFilter<"Calendar"> | string
    color?: StringNullableFilter<"Calendar"> | string | null
    userId?: StringFilter<"Calendar"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    events?: EventListRelationFilter
  }

  export type CalendarOrderByWithRelationInput = {
    calendarId?: SortOrder
    title?: SortOrder
    color?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
  }

  export type CalendarWhereUniqueInput = Prisma.AtLeast<{
    calendarId?: string
    userId?: string
    AND?: CalendarWhereInput | CalendarWhereInput[]
    OR?: CalendarWhereInput[]
    NOT?: CalendarWhereInput | CalendarWhereInput[]
    title?: StringFilter<"Calendar"> | string
    color?: StringNullableFilter<"Calendar"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    events?: EventListRelationFilter
  }, "calendarId" | "userId">

  export type CalendarOrderByWithAggregationInput = {
    calendarId?: SortOrder
    title?: SortOrder
    color?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: CalendarCountOrderByAggregateInput
    _max?: CalendarMaxOrderByAggregateInput
    _min?: CalendarMinOrderByAggregateInput
  }

  export type CalendarScalarWhereWithAggregatesInput = {
    AND?: CalendarScalarWhereWithAggregatesInput | CalendarScalarWhereWithAggregatesInput[]
    OR?: CalendarScalarWhereWithAggregatesInput[]
    NOT?: CalendarScalarWhereWithAggregatesInput | CalendarScalarWhereWithAggregatesInput[]
    calendarId?: StringWithAggregatesFilter<"Calendar"> | string
    title?: StringWithAggregatesFilter<"Calendar"> | string
    color?: StringNullableWithAggregatesFilter<"Calendar"> | string | null
    userId?: StringWithAggregatesFilter<"Calendar"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    eventId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    tags?: StringNullableListFilter<"Event">
    color?: StringNullableFilter<"Event"> | string | null
    calendarId?: StringFilter<"Event"> | string
    calendar?: XOR<CalendarScalarRelationFilter, CalendarWhereInput>
    eventTimes?: EventTimeListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    eventId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    color?: SortOrderInput | SortOrder
    calendarId?: SortOrder
    calendar?: CalendarOrderByWithRelationInput
    eventTimes?: EventTimeOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    eventId?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    tags?: StringNullableListFilter<"Event">
    color?: StringNullableFilter<"Event"> | string | null
    calendarId?: StringFilter<"Event"> | string
    calendar?: XOR<CalendarScalarRelationFilter, CalendarWhereInput>
    eventTimes?: EventTimeListRelationFilter
  }, "eventId">

  export type EventOrderByWithAggregationInput = {
    eventId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    color?: SortOrderInput | SortOrder
    calendarId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    tags?: StringNullableListFilter<"Event">
    color?: StringNullableWithAggregatesFilter<"Event"> | string | null
    calendarId?: StringWithAggregatesFilter<"Event"> | string
  }

  export type EventTimeWhereInput = {
    AND?: EventTimeWhereInput | EventTimeWhereInput[]
    OR?: EventTimeWhereInput[]
    NOT?: EventTimeWhereInput | EventTimeWhereInput[]
    eventTimeId?: StringFilter<"EventTime"> | string
    date?: DateTimeFilter<"EventTime"> | Date | string
    start_time?: DateTimeFilter<"EventTime"> | Date | string
    end_time?: DateTimeFilter<"EventTime"> | Date | string
    eventId?: StringFilter<"EventTime"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventTimeOrderByWithRelationInput = {
    eventTimeId?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    eventId?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventTimeWhereUniqueInput = Prisma.AtLeast<{
    eventTimeId?: string
    AND?: EventTimeWhereInput | EventTimeWhereInput[]
    OR?: EventTimeWhereInput[]
    NOT?: EventTimeWhereInput | EventTimeWhereInput[]
    date?: DateTimeFilter<"EventTime"> | Date | string
    start_time?: DateTimeFilter<"EventTime"> | Date | string
    end_time?: DateTimeFilter<"EventTime"> | Date | string
    eventId?: StringFilter<"EventTime"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "eventTimeId">

  export type EventTimeOrderByWithAggregationInput = {
    eventTimeId?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    eventId?: SortOrder
    _count?: EventTimeCountOrderByAggregateInput
    _max?: EventTimeMaxOrderByAggregateInput
    _min?: EventTimeMinOrderByAggregateInput
  }

  export type EventTimeScalarWhereWithAggregatesInput = {
    AND?: EventTimeScalarWhereWithAggregatesInput | EventTimeScalarWhereWithAggregatesInput[]
    OR?: EventTimeScalarWhereWithAggregatesInput[]
    NOT?: EventTimeScalarWhereWithAggregatesInput | EventTimeScalarWhereWithAggregatesInput[]
    eventTimeId?: StringWithAggregatesFilter<"EventTime"> | string
    date?: DateTimeWithAggregatesFilter<"EventTime"> | Date | string
    start_time?: DateTimeWithAggregatesFilter<"EventTime"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"EventTime"> | Date | string
    eventId?: StringWithAggregatesFilter<"EventTime"> | string
  }

  export type FlashDeckWhereInput = {
    AND?: FlashDeckWhereInput | FlashDeckWhereInput[]
    OR?: FlashDeckWhereInput[]
    NOT?: FlashDeckWhereInput | FlashDeckWhereInput[]
    flashDeckId?: StringFilter<"FlashDeck"> | string
    title?: StringFilter<"FlashDeck"> | string
    description?: StringFilter<"FlashDeck"> | string
    color?: StringNullableFilter<"FlashDeck"> | string | null
    tags?: StringNullableListFilter<"FlashDeck">
    createdAt?: DateTimeFilter<"FlashDeck"> | Date | string
    updatedAt?: DateTimeFilter<"FlashDeck"> | Date | string
    userId?: StringFilter<"FlashDeck"> | string
    iconId?: StringFilter<"FlashDeck"> | string
    notebookId?: StringNullableFilter<"FlashDeck"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    icon?: XOR<IconScalarRelationFilter, IconWhereInput>
    notebook?: XOR<NotebookNullableScalarRelationFilter, NotebookWhereInput> | null
    flashCards?: FlashCardListRelationFilter
  }

  export type FlashDeckOrderByWithRelationInput = {
    flashDeckId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconId?: SortOrder
    notebookId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    icon?: IconOrderByWithRelationInput
    notebook?: NotebookOrderByWithRelationInput
    flashCards?: FlashCardOrderByRelationAggregateInput
  }

  export type FlashDeckWhereUniqueInput = Prisma.AtLeast<{
    flashDeckId?: string
    AND?: FlashDeckWhereInput | FlashDeckWhereInput[]
    OR?: FlashDeckWhereInput[]
    NOT?: FlashDeckWhereInput | FlashDeckWhereInput[]
    title?: StringFilter<"FlashDeck"> | string
    description?: StringFilter<"FlashDeck"> | string
    color?: StringNullableFilter<"FlashDeck"> | string | null
    tags?: StringNullableListFilter<"FlashDeck">
    createdAt?: DateTimeFilter<"FlashDeck"> | Date | string
    updatedAt?: DateTimeFilter<"FlashDeck"> | Date | string
    userId?: StringFilter<"FlashDeck"> | string
    iconId?: StringFilter<"FlashDeck"> | string
    notebookId?: StringNullableFilter<"FlashDeck"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    icon?: XOR<IconScalarRelationFilter, IconWhereInput>
    notebook?: XOR<NotebookNullableScalarRelationFilter, NotebookWhereInput> | null
    flashCards?: FlashCardListRelationFilter
  }, "flashDeckId">

  export type FlashDeckOrderByWithAggregationInput = {
    flashDeckId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconId?: SortOrder
    notebookId?: SortOrderInput | SortOrder
    _count?: FlashDeckCountOrderByAggregateInput
    _max?: FlashDeckMaxOrderByAggregateInput
    _min?: FlashDeckMinOrderByAggregateInput
  }

  export type FlashDeckScalarWhereWithAggregatesInput = {
    AND?: FlashDeckScalarWhereWithAggregatesInput | FlashDeckScalarWhereWithAggregatesInput[]
    OR?: FlashDeckScalarWhereWithAggregatesInput[]
    NOT?: FlashDeckScalarWhereWithAggregatesInput | FlashDeckScalarWhereWithAggregatesInput[]
    flashDeckId?: StringWithAggregatesFilter<"FlashDeck"> | string
    title?: StringWithAggregatesFilter<"FlashDeck"> | string
    description?: StringWithAggregatesFilter<"FlashDeck"> | string
    color?: StringNullableWithAggregatesFilter<"FlashDeck"> | string | null
    tags?: StringNullableListFilter<"FlashDeck">
    createdAt?: DateTimeWithAggregatesFilter<"FlashDeck"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlashDeck"> | Date | string
    userId?: StringWithAggregatesFilter<"FlashDeck"> | string
    iconId?: StringWithAggregatesFilter<"FlashDeck"> | string
    notebookId?: StringNullableWithAggregatesFilter<"FlashDeck"> | string | null
  }

  export type FlashCardWhereInput = {
    AND?: FlashCardWhereInput | FlashCardWhereInput[]
    OR?: FlashCardWhereInput[]
    NOT?: FlashCardWhereInput | FlashCardWhereInput[]
    flashCardId?: StringFilter<"FlashCard"> | string
    question?: StringFilter<"FlashCard"> | string
    createdAt?: DateTimeFilter<"FlashCard"> | Date | string
    updatedAt?: DateTimeFilter<"FlashCard"> | Date | string
    flashDeckId?: StringFilter<"FlashCard"> | string
    alashDeck?: XOR<FlashDeckScalarRelationFilter, FlashDeckWhereInput>
    answers?: FlashCardAnswerListRelationFilter
  }

  export type FlashCardOrderByWithRelationInput = {
    flashCardId?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flashDeckId?: SortOrder
    alashDeck?: FlashDeckOrderByWithRelationInput
    answers?: FlashCardAnswerOrderByRelationAggregateInput
  }

  export type FlashCardWhereUniqueInput = Prisma.AtLeast<{
    flashCardId?: string
    AND?: FlashCardWhereInput | FlashCardWhereInput[]
    OR?: FlashCardWhereInput[]
    NOT?: FlashCardWhereInput | FlashCardWhereInput[]
    question?: StringFilter<"FlashCard"> | string
    createdAt?: DateTimeFilter<"FlashCard"> | Date | string
    updatedAt?: DateTimeFilter<"FlashCard"> | Date | string
    flashDeckId?: StringFilter<"FlashCard"> | string
    alashDeck?: XOR<FlashDeckScalarRelationFilter, FlashDeckWhereInput>
    answers?: FlashCardAnswerListRelationFilter
  }, "flashCardId">

  export type FlashCardOrderByWithAggregationInput = {
    flashCardId?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flashDeckId?: SortOrder
    _count?: FlashCardCountOrderByAggregateInput
    _max?: FlashCardMaxOrderByAggregateInput
    _min?: FlashCardMinOrderByAggregateInput
  }

  export type FlashCardScalarWhereWithAggregatesInput = {
    AND?: FlashCardScalarWhereWithAggregatesInput | FlashCardScalarWhereWithAggregatesInput[]
    OR?: FlashCardScalarWhereWithAggregatesInput[]
    NOT?: FlashCardScalarWhereWithAggregatesInput | FlashCardScalarWhereWithAggregatesInput[]
    flashCardId?: StringWithAggregatesFilter<"FlashCard"> | string
    question?: StringWithAggregatesFilter<"FlashCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FlashCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlashCard"> | Date | string
    flashDeckId?: StringWithAggregatesFilter<"FlashCard"> | string
  }

  export type FlashCardAnswerWhereInput = {
    AND?: FlashCardAnswerWhereInput | FlashCardAnswerWhereInput[]
    OR?: FlashCardAnswerWhereInput[]
    NOT?: FlashCardAnswerWhereInput | FlashCardAnswerWhereInput[]
    answerId?: StringFilter<"FlashCardAnswer"> | string
    answer?: StringFilter<"FlashCardAnswer"> | string
    isCorrect?: BoolFilter<"FlashCardAnswer"> | boolean
    flashCardId?: StringFilter<"FlashCardAnswer"> | string
    flashCard?: XOR<FlashCardScalarRelationFilter, FlashCardWhereInput>
  }

  export type FlashCardAnswerOrderByWithRelationInput = {
    answerId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    flashCardId?: SortOrder
    flashCard?: FlashCardOrderByWithRelationInput
  }

  export type FlashCardAnswerWhereUniqueInput = Prisma.AtLeast<{
    answerId?: string
    AND?: FlashCardAnswerWhereInput | FlashCardAnswerWhereInput[]
    OR?: FlashCardAnswerWhereInput[]
    NOT?: FlashCardAnswerWhereInput | FlashCardAnswerWhereInput[]
    answer?: StringFilter<"FlashCardAnswer"> | string
    isCorrect?: BoolFilter<"FlashCardAnswer"> | boolean
    flashCardId?: StringFilter<"FlashCardAnswer"> | string
    flashCard?: XOR<FlashCardScalarRelationFilter, FlashCardWhereInput>
  }, "answerId">

  export type FlashCardAnswerOrderByWithAggregationInput = {
    answerId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    flashCardId?: SortOrder
    _count?: FlashCardAnswerCountOrderByAggregateInput
    _max?: FlashCardAnswerMaxOrderByAggregateInput
    _min?: FlashCardAnswerMinOrderByAggregateInput
  }

  export type FlashCardAnswerScalarWhereWithAggregatesInput = {
    AND?: FlashCardAnswerScalarWhereWithAggregatesInput | FlashCardAnswerScalarWhereWithAggregatesInput[]
    OR?: FlashCardAnswerScalarWhereWithAggregatesInput[]
    NOT?: FlashCardAnswerScalarWhereWithAggregatesInput | FlashCardAnswerScalarWhereWithAggregatesInput[]
    answerId?: StringWithAggregatesFilter<"FlashCardAnswer"> | string
    answer?: StringWithAggregatesFilter<"FlashCardAnswer"> | string
    isCorrect?: BoolWithAggregatesFilter<"FlashCardAnswer"> | boolean
    flashCardId?: StringWithAggregatesFilter<"FlashCardAnswer"> | string
  }

  export type IconWhereInput = {
    AND?: IconWhereInput | IconWhereInput[]
    OR?: IconWhereInput[]
    NOT?: IconWhereInput | IconWhereInput[]
    iconId?: StringFilter<"Icon"> | string
    icon?: BytesFilter<"Icon"> | Uint8Array
    notebooks?: NotebookListRelationFilter
    flashDecks?: FlashDeckListRelationFilter
  }

  export type IconOrderByWithRelationInput = {
    iconId?: SortOrder
    icon?: SortOrder
    notebooks?: NotebookOrderByRelationAggregateInput
    flashDecks?: FlashDeckOrderByRelationAggregateInput
  }

  export type IconWhereUniqueInput = Prisma.AtLeast<{
    iconId?: string
    AND?: IconWhereInput | IconWhereInput[]
    OR?: IconWhereInput[]
    NOT?: IconWhereInput | IconWhereInput[]
    icon?: BytesFilter<"Icon"> | Uint8Array
    notebooks?: NotebookListRelationFilter
    flashDecks?: FlashDeckListRelationFilter
  }, "iconId">

  export type IconOrderByWithAggregationInput = {
    iconId?: SortOrder
    icon?: SortOrder
    _count?: IconCountOrderByAggregateInput
    _max?: IconMaxOrderByAggregateInput
    _min?: IconMinOrderByAggregateInput
  }

  export type IconScalarWhereWithAggregatesInput = {
    AND?: IconScalarWhereWithAggregatesInput | IconScalarWhereWithAggregatesInput[]
    OR?: IconScalarWhereWithAggregatesInput[]
    NOT?: IconScalarWhereWithAggregatesInput | IconScalarWhereWithAggregatesInput[]
    iconId?: StringWithAggregatesFilter<"Icon"> | string
    icon?: BytesWithAggregatesFilter<"Icon"> | Uint8Array
  }

  export type UserCreateInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePicture: ProfilePictureCreateNestedOneWithoutUsersInput
    notebooks?: NotebookCreateNestedManyWithoutOwnerInput
    calendar?: CalendarCreateNestedOneWithoutUserInput
    flashDecks?: FlashDeckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePictureId: string
    notebooks?: NotebookUncheckedCreateNestedManyWithoutOwnerInput
    calendar?: CalendarUncheckedCreateNestedOneWithoutUserInput
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePicture?: ProfilePictureUpdateOneRequiredWithoutUsersNestedInput
    notebooks?: NotebookUpdateManyWithoutOwnerNestedInput
    calendar?: CalendarUpdateOneWithoutUserNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePictureId?: StringFieldUpdateOperationsInput | string
    notebooks?: NotebookUncheckedUpdateManyWithoutOwnerNestedInput
    calendar?: CalendarUncheckedUpdateOneWithoutUserNestedInput
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePictureId: string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePictureId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfilePictureCreateInput = {
    profilePictureId?: string
    picture: Uint8Array
    users?: UserCreateNestedManyWithoutProfilePictureInput
  }

  export type ProfilePictureUncheckedCreateInput = {
    profilePictureId?: string
    picture: Uint8Array
    users?: UserUncheckedCreateNestedManyWithoutProfilePictureInput
  }

  export type ProfilePictureUpdateInput = {
    profilePictureId?: StringFieldUpdateOperationsInput | string
    picture?: BytesFieldUpdateOperationsInput | Uint8Array
    users?: UserUpdateManyWithoutProfilePictureNestedInput
  }

  export type ProfilePictureUncheckedUpdateInput = {
    profilePictureId?: StringFieldUpdateOperationsInput | string
    picture?: BytesFieldUpdateOperationsInput | Uint8Array
    users?: UserUncheckedUpdateManyWithoutProfilePictureNestedInput
  }

  export type ProfilePictureCreateManyInput = {
    profilePictureId?: string
    picture: Uint8Array
  }

  export type ProfilePictureUpdateManyMutationInput = {
    profilePictureId?: StringFieldUpdateOperationsInput | string
    picture?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type ProfilePictureUncheckedUpdateManyInput = {
    profilePictureId?: StringFieldUpdateOperationsInput | string
    picture?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type NotebookCreateInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotebooksInput
    icon: IconCreateNestedOneWithoutNotebooksInput
    notes?: NoteCreateNestedManyWithoutNotebookInput
    flashDecks?: FlashDeckCreateNestedManyWithoutNotebookInput
  }

  export type NotebookUncheckedCreateInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    iconId: string
    notes?: NoteUncheckedCreateNestedManyWithoutNotebookInput
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutNotebookInput
  }

  export type NotebookUpdateInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotebooksNestedInput
    icon?: IconUpdateOneRequiredWithoutNotebooksNestedInput
    notes?: NoteUpdateManyWithoutNotebookNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
    notes?: NoteUncheckedUpdateManyWithoutNotebookNestedInput
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookCreateManyInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    iconId: string
  }

  export type NotebookUpdateManyMutationInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotebookUncheckedUpdateManyInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateInput = {
    noteId?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    notebook: NotebookCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    noteId?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    notebookId: string
  }

  export type NoteUpdateInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notebook?: NotebookUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notebookId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateManyInput = {
    noteId?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    notebookId: string
  }

  export type NoteUpdateManyMutationInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notebookId?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarCreateInput = {
    calendarId?: string
    title: string
    color?: string | null
    user: UserCreateNestedOneWithoutCalendarInput
    events?: EventCreateNestedManyWithoutCalendarInput
  }

  export type CalendarUncheckedCreateInput = {
    calendarId?: string
    title: string
    color?: string | null
    userId: string
    events?: EventUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type CalendarUpdateInput = {
    calendarId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCalendarNestedInput
    events?: EventUpdateManyWithoutCalendarNestedInput
  }

  export type CalendarUncheckedUpdateInput = {
    calendarId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type CalendarCreateManyInput = {
    calendarId?: string
    title: string
    color?: string | null
    userId: string
  }

  export type CalendarUpdateManyMutationInput = {
    calendarId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CalendarUncheckedUpdateManyInput = {
    calendarId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    eventId?: string
    title: string
    description?: string
    tags?: EventCreatetagsInput | string[]
    color?: string | null
    calendar: CalendarCreateNestedOneWithoutEventsInput
    eventTimes?: EventTimeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    eventId?: string
    title: string
    description?: string
    tags?: EventCreatetagsInput | string[]
    color?: string | null
    calendarId: string
    eventTimes?: EventTimeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
    calendar?: CalendarUpdateOneRequiredWithoutEventsNestedInput
    eventTimes?: EventTimeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: StringFieldUpdateOperationsInput | string
    eventTimes?: EventTimeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    eventId?: string
    title: string
    description?: string
    tags?: EventCreatetagsInput | string[]
    color?: string | null
    calendarId: string
  }

  export type EventUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: StringFieldUpdateOperationsInput | string
  }

  export type EventTimeCreateInput = {
    eventTimeId?: string
    date: Date | string
    start_time: Date | string
    end_time: Date | string
    event: EventCreateNestedOneWithoutEventTimesInput
  }

  export type EventTimeUncheckedCreateInput = {
    eventTimeId?: string
    date: Date | string
    start_time: Date | string
    end_time: Date | string
    eventId: string
  }

  export type EventTimeUpdateInput = {
    eventTimeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventTimesNestedInput
  }

  export type EventTimeUncheckedUpdateInput = {
    eventTimeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventTimeCreateManyInput = {
    eventTimeId?: string
    date: Date | string
    start_time: Date | string
    end_time: Date | string
    eventId: string
  }

  export type EventTimeUpdateManyMutationInput = {
    eventTimeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTimeUncheckedUpdateManyInput = {
    eventTimeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type FlashDeckCreateInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlashDecksInput
    icon: IconCreateNestedOneWithoutFlashDecksInput
    notebook?: NotebookCreateNestedOneWithoutFlashDecksInput
    flashCards?: FlashCardCreateNestedManyWithoutAlashDeckInput
  }

  export type FlashDeckUncheckedCreateInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    iconId: string
    notebookId?: string | null
    flashCards?: FlashCardUncheckedCreateNestedManyWithoutAlashDeckInput
  }

  export type FlashDeckUpdateInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlashDecksNestedInput
    icon?: IconUpdateOneRequiredWithoutFlashDecksNestedInput
    notebook?: NotebookUpdateOneWithoutFlashDecksNestedInput
    flashCards?: FlashCardUpdateManyWithoutAlashDeckNestedInput
  }

  export type FlashDeckUncheckedUpdateInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
    notebookId?: NullableStringFieldUpdateOperationsInput | string | null
    flashCards?: FlashCardUncheckedUpdateManyWithoutAlashDeckNestedInput
  }

  export type FlashDeckCreateManyInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    iconId: string
    notebookId?: string | null
  }

  export type FlashDeckUpdateManyMutationInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashDeckUncheckedUpdateManyInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
    notebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlashCardCreateInput = {
    flashCardId?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alashDeck: FlashDeckCreateNestedOneWithoutFlashCardsInput
    answers?: FlashCardAnswerCreateNestedManyWithoutFlashCardInput
  }

  export type FlashCardUncheckedCreateInput = {
    flashCardId?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flashDeckId: string
    answers?: FlashCardAnswerUncheckedCreateNestedManyWithoutFlashCardInput
  }

  export type FlashCardUpdateInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alashDeck?: FlashDeckUpdateOneRequiredWithoutFlashCardsNestedInput
    answers?: FlashCardAnswerUpdateManyWithoutFlashCardNestedInput
  }

  export type FlashCardUncheckedUpdateInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashDeckId?: StringFieldUpdateOperationsInput | string
    answers?: FlashCardAnswerUncheckedUpdateManyWithoutFlashCardNestedInput
  }

  export type FlashCardCreateManyInput = {
    flashCardId?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flashDeckId: string
  }

  export type FlashCardUpdateManyMutationInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashCardUncheckedUpdateManyInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashDeckId?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardAnswerCreateInput = {
    answerId?: string
    answer?: string
    isCorrect?: boolean
    flashCard: FlashCardCreateNestedOneWithoutAnswersInput
  }

  export type FlashCardAnswerUncheckedCreateInput = {
    answerId?: string
    answer?: string
    isCorrect?: boolean
    flashCardId: string
  }

  export type FlashCardAnswerUpdateInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    flashCard?: FlashCardUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type FlashCardAnswerUncheckedUpdateInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    flashCardId?: StringFieldUpdateOperationsInput | string
  }

  export type FlashCardAnswerCreateManyInput = {
    answerId?: string
    answer?: string
    isCorrect?: boolean
    flashCardId: string
  }

  export type FlashCardAnswerUpdateManyMutationInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardAnswerUncheckedUpdateManyInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    flashCardId?: StringFieldUpdateOperationsInput | string
  }

  export type IconCreateInput = {
    iconId?: string
    icon: Uint8Array
    notebooks?: NotebookCreateNestedManyWithoutIconInput
    flashDecks?: FlashDeckCreateNestedManyWithoutIconInput
  }

  export type IconUncheckedCreateInput = {
    iconId?: string
    icon: Uint8Array
    notebooks?: NotebookUncheckedCreateNestedManyWithoutIconInput
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutIconInput
  }

  export type IconUpdateInput = {
    iconId?: StringFieldUpdateOperationsInput | string
    icon?: BytesFieldUpdateOperationsInput | Uint8Array
    notebooks?: NotebookUpdateManyWithoutIconNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutIconNestedInput
  }

  export type IconUncheckedUpdateInput = {
    iconId?: StringFieldUpdateOperationsInput | string
    icon?: BytesFieldUpdateOperationsInput | Uint8Array
    notebooks?: NotebookUncheckedUpdateManyWithoutIconNestedInput
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutIconNestedInput
  }

  export type IconCreateManyInput = {
    iconId?: string
    icon: Uint8Array
  }

  export type IconUpdateManyMutationInput = {
    iconId?: StringFieldUpdateOperationsInput | string
    icon?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type IconUncheckedUpdateManyInput = {
    iconId?: StringFieldUpdateOperationsInput | string
    icon?: BytesFieldUpdateOperationsInput | Uint8Array
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProfilePictureScalarRelationFilter = {
    is?: ProfilePictureWhereInput
    isNot?: ProfilePictureWhereInput
  }

  export type NotebookListRelationFilter = {
    every?: NotebookWhereInput
    some?: NotebookWhereInput
    none?: NotebookWhereInput
  }

  export type CalendarNullableScalarRelationFilter = {
    is?: CalendarWhereInput | null
    isNot?: CalendarWhereInput | null
  }

  export type FlashDeckListRelationFilter = {
    every?: FlashDeckWhereInput
    some?: FlashDeckWhereInput
    none?: FlashDeckWhereInput
  }

  export type NotebookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlashDeckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    hashedPassword?: SortOrder
    passwordSalt?: SortOrder
    profilePictureId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    hashedPassword?: SortOrder
    passwordSalt?: SortOrder
    profilePictureId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    isAdmin?: SortOrder
    hashedPassword?: SortOrder
    passwordSalt?: SortOrder
    profilePictureId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfilePictureCountOrderByAggregateInput = {
    profilePictureId?: SortOrder
    picture?: SortOrder
  }

  export type ProfilePictureMaxOrderByAggregateInput = {
    profilePictureId?: SortOrder
    picture?: SortOrder
  }

  export type ProfilePictureMinOrderByAggregateInput = {
    profilePictureId?: SortOrder
    picture?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IconScalarRelationFilter = {
    is?: IconWhereInput
    isNot?: IconWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotebookCountOrderByAggregateInput = {
    notebookId?: SortOrder
    title?: SortOrder
    color?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    iconId?: SortOrder
  }

  export type NotebookMaxOrderByAggregateInput = {
    notebookId?: SortOrder
    title?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    iconId?: SortOrder
  }

  export type NotebookMinOrderByAggregateInput = {
    notebookId?: SortOrder
    title?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownerId?: SortOrder
    iconId?: SortOrder
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

  export type NotebookScalarRelationFilter = {
    is?: NotebookWhereInput
    isNot?: NotebookWhereInput
  }

  export type NoteCountOrderByAggregateInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notebookId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notebookId?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notebookId?: SortOrder
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarCountOrderByAggregateInput = {
    calendarId?: SortOrder
    title?: SortOrder
    color?: SortOrder
    userId?: SortOrder
  }

  export type CalendarMaxOrderByAggregateInput = {
    calendarId?: SortOrder
    title?: SortOrder
    color?: SortOrder
    userId?: SortOrder
  }

  export type CalendarMinOrderByAggregateInput = {
    calendarId?: SortOrder
    title?: SortOrder
    color?: SortOrder
    userId?: SortOrder
  }

  export type CalendarScalarRelationFilter = {
    is?: CalendarWhereInput
    isNot?: CalendarWhereInput
  }

  export type EventTimeListRelationFilter = {
    every?: EventTimeWhereInput
    some?: EventTimeWhereInput
    none?: EventTimeWhereInput
  }

  export type EventTimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    eventId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    color?: SortOrder
    calendarId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    eventId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    calendarId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    eventId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    calendarId?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventTimeCountOrderByAggregateInput = {
    eventTimeId?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    eventId?: SortOrder
  }

  export type EventTimeMaxOrderByAggregateInput = {
    eventTimeId?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    eventId?: SortOrder
  }

  export type EventTimeMinOrderByAggregateInput = {
    eventTimeId?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    eventId?: SortOrder
  }

  export type NotebookNullableScalarRelationFilter = {
    is?: NotebookWhereInput | null
    isNot?: NotebookWhereInput | null
  }

  export type FlashCardListRelationFilter = {
    every?: FlashCardWhereInput
    some?: FlashCardWhereInput
    none?: FlashCardWhereInput
  }

  export type FlashCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlashDeckCountOrderByAggregateInput = {
    flashDeckId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconId?: SortOrder
    notebookId?: SortOrder
  }

  export type FlashDeckMaxOrderByAggregateInput = {
    flashDeckId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconId?: SortOrder
    notebookId?: SortOrder
  }

  export type FlashDeckMinOrderByAggregateInput = {
    flashDeckId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    iconId?: SortOrder
    notebookId?: SortOrder
  }

  export type FlashDeckScalarRelationFilter = {
    is?: FlashDeckWhereInput
    isNot?: FlashDeckWhereInput
  }

  export type FlashCardAnswerListRelationFilter = {
    every?: FlashCardAnswerWhereInput
    some?: FlashCardAnswerWhereInput
    none?: FlashCardAnswerWhereInput
  }

  export type FlashCardAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlashCardCountOrderByAggregateInput = {
    flashCardId?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flashDeckId?: SortOrder
  }

  export type FlashCardMaxOrderByAggregateInput = {
    flashCardId?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flashDeckId?: SortOrder
  }

  export type FlashCardMinOrderByAggregateInput = {
    flashCardId?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flashDeckId?: SortOrder
  }

  export type FlashCardScalarRelationFilter = {
    is?: FlashCardWhereInput
    isNot?: FlashCardWhereInput
  }

  export type FlashCardAnswerCountOrderByAggregateInput = {
    answerId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    flashCardId?: SortOrder
  }

  export type FlashCardAnswerMaxOrderByAggregateInput = {
    answerId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    flashCardId?: SortOrder
  }

  export type FlashCardAnswerMinOrderByAggregateInput = {
    answerId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    flashCardId?: SortOrder
  }

  export type IconCountOrderByAggregateInput = {
    iconId?: SortOrder
    icon?: SortOrder
  }

  export type IconMaxOrderByAggregateInput = {
    iconId?: SortOrder
    icon?: SortOrder
  }

  export type IconMinOrderByAggregateInput = {
    iconId?: SortOrder
    icon?: SortOrder
  }

  export type ProfilePictureCreateNestedOneWithoutUsersInput = {
    create?: XOR<ProfilePictureCreateWithoutUsersInput, ProfilePictureUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProfilePictureCreateOrConnectWithoutUsersInput
    connect?: ProfilePictureWhereUniqueInput
  }

  export type NotebookCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NotebookCreateWithoutOwnerInput, NotebookUncheckedCreateWithoutOwnerInput> | NotebookCreateWithoutOwnerInput[] | NotebookUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotebookCreateOrConnectWithoutOwnerInput | NotebookCreateOrConnectWithoutOwnerInput[]
    createMany?: NotebookCreateManyOwnerInputEnvelope
    connect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
  }

  export type CalendarCreateNestedOneWithoutUserInput = {
    create?: XOR<CalendarCreateWithoutUserInput, CalendarUncheckedCreateWithoutUserInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutUserInput
    connect?: CalendarWhereUniqueInput
  }

  export type FlashDeckCreateNestedManyWithoutUserInput = {
    create?: XOR<FlashDeckCreateWithoutUserInput, FlashDeckUncheckedCreateWithoutUserInput> | FlashDeckCreateWithoutUserInput[] | FlashDeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutUserInput | FlashDeckCreateOrConnectWithoutUserInput[]
    createMany?: FlashDeckCreateManyUserInputEnvelope
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
  }

  export type NotebookUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NotebookCreateWithoutOwnerInput, NotebookUncheckedCreateWithoutOwnerInput> | NotebookCreateWithoutOwnerInput[] | NotebookUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotebookCreateOrConnectWithoutOwnerInput | NotebookCreateOrConnectWithoutOwnerInput[]
    createMany?: NotebookCreateManyOwnerInputEnvelope
    connect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
  }

  export type CalendarUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CalendarCreateWithoutUserInput, CalendarUncheckedCreateWithoutUserInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutUserInput
    connect?: CalendarWhereUniqueInput
  }

  export type FlashDeckUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlashDeckCreateWithoutUserInput, FlashDeckUncheckedCreateWithoutUserInput> | FlashDeckCreateWithoutUserInput[] | FlashDeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutUserInput | FlashDeckCreateOrConnectWithoutUserInput[]
    createMany?: FlashDeckCreateManyUserInputEnvelope
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfilePictureUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ProfilePictureCreateWithoutUsersInput, ProfilePictureUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProfilePictureCreateOrConnectWithoutUsersInput
    upsert?: ProfilePictureUpsertWithoutUsersInput
    connect?: ProfilePictureWhereUniqueInput
    update?: XOR<XOR<ProfilePictureUpdateToOneWithWhereWithoutUsersInput, ProfilePictureUpdateWithoutUsersInput>, ProfilePictureUncheckedUpdateWithoutUsersInput>
  }

  export type NotebookUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NotebookCreateWithoutOwnerInput, NotebookUncheckedCreateWithoutOwnerInput> | NotebookCreateWithoutOwnerInput[] | NotebookUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotebookCreateOrConnectWithoutOwnerInput | NotebookCreateOrConnectWithoutOwnerInput[]
    upsert?: NotebookUpsertWithWhereUniqueWithoutOwnerInput | NotebookUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NotebookCreateManyOwnerInputEnvelope
    set?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    disconnect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    delete?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    connect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    update?: NotebookUpdateWithWhereUniqueWithoutOwnerInput | NotebookUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NotebookUpdateManyWithWhereWithoutOwnerInput | NotebookUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NotebookScalarWhereInput | NotebookScalarWhereInput[]
  }

  export type CalendarUpdateOneWithoutUserNestedInput = {
    create?: XOR<CalendarCreateWithoutUserInput, CalendarUncheckedCreateWithoutUserInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutUserInput
    upsert?: CalendarUpsertWithoutUserInput
    disconnect?: CalendarWhereInput | boolean
    delete?: CalendarWhereInput | boolean
    connect?: CalendarWhereUniqueInput
    update?: XOR<XOR<CalendarUpdateToOneWithWhereWithoutUserInput, CalendarUpdateWithoutUserInput>, CalendarUncheckedUpdateWithoutUserInput>
  }

  export type FlashDeckUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlashDeckCreateWithoutUserInput, FlashDeckUncheckedCreateWithoutUserInput> | FlashDeckCreateWithoutUserInput[] | FlashDeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutUserInput | FlashDeckCreateOrConnectWithoutUserInput[]
    upsert?: FlashDeckUpsertWithWhereUniqueWithoutUserInput | FlashDeckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlashDeckCreateManyUserInputEnvelope
    set?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    disconnect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    delete?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    update?: FlashDeckUpdateWithWhereUniqueWithoutUserInput | FlashDeckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlashDeckUpdateManyWithWhereWithoutUserInput | FlashDeckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlashDeckScalarWhereInput | FlashDeckScalarWhereInput[]
  }

  export type NotebookUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NotebookCreateWithoutOwnerInput, NotebookUncheckedCreateWithoutOwnerInput> | NotebookCreateWithoutOwnerInput[] | NotebookUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotebookCreateOrConnectWithoutOwnerInput | NotebookCreateOrConnectWithoutOwnerInput[]
    upsert?: NotebookUpsertWithWhereUniqueWithoutOwnerInput | NotebookUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NotebookCreateManyOwnerInputEnvelope
    set?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    disconnect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    delete?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    connect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    update?: NotebookUpdateWithWhereUniqueWithoutOwnerInput | NotebookUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NotebookUpdateManyWithWhereWithoutOwnerInput | NotebookUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NotebookScalarWhereInput | NotebookScalarWhereInput[]
  }

  export type CalendarUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CalendarCreateWithoutUserInput, CalendarUncheckedCreateWithoutUserInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutUserInput
    upsert?: CalendarUpsertWithoutUserInput
    disconnect?: CalendarWhereInput | boolean
    delete?: CalendarWhereInput | boolean
    connect?: CalendarWhereUniqueInput
    update?: XOR<XOR<CalendarUpdateToOneWithWhereWithoutUserInput, CalendarUpdateWithoutUserInput>, CalendarUncheckedUpdateWithoutUserInput>
  }

  export type FlashDeckUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlashDeckCreateWithoutUserInput, FlashDeckUncheckedCreateWithoutUserInput> | FlashDeckCreateWithoutUserInput[] | FlashDeckUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutUserInput | FlashDeckCreateOrConnectWithoutUserInput[]
    upsert?: FlashDeckUpsertWithWhereUniqueWithoutUserInput | FlashDeckUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlashDeckCreateManyUserInputEnvelope
    set?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    disconnect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    delete?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    update?: FlashDeckUpdateWithWhereUniqueWithoutUserInput | FlashDeckUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlashDeckUpdateManyWithWhereWithoutUserInput | FlashDeckUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlashDeckScalarWhereInput | FlashDeckScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutProfilePictureInput = {
    create?: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput> | UserCreateWithoutProfilePictureInput[] | UserUncheckedCreateWithoutProfilePictureInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfilePictureInput | UserCreateOrConnectWithoutProfilePictureInput[]
    createMany?: UserCreateManyProfilePictureInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProfilePictureInput = {
    create?: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput> | UserCreateWithoutProfilePictureInput[] | UserUncheckedCreateWithoutProfilePictureInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfilePictureInput | UserCreateOrConnectWithoutProfilePictureInput[]
    createMany?: UserCreateManyProfilePictureInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type UserUpdateManyWithoutProfilePictureNestedInput = {
    create?: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput> | UserCreateWithoutProfilePictureInput[] | UserUncheckedCreateWithoutProfilePictureInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfilePictureInput | UserCreateOrConnectWithoutProfilePictureInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfilePictureInput | UserUpsertWithWhereUniqueWithoutProfilePictureInput[]
    createMany?: UserCreateManyProfilePictureInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfilePictureInput | UserUpdateWithWhereUniqueWithoutProfilePictureInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfilePictureInput | UserUpdateManyWithWhereWithoutProfilePictureInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProfilePictureNestedInput = {
    create?: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput> | UserCreateWithoutProfilePictureInput[] | UserUncheckedCreateWithoutProfilePictureInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProfilePictureInput | UserCreateOrConnectWithoutProfilePictureInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProfilePictureInput | UserUpsertWithWhereUniqueWithoutProfilePictureInput[]
    createMany?: UserCreateManyProfilePictureInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProfilePictureInput | UserUpdateWithWhereUniqueWithoutProfilePictureInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProfilePictureInput | UserUpdateManyWithWhereWithoutProfilePictureInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NotebookCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutNotebooksInput = {
    create?: XOR<UserCreateWithoutNotebooksInput, UserUncheckedCreateWithoutNotebooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotebooksInput
    connect?: UserWhereUniqueInput
  }

  export type IconCreateNestedOneWithoutNotebooksInput = {
    create?: XOR<IconCreateWithoutNotebooksInput, IconUncheckedCreateWithoutNotebooksInput>
    connectOrCreate?: IconCreateOrConnectWithoutNotebooksInput
    connect?: IconWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutNotebookInput = {
    create?: XOR<NoteCreateWithoutNotebookInput, NoteUncheckedCreateWithoutNotebookInput> | NoteCreateWithoutNotebookInput[] | NoteUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutNotebookInput | NoteCreateOrConnectWithoutNotebookInput[]
    createMany?: NoteCreateManyNotebookInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type FlashDeckCreateNestedManyWithoutNotebookInput = {
    create?: XOR<FlashDeckCreateWithoutNotebookInput, FlashDeckUncheckedCreateWithoutNotebookInput> | FlashDeckCreateWithoutNotebookInput[] | FlashDeckUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutNotebookInput | FlashDeckCreateOrConnectWithoutNotebookInput[]
    createMany?: FlashDeckCreateManyNotebookInputEnvelope
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutNotebookInput = {
    create?: XOR<NoteCreateWithoutNotebookInput, NoteUncheckedCreateWithoutNotebookInput> | NoteCreateWithoutNotebookInput[] | NoteUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutNotebookInput | NoteCreateOrConnectWithoutNotebookInput[]
    createMany?: NoteCreateManyNotebookInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type FlashDeckUncheckedCreateNestedManyWithoutNotebookInput = {
    create?: XOR<FlashDeckCreateWithoutNotebookInput, FlashDeckUncheckedCreateWithoutNotebookInput> | FlashDeckCreateWithoutNotebookInput[] | FlashDeckUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutNotebookInput | FlashDeckCreateOrConnectWithoutNotebookInput[]
    createMany?: FlashDeckCreateManyNotebookInputEnvelope
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NotebookUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutNotebooksNestedInput = {
    create?: XOR<UserCreateWithoutNotebooksInput, UserUncheckedCreateWithoutNotebooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotebooksInput
    upsert?: UserUpsertWithoutNotebooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotebooksInput, UserUpdateWithoutNotebooksInput>, UserUncheckedUpdateWithoutNotebooksInput>
  }

  export type IconUpdateOneRequiredWithoutNotebooksNestedInput = {
    create?: XOR<IconCreateWithoutNotebooksInput, IconUncheckedCreateWithoutNotebooksInput>
    connectOrCreate?: IconCreateOrConnectWithoutNotebooksInput
    upsert?: IconUpsertWithoutNotebooksInput
    connect?: IconWhereUniqueInput
    update?: XOR<XOR<IconUpdateToOneWithWhereWithoutNotebooksInput, IconUpdateWithoutNotebooksInput>, IconUncheckedUpdateWithoutNotebooksInput>
  }

  export type NoteUpdateManyWithoutNotebookNestedInput = {
    create?: XOR<NoteCreateWithoutNotebookInput, NoteUncheckedCreateWithoutNotebookInput> | NoteCreateWithoutNotebookInput[] | NoteUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutNotebookInput | NoteCreateOrConnectWithoutNotebookInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutNotebookInput | NoteUpsertWithWhereUniqueWithoutNotebookInput[]
    createMany?: NoteCreateManyNotebookInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutNotebookInput | NoteUpdateWithWhereUniqueWithoutNotebookInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutNotebookInput | NoteUpdateManyWithWhereWithoutNotebookInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type FlashDeckUpdateManyWithoutNotebookNestedInput = {
    create?: XOR<FlashDeckCreateWithoutNotebookInput, FlashDeckUncheckedCreateWithoutNotebookInput> | FlashDeckCreateWithoutNotebookInput[] | FlashDeckUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutNotebookInput | FlashDeckCreateOrConnectWithoutNotebookInput[]
    upsert?: FlashDeckUpsertWithWhereUniqueWithoutNotebookInput | FlashDeckUpsertWithWhereUniqueWithoutNotebookInput[]
    createMany?: FlashDeckCreateManyNotebookInputEnvelope
    set?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    disconnect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    delete?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    update?: FlashDeckUpdateWithWhereUniqueWithoutNotebookInput | FlashDeckUpdateWithWhereUniqueWithoutNotebookInput[]
    updateMany?: FlashDeckUpdateManyWithWhereWithoutNotebookInput | FlashDeckUpdateManyWithWhereWithoutNotebookInput[]
    deleteMany?: FlashDeckScalarWhereInput | FlashDeckScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutNotebookNestedInput = {
    create?: XOR<NoteCreateWithoutNotebookInput, NoteUncheckedCreateWithoutNotebookInput> | NoteCreateWithoutNotebookInput[] | NoteUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutNotebookInput | NoteCreateOrConnectWithoutNotebookInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutNotebookInput | NoteUpsertWithWhereUniqueWithoutNotebookInput[]
    createMany?: NoteCreateManyNotebookInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutNotebookInput | NoteUpdateWithWhereUniqueWithoutNotebookInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutNotebookInput | NoteUpdateManyWithWhereWithoutNotebookInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type FlashDeckUncheckedUpdateManyWithoutNotebookNestedInput = {
    create?: XOR<FlashDeckCreateWithoutNotebookInput, FlashDeckUncheckedCreateWithoutNotebookInput> | FlashDeckCreateWithoutNotebookInput[] | FlashDeckUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutNotebookInput | FlashDeckCreateOrConnectWithoutNotebookInput[]
    upsert?: FlashDeckUpsertWithWhereUniqueWithoutNotebookInput | FlashDeckUpsertWithWhereUniqueWithoutNotebookInput[]
    createMany?: FlashDeckCreateManyNotebookInputEnvelope
    set?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    disconnect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    delete?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    update?: FlashDeckUpdateWithWhereUniqueWithoutNotebookInput | FlashDeckUpdateWithWhereUniqueWithoutNotebookInput[]
    updateMany?: FlashDeckUpdateManyWithWhereWithoutNotebookInput | FlashDeckUpdateManyWithWhereWithoutNotebookInput[]
    deleteMany?: FlashDeckScalarWhereInput | FlashDeckScalarWhereInput[]
  }

  export type NoteCreatetagsInput = {
    set: string[]
  }

  export type NotebookCreateNestedOneWithoutNotesInput = {
    create?: XOR<NotebookCreateWithoutNotesInput, NotebookUncheckedCreateWithoutNotesInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutNotesInput
    connect?: NotebookWhereUniqueInput
  }

  export type NoteUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NotebookUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<NotebookCreateWithoutNotesInput, NotebookUncheckedCreateWithoutNotesInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutNotesInput
    upsert?: NotebookUpsertWithoutNotesInput
    connect?: NotebookWhereUniqueInput
    update?: XOR<XOR<NotebookUpdateToOneWithWhereWithoutNotesInput, NotebookUpdateWithoutNotesInput>, NotebookUncheckedUpdateWithoutNotesInput>
  }

  export type UserCreateNestedOneWithoutCalendarInput = {
    create?: XOR<UserCreateWithoutCalendarInput, UserUncheckedCreateWithoutCalendarInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutCalendarInput = {
    create?: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput> | EventCreateWithoutCalendarInput[] | EventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCalendarInput | EventCreateOrConnectWithoutCalendarInput[]
    createMany?: EventCreateManyCalendarInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCalendarInput = {
    create?: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput> | EventCreateWithoutCalendarInput[] | EventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCalendarInput | EventCreateOrConnectWithoutCalendarInput[]
    createMany?: EventCreateManyCalendarInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCalendarNestedInput = {
    create?: XOR<UserCreateWithoutCalendarInput, UserUncheckedCreateWithoutCalendarInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarInput
    upsert?: UserUpsertWithoutCalendarInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCalendarInput, UserUpdateWithoutCalendarInput>, UserUncheckedUpdateWithoutCalendarInput>
  }

  export type EventUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput> | EventCreateWithoutCalendarInput[] | EventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCalendarInput | EventCreateOrConnectWithoutCalendarInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCalendarInput | EventUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: EventCreateManyCalendarInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCalendarInput | EventUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCalendarInput | EventUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput> | EventCreateWithoutCalendarInput[] | EventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCalendarInput | EventCreateOrConnectWithoutCalendarInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCalendarInput | EventUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: EventCreateManyCalendarInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCalendarInput | EventUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCalendarInput | EventUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventCreatetagsInput = {
    set: string[]
  }

  export type CalendarCreateNestedOneWithoutEventsInput = {
    create?: XOR<CalendarCreateWithoutEventsInput, CalendarUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutEventsInput
    connect?: CalendarWhereUniqueInput
  }

  export type EventTimeCreateNestedManyWithoutEventInput = {
    create?: XOR<EventTimeCreateWithoutEventInput, EventTimeUncheckedCreateWithoutEventInput> | EventTimeCreateWithoutEventInput[] | EventTimeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTimeCreateOrConnectWithoutEventInput | EventTimeCreateOrConnectWithoutEventInput[]
    createMany?: EventTimeCreateManyEventInputEnvelope
    connect?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
  }

  export type EventTimeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventTimeCreateWithoutEventInput, EventTimeUncheckedCreateWithoutEventInput> | EventTimeCreateWithoutEventInput[] | EventTimeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTimeCreateOrConnectWithoutEventInput | EventTimeCreateOrConnectWithoutEventInput[]
    createMany?: EventTimeCreateManyEventInputEnvelope
    connect?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
  }

  export type EventUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CalendarUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CalendarCreateWithoutEventsInput, CalendarUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutEventsInput
    upsert?: CalendarUpsertWithoutEventsInput
    connect?: CalendarWhereUniqueInput
    update?: XOR<XOR<CalendarUpdateToOneWithWhereWithoutEventsInput, CalendarUpdateWithoutEventsInput>, CalendarUncheckedUpdateWithoutEventsInput>
  }

  export type EventTimeUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventTimeCreateWithoutEventInput, EventTimeUncheckedCreateWithoutEventInput> | EventTimeCreateWithoutEventInput[] | EventTimeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTimeCreateOrConnectWithoutEventInput | EventTimeCreateOrConnectWithoutEventInput[]
    upsert?: EventTimeUpsertWithWhereUniqueWithoutEventInput | EventTimeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventTimeCreateManyEventInputEnvelope
    set?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
    disconnect?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
    delete?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
    connect?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
    update?: EventTimeUpdateWithWhereUniqueWithoutEventInput | EventTimeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventTimeUpdateManyWithWhereWithoutEventInput | EventTimeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventTimeScalarWhereInput | EventTimeScalarWhereInput[]
  }

  export type EventTimeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventTimeCreateWithoutEventInput, EventTimeUncheckedCreateWithoutEventInput> | EventTimeCreateWithoutEventInput[] | EventTimeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTimeCreateOrConnectWithoutEventInput | EventTimeCreateOrConnectWithoutEventInput[]
    upsert?: EventTimeUpsertWithWhereUniqueWithoutEventInput | EventTimeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventTimeCreateManyEventInputEnvelope
    set?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
    disconnect?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
    delete?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
    connect?: EventTimeWhereUniqueInput | EventTimeWhereUniqueInput[]
    update?: EventTimeUpdateWithWhereUniqueWithoutEventInput | EventTimeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventTimeUpdateManyWithWhereWithoutEventInput | EventTimeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventTimeScalarWhereInput | EventTimeScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEventTimesInput = {
    create?: XOR<EventCreateWithoutEventTimesInput, EventUncheckedCreateWithoutEventTimesInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventTimesInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutEventTimesNestedInput = {
    create?: XOR<EventCreateWithoutEventTimesInput, EventUncheckedCreateWithoutEventTimesInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventTimesInput
    upsert?: EventUpsertWithoutEventTimesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventTimesInput, EventUpdateWithoutEventTimesInput>, EventUncheckedUpdateWithoutEventTimesInput>
  }

  export type FlashDeckCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutFlashDecksInput = {
    create?: XOR<UserCreateWithoutFlashDecksInput, UserUncheckedCreateWithoutFlashDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlashDecksInput
    connect?: UserWhereUniqueInput
  }

  export type IconCreateNestedOneWithoutFlashDecksInput = {
    create?: XOR<IconCreateWithoutFlashDecksInput, IconUncheckedCreateWithoutFlashDecksInput>
    connectOrCreate?: IconCreateOrConnectWithoutFlashDecksInput
    connect?: IconWhereUniqueInput
  }

  export type NotebookCreateNestedOneWithoutFlashDecksInput = {
    create?: XOR<NotebookCreateWithoutFlashDecksInput, NotebookUncheckedCreateWithoutFlashDecksInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutFlashDecksInput
    connect?: NotebookWhereUniqueInput
  }

  export type FlashCardCreateNestedManyWithoutAlashDeckInput = {
    create?: XOR<FlashCardCreateWithoutAlashDeckInput, FlashCardUncheckedCreateWithoutAlashDeckInput> | FlashCardCreateWithoutAlashDeckInput[] | FlashCardUncheckedCreateWithoutAlashDeckInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutAlashDeckInput | FlashCardCreateOrConnectWithoutAlashDeckInput[]
    createMany?: FlashCardCreateManyAlashDeckInputEnvelope
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
  }

  export type FlashCardUncheckedCreateNestedManyWithoutAlashDeckInput = {
    create?: XOR<FlashCardCreateWithoutAlashDeckInput, FlashCardUncheckedCreateWithoutAlashDeckInput> | FlashCardCreateWithoutAlashDeckInput[] | FlashCardUncheckedCreateWithoutAlashDeckInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutAlashDeckInput | FlashCardCreateOrConnectWithoutAlashDeckInput[]
    createMany?: FlashCardCreateManyAlashDeckInputEnvelope
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
  }

  export type FlashDeckUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutFlashDecksNestedInput = {
    create?: XOR<UserCreateWithoutFlashDecksInput, UserUncheckedCreateWithoutFlashDecksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlashDecksInput
    upsert?: UserUpsertWithoutFlashDecksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlashDecksInput, UserUpdateWithoutFlashDecksInput>, UserUncheckedUpdateWithoutFlashDecksInput>
  }

  export type IconUpdateOneRequiredWithoutFlashDecksNestedInput = {
    create?: XOR<IconCreateWithoutFlashDecksInput, IconUncheckedCreateWithoutFlashDecksInput>
    connectOrCreate?: IconCreateOrConnectWithoutFlashDecksInput
    upsert?: IconUpsertWithoutFlashDecksInput
    connect?: IconWhereUniqueInput
    update?: XOR<XOR<IconUpdateToOneWithWhereWithoutFlashDecksInput, IconUpdateWithoutFlashDecksInput>, IconUncheckedUpdateWithoutFlashDecksInput>
  }

  export type NotebookUpdateOneWithoutFlashDecksNestedInput = {
    create?: XOR<NotebookCreateWithoutFlashDecksInput, NotebookUncheckedCreateWithoutFlashDecksInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutFlashDecksInput
    upsert?: NotebookUpsertWithoutFlashDecksInput
    disconnect?: NotebookWhereInput | boolean
    delete?: NotebookWhereInput | boolean
    connect?: NotebookWhereUniqueInput
    update?: XOR<XOR<NotebookUpdateToOneWithWhereWithoutFlashDecksInput, NotebookUpdateWithoutFlashDecksInput>, NotebookUncheckedUpdateWithoutFlashDecksInput>
  }

  export type FlashCardUpdateManyWithoutAlashDeckNestedInput = {
    create?: XOR<FlashCardCreateWithoutAlashDeckInput, FlashCardUncheckedCreateWithoutAlashDeckInput> | FlashCardCreateWithoutAlashDeckInput[] | FlashCardUncheckedCreateWithoutAlashDeckInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutAlashDeckInput | FlashCardCreateOrConnectWithoutAlashDeckInput[]
    upsert?: FlashCardUpsertWithWhereUniqueWithoutAlashDeckInput | FlashCardUpsertWithWhereUniqueWithoutAlashDeckInput[]
    createMany?: FlashCardCreateManyAlashDeckInputEnvelope
    set?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    disconnect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    delete?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    update?: FlashCardUpdateWithWhereUniqueWithoutAlashDeckInput | FlashCardUpdateWithWhereUniqueWithoutAlashDeckInput[]
    updateMany?: FlashCardUpdateManyWithWhereWithoutAlashDeckInput | FlashCardUpdateManyWithWhereWithoutAlashDeckInput[]
    deleteMany?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
  }

  export type FlashCardUncheckedUpdateManyWithoutAlashDeckNestedInput = {
    create?: XOR<FlashCardCreateWithoutAlashDeckInput, FlashCardUncheckedCreateWithoutAlashDeckInput> | FlashCardCreateWithoutAlashDeckInput[] | FlashCardUncheckedCreateWithoutAlashDeckInput[]
    connectOrCreate?: FlashCardCreateOrConnectWithoutAlashDeckInput | FlashCardCreateOrConnectWithoutAlashDeckInput[]
    upsert?: FlashCardUpsertWithWhereUniqueWithoutAlashDeckInput | FlashCardUpsertWithWhereUniqueWithoutAlashDeckInput[]
    createMany?: FlashCardCreateManyAlashDeckInputEnvelope
    set?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    disconnect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    delete?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    connect?: FlashCardWhereUniqueInput | FlashCardWhereUniqueInput[]
    update?: FlashCardUpdateWithWhereUniqueWithoutAlashDeckInput | FlashCardUpdateWithWhereUniqueWithoutAlashDeckInput[]
    updateMany?: FlashCardUpdateManyWithWhereWithoutAlashDeckInput | FlashCardUpdateManyWithWhereWithoutAlashDeckInput[]
    deleteMany?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
  }

  export type FlashDeckCreateNestedOneWithoutFlashCardsInput = {
    create?: XOR<FlashDeckCreateWithoutFlashCardsInput, FlashDeckUncheckedCreateWithoutFlashCardsInput>
    connectOrCreate?: FlashDeckCreateOrConnectWithoutFlashCardsInput
    connect?: FlashDeckWhereUniqueInput
  }

  export type FlashCardAnswerCreateNestedManyWithoutFlashCardInput = {
    create?: XOR<FlashCardAnswerCreateWithoutFlashCardInput, FlashCardAnswerUncheckedCreateWithoutFlashCardInput> | FlashCardAnswerCreateWithoutFlashCardInput[] | FlashCardAnswerUncheckedCreateWithoutFlashCardInput[]
    connectOrCreate?: FlashCardAnswerCreateOrConnectWithoutFlashCardInput | FlashCardAnswerCreateOrConnectWithoutFlashCardInput[]
    createMany?: FlashCardAnswerCreateManyFlashCardInputEnvelope
    connect?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
  }

  export type FlashCardAnswerUncheckedCreateNestedManyWithoutFlashCardInput = {
    create?: XOR<FlashCardAnswerCreateWithoutFlashCardInput, FlashCardAnswerUncheckedCreateWithoutFlashCardInput> | FlashCardAnswerCreateWithoutFlashCardInput[] | FlashCardAnswerUncheckedCreateWithoutFlashCardInput[]
    connectOrCreate?: FlashCardAnswerCreateOrConnectWithoutFlashCardInput | FlashCardAnswerCreateOrConnectWithoutFlashCardInput[]
    createMany?: FlashCardAnswerCreateManyFlashCardInputEnvelope
    connect?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
  }

  export type FlashDeckUpdateOneRequiredWithoutFlashCardsNestedInput = {
    create?: XOR<FlashDeckCreateWithoutFlashCardsInput, FlashDeckUncheckedCreateWithoutFlashCardsInput>
    connectOrCreate?: FlashDeckCreateOrConnectWithoutFlashCardsInput
    upsert?: FlashDeckUpsertWithoutFlashCardsInput
    connect?: FlashDeckWhereUniqueInput
    update?: XOR<XOR<FlashDeckUpdateToOneWithWhereWithoutFlashCardsInput, FlashDeckUpdateWithoutFlashCardsInput>, FlashDeckUncheckedUpdateWithoutFlashCardsInput>
  }

  export type FlashCardAnswerUpdateManyWithoutFlashCardNestedInput = {
    create?: XOR<FlashCardAnswerCreateWithoutFlashCardInput, FlashCardAnswerUncheckedCreateWithoutFlashCardInput> | FlashCardAnswerCreateWithoutFlashCardInput[] | FlashCardAnswerUncheckedCreateWithoutFlashCardInput[]
    connectOrCreate?: FlashCardAnswerCreateOrConnectWithoutFlashCardInput | FlashCardAnswerCreateOrConnectWithoutFlashCardInput[]
    upsert?: FlashCardAnswerUpsertWithWhereUniqueWithoutFlashCardInput | FlashCardAnswerUpsertWithWhereUniqueWithoutFlashCardInput[]
    createMany?: FlashCardAnswerCreateManyFlashCardInputEnvelope
    set?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
    disconnect?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
    delete?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
    connect?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
    update?: FlashCardAnswerUpdateWithWhereUniqueWithoutFlashCardInput | FlashCardAnswerUpdateWithWhereUniqueWithoutFlashCardInput[]
    updateMany?: FlashCardAnswerUpdateManyWithWhereWithoutFlashCardInput | FlashCardAnswerUpdateManyWithWhereWithoutFlashCardInput[]
    deleteMany?: FlashCardAnswerScalarWhereInput | FlashCardAnswerScalarWhereInput[]
  }

  export type FlashCardAnswerUncheckedUpdateManyWithoutFlashCardNestedInput = {
    create?: XOR<FlashCardAnswerCreateWithoutFlashCardInput, FlashCardAnswerUncheckedCreateWithoutFlashCardInput> | FlashCardAnswerCreateWithoutFlashCardInput[] | FlashCardAnswerUncheckedCreateWithoutFlashCardInput[]
    connectOrCreate?: FlashCardAnswerCreateOrConnectWithoutFlashCardInput | FlashCardAnswerCreateOrConnectWithoutFlashCardInput[]
    upsert?: FlashCardAnswerUpsertWithWhereUniqueWithoutFlashCardInput | FlashCardAnswerUpsertWithWhereUniqueWithoutFlashCardInput[]
    createMany?: FlashCardAnswerCreateManyFlashCardInputEnvelope
    set?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
    disconnect?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
    delete?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
    connect?: FlashCardAnswerWhereUniqueInput | FlashCardAnswerWhereUniqueInput[]
    update?: FlashCardAnswerUpdateWithWhereUniqueWithoutFlashCardInput | FlashCardAnswerUpdateWithWhereUniqueWithoutFlashCardInput[]
    updateMany?: FlashCardAnswerUpdateManyWithWhereWithoutFlashCardInput | FlashCardAnswerUpdateManyWithWhereWithoutFlashCardInput[]
    deleteMany?: FlashCardAnswerScalarWhereInput | FlashCardAnswerScalarWhereInput[]
  }

  export type FlashCardCreateNestedOneWithoutAnswersInput = {
    create?: XOR<FlashCardCreateWithoutAnswersInput, FlashCardUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: FlashCardCreateOrConnectWithoutAnswersInput
    connect?: FlashCardWhereUniqueInput
  }

  export type FlashCardUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<FlashCardCreateWithoutAnswersInput, FlashCardUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: FlashCardCreateOrConnectWithoutAnswersInput
    upsert?: FlashCardUpsertWithoutAnswersInput
    connect?: FlashCardWhereUniqueInput
    update?: XOR<XOR<FlashCardUpdateToOneWithWhereWithoutAnswersInput, FlashCardUpdateWithoutAnswersInput>, FlashCardUncheckedUpdateWithoutAnswersInput>
  }

  export type NotebookCreateNestedManyWithoutIconInput = {
    create?: XOR<NotebookCreateWithoutIconInput, NotebookUncheckedCreateWithoutIconInput> | NotebookCreateWithoutIconInput[] | NotebookUncheckedCreateWithoutIconInput[]
    connectOrCreate?: NotebookCreateOrConnectWithoutIconInput | NotebookCreateOrConnectWithoutIconInput[]
    createMany?: NotebookCreateManyIconInputEnvelope
    connect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
  }

  export type FlashDeckCreateNestedManyWithoutIconInput = {
    create?: XOR<FlashDeckCreateWithoutIconInput, FlashDeckUncheckedCreateWithoutIconInput> | FlashDeckCreateWithoutIconInput[] | FlashDeckUncheckedCreateWithoutIconInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutIconInput | FlashDeckCreateOrConnectWithoutIconInput[]
    createMany?: FlashDeckCreateManyIconInputEnvelope
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
  }

  export type NotebookUncheckedCreateNestedManyWithoutIconInput = {
    create?: XOR<NotebookCreateWithoutIconInput, NotebookUncheckedCreateWithoutIconInput> | NotebookCreateWithoutIconInput[] | NotebookUncheckedCreateWithoutIconInput[]
    connectOrCreate?: NotebookCreateOrConnectWithoutIconInput | NotebookCreateOrConnectWithoutIconInput[]
    createMany?: NotebookCreateManyIconInputEnvelope
    connect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
  }

  export type FlashDeckUncheckedCreateNestedManyWithoutIconInput = {
    create?: XOR<FlashDeckCreateWithoutIconInput, FlashDeckUncheckedCreateWithoutIconInput> | FlashDeckCreateWithoutIconInput[] | FlashDeckUncheckedCreateWithoutIconInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutIconInput | FlashDeckCreateOrConnectWithoutIconInput[]
    createMany?: FlashDeckCreateManyIconInputEnvelope
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
  }

  export type NotebookUpdateManyWithoutIconNestedInput = {
    create?: XOR<NotebookCreateWithoutIconInput, NotebookUncheckedCreateWithoutIconInput> | NotebookCreateWithoutIconInput[] | NotebookUncheckedCreateWithoutIconInput[]
    connectOrCreate?: NotebookCreateOrConnectWithoutIconInput | NotebookCreateOrConnectWithoutIconInput[]
    upsert?: NotebookUpsertWithWhereUniqueWithoutIconInput | NotebookUpsertWithWhereUniqueWithoutIconInput[]
    createMany?: NotebookCreateManyIconInputEnvelope
    set?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    disconnect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    delete?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    connect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    update?: NotebookUpdateWithWhereUniqueWithoutIconInput | NotebookUpdateWithWhereUniqueWithoutIconInput[]
    updateMany?: NotebookUpdateManyWithWhereWithoutIconInput | NotebookUpdateManyWithWhereWithoutIconInput[]
    deleteMany?: NotebookScalarWhereInput | NotebookScalarWhereInput[]
  }

  export type FlashDeckUpdateManyWithoutIconNestedInput = {
    create?: XOR<FlashDeckCreateWithoutIconInput, FlashDeckUncheckedCreateWithoutIconInput> | FlashDeckCreateWithoutIconInput[] | FlashDeckUncheckedCreateWithoutIconInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutIconInput | FlashDeckCreateOrConnectWithoutIconInput[]
    upsert?: FlashDeckUpsertWithWhereUniqueWithoutIconInput | FlashDeckUpsertWithWhereUniqueWithoutIconInput[]
    createMany?: FlashDeckCreateManyIconInputEnvelope
    set?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    disconnect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    delete?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    update?: FlashDeckUpdateWithWhereUniqueWithoutIconInput | FlashDeckUpdateWithWhereUniqueWithoutIconInput[]
    updateMany?: FlashDeckUpdateManyWithWhereWithoutIconInput | FlashDeckUpdateManyWithWhereWithoutIconInput[]
    deleteMany?: FlashDeckScalarWhereInput | FlashDeckScalarWhereInput[]
  }

  export type NotebookUncheckedUpdateManyWithoutIconNestedInput = {
    create?: XOR<NotebookCreateWithoutIconInput, NotebookUncheckedCreateWithoutIconInput> | NotebookCreateWithoutIconInput[] | NotebookUncheckedCreateWithoutIconInput[]
    connectOrCreate?: NotebookCreateOrConnectWithoutIconInput | NotebookCreateOrConnectWithoutIconInput[]
    upsert?: NotebookUpsertWithWhereUniqueWithoutIconInput | NotebookUpsertWithWhereUniqueWithoutIconInput[]
    createMany?: NotebookCreateManyIconInputEnvelope
    set?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    disconnect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    delete?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    connect?: NotebookWhereUniqueInput | NotebookWhereUniqueInput[]
    update?: NotebookUpdateWithWhereUniqueWithoutIconInput | NotebookUpdateWithWhereUniqueWithoutIconInput[]
    updateMany?: NotebookUpdateManyWithWhereWithoutIconInput | NotebookUpdateManyWithWhereWithoutIconInput[]
    deleteMany?: NotebookScalarWhereInput | NotebookScalarWhereInput[]
  }

  export type FlashDeckUncheckedUpdateManyWithoutIconNestedInput = {
    create?: XOR<FlashDeckCreateWithoutIconInput, FlashDeckUncheckedCreateWithoutIconInput> | FlashDeckCreateWithoutIconInput[] | FlashDeckUncheckedCreateWithoutIconInput[]
    connectOrCreate?: FlashDeckCreateOrConnectWithoutIconInput | FlashDeckCreateOrConnectWithoutIconInput[]
    upsert?: FlashDeckUpsertWithWhereUniqueWithoutIconInput | FlashDeckUpsertWithWhereUniqueWithoutIconInput[]
    createMany?: FlashDeckCreateManyIconInputEnvelope
    set?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    disconnect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    delete?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    connect?: FlashDeckWhereUniqueInput | FlashDeckWhereUniqueInput[]
    update?: FlashDeckUpdateWithWhereUniqueWithoutIconInput | FlashDeckUpdateWithWhereUniqueWithoutIconInput[]
    updateMany?: FlashDeckUpdateManyWithWhereWithoutIconInput | FlashDeckUpdateManyWithWhereWithoutIconInput[]
    deleteMany?: FlashDeckScalarWhereInput | FlashDeckScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
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

  export type ProfilePictureCreateWithoutUsersInput = {
    profilePictureId?: string
    picture: Uint8Array
  }

  export type ProfilePictureUncheckedCreateWithoutUsersInput = {
    profilePictureId?: string
    picture: Uint8Array
  }

  export type ProfilePictureCreateOrConnectWithoutUsersInput = {
    where: ProfilePictureWhereUniqueInput
    create: XOR<ProfilePictureCreateWithoutUsersInput, ProfilePictureUncheckedCreateWithoutUsersInput>
  }

  export type NotebookCreateWithoutOwnerInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    icon: IconCreateNestedOneWithoutNotebooksInput
    notes?: NoteCreateNestedManyWithoutNotebookInput
    flashDecks?: FlashDeckCreateNestedManyWithoutNotebookInput
  }

  export type NotebookUncheckedCreateWithoutOwnerInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    iconId: string
    notes?: NoteUncheckedCreateNestedManyWithoutNotebookInput
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutNotebookInput
  }

  export type NotebookCreateOrConnectWithoutOwnerInput = {
    where: NotebookWhereUniqueInput
    create: XOR<NotebookCreateWithoutOwnerInput, NotebookUncheckedCreateWithoutOwnerInput>
  }

  export type NotebookCreateManyOwnerInputEnvelope = {
    data: NotebookCreateManyOwnerInput | NotebookCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CalendarCreateWithoutUserInput = {
    calendarId?: string
    title: string
    color?: string | null
    events?: EventCreateNestedManyWithoutCalendarInput
  }

  export type CalendarUncheckedCreateWithoutUserInput = {
    calendarId?: string
    title: string
    color?: string | null
    events?: EventUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type CalendarCreateOrConnectWithoutUserInput = {
    where: CalendarWhereUniqueInput
    create: XOR<CalendarCreateWithoutUserInput, CalendarUncheckedCreateWithoutUserInput>
  }

  export type FlashDeckCreateWithoutUserInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    icon: IconCreateNestedOneWithoutFlashDecksInput
    notebook?: NotebookCreateNestedOneWithoutFlashDecksInput
    flashCards?: FlashCardCreateNestedManyWithoutAlashDeckInput
  }

  export type FlashDeckUncheckedCreateWithoutUserInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    iconId: string
    notebookId?: string | null
    flashCards?: FlashCardUncheckedCreateNestedManyWithoutAlashDeckInput
  }

  export type FlashDeckCreateOrConnectWithoutUserInput = {
    where: FlashDeckWhereUniqueInput
    create: XOR<FlashDeckCreateWithoutUserInput, FlashDeckUncheckedCreateWithoutUserInput>
  }

  export type FlashDeckCreateManyUserInputEnvelope = {
    data: FlashDeckCreateManyUserInput | FlashDeckCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfilePictureUpsertWithoutUsersInput = {
    update: XOR<ProfilePictureUpdateWithoutUsersInput, ProfilePictureUncheckedUpdateWithoutUsersInput>
    create: XOR<ProfilePictureCreateWithoutUsersInput, ProfilePictureUncheckedCreateWithoutUsersInput>
    where?: ProfilePictureWhereInput
  }

  export type ProfilePictureUpdateToOneWithWhereWithoutUsersInput = {
    where?: ProfilePictureWhereInput
    data: XOR<ProfilePictureUpdateWithoutUsersInput, ProfilePictureUncheckedUpdateWithoutUsersInput>
  }

  export type ProfilePictureUpdateWithoutUsersInput = {
    profilePictureId?: StringFieldUpdateOperationsInput | string
    picture?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type ProfilePictureUncheckedUpdateWithoutUsersInput = {
    profilePictureId?: StringFieldUpdateOperationsInput | string
    picture?: BytesFieldUpdateOperationsInput | Uint8Array
  }

  export type NotebookUpsertWithWhereUniqueWithoutOwnerInput = {
    where: NotebookWhereUniqueInput
    update: XOR<NotebookUpdateWithoutOwnerInput, NotebookUncheckedUpdateWithoutOwnerInput>
    create: XOR<NotebookCreateWithoutOwnerInput, NotebookUncheckedCreateWithoutOwnerInput>
  }

  export type NotebookUpdateWithWhereUniqueWithoutOwnerInput = {
    where: NotebookWhereUniqueInput
    data: XOR<NotebookUpdateWithoutOwnerInput, NotebookUncheckedUpdateWithoutOwnerInput>
  }

  export type NotebookUpdateManyWithWhereWithoutOwnerInput = {
    where: NotebookScalarWhereInput
    data: XOR<NotebookUpdateManyMutationInput, NotebookUncheckedUpdateManyWithoutOwnerInput>
  }

  export type NotebookScalarWhereInput = {
    AND?: NotebookScalarWhereInput | NotebookScalarWhereInput[]
    OR?: NotebookScalarWhereInput[]
    NOT?: NotebookScalarWhereInput | NotebookScalarWhereInput[]
    notebookId?: StringFilter<"Notebook"> | string
    title?: StringFilter<"Notebook"> | string
    color?: StringNullableFilter<"Notebook"> | string | null
    tags?: StringNullableListFilter<"Notebook">
    createdAt?: DateTimeFilter<"Notebook"> | Date | string
    updatedAt?: DateTimeFilter<"Notebook"> | Date | string
    ownerId?: StringFilter<"Notebook"> | string
    iconId?: StringFilter<"Notebook"> | string
  }

  export type CalendarUpsertWithoutUserInput = {
    update: XOR<CalendarUpdateWithoutUserInput, CalendarUncheckedUpdateWithoutUserInput>
    create: XOR<CalendarCreateWithoutUserInput, CalendarUncheckedCreateWithoutUserInput>
    where?: CalendarWhereInput
  }

  export type CalendarUpdateToOneWithWhereWithoutUserInput = {
    where?: CalendarWhereInput
    data: XOR<CalendarUpdateWithoutUserInput, CalendarUncheckedUpdateWithoutUserInput>
  }

  export type CalendarUpdateWithoutUserInput = {
    calendarId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutCalendarNestedInput
  }

  export type CalendarUncheckedUpdateWithoutUserInput = {
    calendarId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type FlashDeckUpsertWithWhereUniqueWithoutUserInput = {
    where: FlashDeckWhereUniqueInput
    update: XOR<FlashDeckUpdateWithoutUserInput, FlashDeckUncheckedUpdateWithoutUserInput>
    create: XOR<FlashDeckCreateWithoutUserInput, FlashDeckUncheckedCreateWithoutUserInput>
  }

  export type FlashDeckUpdateWithWhereUniqueWithoutUserInput = {
    where: FlashDeckWhereUniqueInput
    data: XOR<FlashDeckUpdateWithoutUserInput, FlashDeckUncheckedUpdateWithoutUserInput>
  }

  export type FlashDeckUpdateManyWithWhereWithoutUserInput = {
    where: FlashDeckScalarWhereInput
    data: XOR<FlashDeckUpdateManyMutationInput, FlashDeckUncheckedUpdateManyWithoutUserInput>
  }

  export type FlashDeckScalarWhereInput = {
    AND?: FlashDeckScalarWhereInput | FlashDeckScalarWhereInput[]
    OR?: FlashDeckScalarWhereInput[]
    NOT?: FlashDeckScalarWhereInput | FlashDeckScalarWhereInput[]
    flashDeckId?: StringFilter<"FlashDeck"> | string
    title?: StringFilter<"FlashDeck"> | string
    description?: StringFilter<"FlashDeck"> | string
    color?: StringNullableFilter<"FlashDeck"> | string | null
    tags?: StringNullableListFilter<"FlashDeck">
    createdAt?: DateTimeFilter<"FlashDeck"> | Date | string
    updatedAt?: DateTimeFilter<"FlashDeck"> | Date | string
    userId?: StringFilter<"FlashDeck"> | string
    iconId?: StringFilter<"FlashDeck"> | string
    notebookId?: StringNullableFilter<"FlashDeck"> | string | null
  }

  export type UserCreateWithoutProfilePictureInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    notebooks?: NotebookCreateNestedManyWithoutOwnerInput
    calendar?: CalendarCreateNestedOneWithoutUserInput
    flashDecks?: FlashDeckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfilePictureInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    notebooks?: NotebookUncheckedCreateNestedManyWithoutOwnerInput
    calendar?: CalendarUncheckedCreateNestedOneWithoutUserInput
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfilePictureInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput>
  }

  export type UserCreateManyProfilePictureInputEnvelope = {
    data: UserCreateManyProfilePictureInput | UserCreateManyProfilePictureInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutProfilePictureInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProfilePictureInput, UserUncheckedUpdateWithoutProfilePictureInput>
    create: XOR<UserCreateWithoutProfilePictureInput, UserUncheckedCreateWithoutProfilePictureInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProfilePictureInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProfilePictureInput, UserUncheckedUpdateWithoutProfilePictureInput>
  }

  export type UserUpdateManyWithWhereWithoutProfilePictureInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProfilePictureInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    hashedPassword?: StringFilter<"User"> | string
    passwordSalt?: StringFilter<"User"> | string
    profilePictureId?: StringFilter<"User"> | string
  }

  export type UserCreateWithoutNotebooksInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePicture: ProfilePictureCreateNestedOneWithoutUsersInput
    calendar?: CalendarCreateNestedOneWithoutUserInput
    flashDecks?: FlashDeckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotebooksInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePictureId: string
    calendar?: CalendarUncheckedCreateNestedOneWithoutUserInput
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotebooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotebooksInput, UserUncheckedCreateWithoutNotebooksInput>
  }

  export type IconCreateWithoutNotebooksInput = {
    iconId?: string
    icon: Uint8Array
    flashDecks?: FlashDeckCreateNestedManyWithoutIconInput
  }

  export type IconUncheckedCreateWithoutNotebooksInput = {
    iconId?: string
    icon: Uint8Array
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutIconInput
  }

  export type IconCreateOrConnectWithoutNotebooksInput = {
    where: IconWhereUniqueInput
    create: XOR<IconCreateWithoutNotebooksInput, IconUncheckedCreateWithoutNotebooksInput>
  }

  export type NoteCreateWithoutNotebookInput = {
    noteId?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUncheckedCreateWithoutNotebookInput = {
    noteId?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutNotebookInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutNotebookInput, NoteUncheckedCreateWithoutNotebookInput>
  }

  export type NoteCreateManyNotebookInputEnvelope = {
    data: NoteCreateManyNotebookInput | NoteCreateManyNotebookInput[]
    skipDuplicates?: boolean
  }

  export type FlashDeckCreateWithoutNotebookInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlashDecksInput
    icon: IconCreateNestedOneWithoutFlashDecksInput
    flashCards?: FlashCardCreateNestedManyWithoutAlashDeckInput
  }

  export type FlashDeckUncheckedCreateWithoutNotebookInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    iconId: string
    flashCards?: FlashCardUncheckedCreateNestedManyWithoutAlashDeckInput
  }

  export type FlashDeckCreateOrConnectWithoutNotebookInput = {
    where: FlashDeckWhereUniqueInput
    create: XOR<FlashDeckCreateWithoutNotebookInput, FlashDeckUncheckedCreateWithoutNotebookInput>
  }

  export type FlashDeckCreateManyNotebookInputEnvelope = {
    data: FlashDeckCreateManyNotebookInput | FlashDeckCreateManyNotebookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotebooksInput = {
    update: XOR<UserUpdateWithoutNotebooksInput, UserUncheckedUpdateWithoutNotebooksInput>
    create: XOR<UserCreateWithoutNotebooksInput, UserUncheckedCreateWithoutNotebooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotebooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotebooksInput, UserUncheckedUpdateWithoutNotebooksInput>
  }

  export type UserUpdateWithoutNotebooksInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePicture?: ProfilePictureUpdateOneRequiredWithoutUsersNestedInput
    calendar?: CalendarUpdateOneWithoutUserNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotebooksInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePictureId?: StringFieldUpdateOperationsInput | string
    calendar?: CalendarUncheckedUpdateOneWithoutUserNestedInput
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IconUpsertWithoutNotebooksInput = {
    update: XOR<IconUpdateWithoutNotebooksInput, IconUncheckedUpdateWithoutNotebooksInput>
    create: XOR<IconCreateWithoutNotebooksInput, IconUncheckedCreateWithoutNotebooksInput>
    where?: IconWhereInput
  }

  export type IconUpdateToOneWithWhereWithoutNotebooksInput = {
    where?: IconWhereInput
    data: XOR<IconUpdateWithoutNotebooksInput, IconUncheckedUpdateWithoutNotebooksInput>
  }

  export type IconUpdateWithoutNotebooksInput = {
    iconId?: StringFieldUpdateOperationsInput | string
    icon?: BytesFieldUpdateOperationsInput | Uint8Array
    flashDecks?: FlashDeckUpdateManyWithoutIconNestedInput
  }

  export type IconUncheckedUpdateWithoutNotebooksInput = {
    iconId?: StringFieldUpdateOperationsInput | string
    icon?: BytesFieldUpdateOperationsInput | Uint8Array
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutIconNestedInput
  }

  export type NoteUpsertWithWhereUniqueWithoutNotebookInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutNotebookInput, NoteUncheckedUpdateWithoutNotebookInput>
    create: XOR<NoteCreateWithoutNotebookInput, NoteUncheckedCreateWithoutNotebookInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutNotebookInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutNotebookInput, NoteUncheckedUpdateWithoutNotebookInput>
  }

  export type NoteUpdateManyWithWhereWithoutNotebookInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutNotebookInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    noteId?: StringFilter<"Note"> | string
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    tags?: StringNullableListFilter<"Note">
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    notebookId?: StringFilter<"Note"> | string
  }

  export type FlashDeckUpsertWithWhereUniqueWithoutNotebookInput = {
    where: FlashDeckWhereUniqueInput
    update: XOR<FlashDeckUpdateWithoutNotebookInput, FlashDeckUncheckedUpdateWithoutNotebookInput>
    create: XOR<FlashDeckCreateWithoutNotebookInput, FlashDeckUncheckedCreateWithoutNotebookInput>
  }

  export type FlashDeckUpdateWithWhereUniqueWithoutNotebookInput = {
    where: FlashDeckWhereUniqueInput
    data: XOR<FlashDeckUpdateWithoutNotebookInput, FlashDeckUncheckedUpdateWithoutNotebookInput>
  }

  export type FlashDeckUpdateManyWithWhereWithoutNotebookInput = {
    where: FlashDeckScalarWhereInput
    data: XOR<FlashDeckUpdateManyMutationInput, FlashDeckUncheckedUpdateManyWithoutNotebookInput>
  }

  export type NotebookCreateWithoutNotesInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotebooksInput
    icon: IconCreateNestedOneWithoutNotebooksInput
    flashDecks?: FlashDeckCreateNestedManyWithoutNotebookInput
  }

  export type NotebookUncheckedCreateWithoutNotesInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    iconId: string
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutNotebookInput
  }

  export type NotebookCreateOrConnectWithoutNotesInput = {
    where: NotebookWhereUniqueInput
    create: XOR<NotebookCreateWithoutNotesInput, NotebookUncheckedCreateWithoutNotesInput>
  }

  export type NotebookUpsertWithoutNotesInput = {
    update: XOR<NotebookUpdateWithoutNotesInput, NotebookUncheckedUpdateWithoutNotesInput>
    create: XOR<NotebookCreateWithoutNotesInput, NotebookUncheckedCreateWithoutNotesInput>
    where?: NotebookWhereInput
  }

  export type NotebookUpdateToOneWithWhereWithoutNotesInput = {
    where?: NotebookWhereInput
    data: XOR<NotebookUpdateWithoutNotesInput, NotebookUncheckedUpdateWithoutNotesInput>
  }

  export type NotebookUpdateWithoutNotesInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotebooksNestedInput
    icon?: IconUpdateOneRequiredWithoutNotebooksNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateWithoutNotesInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutNotebookNestedInput
  }

  export type UserCreateWithoutCalendarInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePicture: ProfilePictureCreateNestedOneWithoutUsersInput
    notebooks?: NotebookCreateNestedManyWithoutOwnerInput
    flashDecks?: FlashDeckCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCalendarInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePictureId: string
    notebooks?: NotebookUncheckedCreateNestedManyWithoutOwnerInput
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCalendarInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarInput, UserUncheckedCreateWithoutCalendarInput>
  }

  export type EventCreateWithoutCalendarInput = {
    eventId?: string
    title: string
    description?: string
    tags?: EventCreatetagsInput | string[]
    color?: string | null
    eventTimes?: EventTimeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCalendarInput = {
    eventId?: string
    title: string
    description?: string
    tags?: EventCreatetagsInput | string[]
    color?: string | null
    eventTimes?: EventTimeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCalendarInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput>
  }

  export type EventCreateManyCalendarInputEnvelope = {
    data: EventCreateManyCalendarInput | EventCreateManyCalendarInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCalendarInput = {
    update: XOR<UserUpdateWithoutCalendarInput, UserUncheckedUpdateWithoutCalendarInput>
    create: XOR<UserCreateWithoutCalendarInput, UserUncheckedCreateWithoutCalendarInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCalendarInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCalendarInput, UserUncheckedUpdateWithoutCalendarInput>
  }

  export type UserUpdateWithoutCalendarInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePicture?: ProfilePictureUpdateOneRequiredWithoutUsersNestedInput
    notebooks?: NotebookUpdateManyWithoutOwnerNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePictureId?: StringFieldUpdateOperationsInput | string
    notebooks?: NotebookUncheckedUpdateManyWithoutOwnerNestedInput
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutCalendarInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCalendarInput, EventUncheckedUpdateWithoutCalendarInput>
    create: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCalendarInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCalendarInput, EventUncheckedUpdateWithoutCalendarInput>
  }

  export type EventUpdateManyWithWhereWithoutCalendarInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCalendarInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    eventId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    tags?: StringNullableListFilter<"Event">
    color?: StringNullableFilter<"Event"> | string | null
    calendarId?: StringFilter<"Event"> | string
  }

  export type CalendarCreateWithoutEventsInput = {
    calendarId?: string
    title: string
    color?: string | null
    user: UserCreateNestedOneWithoutCalendarInput
  }

  export type CalendarUncheckedCreateWithoutEventsInput = {
    calendarId?: string
    title: string
    color?: string | null
    userId: string
  }

  export type CalendarCreateOrConnectWithoutEventsInput = {
    where: CalendarWhereUniqueInput
    create: XOR<CalendarCreateWithoutEventsInput, CalendarUncheckedCreateWithoutEventsInput>
  }

  export type EventTimeCreateWithoutEventInput = {
    eventTimeId?: string
    date: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type EventTimeUncheckedCreateWithoutEventInput = {
    eventTimeId?: string
    date: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type EventTimeCreateOrConnectWithoutEventInput = {
    where: EventTimeWhereUniqueInput
    create: XOR<EventTimeCreateWithoutEventInput, EventTimeUncheckedCreateWithoutEventInput>
  }

  export type EventTimeCreateManyEventInputEnvelope = {
    data: EventTimeCreateManyEventInput | EventTimeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type CalendarUpsertWithoutEventsInput = {
    update: XOR<CalendarUpdateWithoutEventsInput, CalendarUncheckedUpdateWithoutEventsInput>
    create: XOR<CalendarCreateWithoutEventsInput, CalendarUncheckedCreateWithoutEventsInput>
    where?: CalendarWhereInput
  }

  export type CalendarUpdateToOneWithWhereWithoutEventsInput = {
    where?: CalendarWhereInput
    data: XOR<CalendarUpdateWithoutEventsInput, CalendarUncheckedUpdateWithoutEventsInput>
  }

  export type CalendarUpdateWithoutEventsInput = {
    calendarId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCalendarNestedInput
  }

  export type CalendarUncheckedUpdateWithoutEventsInput = {
    calendarId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EventTimeUpsertWithWhereUniqueWithoutEventInput = {
    where: EventTimeWhereUniqueInput
    update: XOR<EventTimeUpdateWithoutEventInput, EventTimeUncheckedUpdateWithoutEventInput>
    create: XOR<EventTimeCreateWithoutEventInput, EventTimeUncheckedCreateWithoutEventInput>
  }

  export type EventTimeUpdateWithWhereUniqueWithoutEventInput = {
    where: EventTimeWhereUniqueInput
    data: XOR<EventTimeUpdateWithoutEventInput, EventTimeUncheckedUpdateWithoutEventInput>
  }

  export type EventTimeUpdateManyWithWhereWithoutEventInput = {
    where: EventTimeScalarWhereInput
    data: XOR<EventTimeUpdateManyMutationInput, EventTimeUncheckedUpdateManyWithoutEventInput>
  }

  export type EventTimeScalarWhereInput = {
    AND?: EventTimeScalarWhereInput | EventTimeScalarWhereInput[]
    OR?: EventTimeScalarWhereInput[]
    NOT?: EventTimeScalarWhereInput | EventTimeScalarWhereInput[]
    eventTimeId?: StringFilter<"EventTime"> | string
    date?: DateTimeFilter<"EventTime"> | Date | string
    start_time?: DateTimeFilter<"EventTime"> | Date | string
    end_time?: DateTimeFilter<"EventTime"> | Date | string
    eventId?: StringFilter<"EventTime"> | string
  }

  export type EventCreateWithoutEventTimesInput = {
    eventId?: string
    title: string
    description?: string
    tags?: EventCreatetagsInput | string[]
    color?: string | null
    calendar: CalendarCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutEventTimesInput = {
    eventId?: string
    title: string
    description?: string
    tags?: EventCreatetagsInput | string[]
    color?: string | null
    calendarId: string
  }

  export type EventCreateOrConnectWithoutEventTimesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventTimesInput, EventUncheckedCreateWithoutEventTimesInput>
  }

  export type EventUpsertWithoutEventTimesInput = {
    update: XOR<EventUpdateWithoutEventTimesInput, EventUncheckedUpdateWithoutEventTimesInput>
    create: XOR<EventCreateWithoutEventTimesInput, EventUncheckedCreateWithoutEventTimesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventTimesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventTimesInput, EventUncheckedUpdateWithoutEventTimesInput>
  }

  export type EventUpdateWithoutEventTimesInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
    calendar?: CalendarUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutEventTimesInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutFlashDecksInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePicture: ProfilePictureCreateNestedOneWithoutUsersInput
    notebooks?: NotebookCreateNestedManyWithoutOwnerInput
    calendar?: CalendarCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlashDecksInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
    profilePictureId: string
    notebooks?: NotebookUncheckedCreateNestedManyWithoutOwnerInput
    calendar?: CalendarUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlashDecksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlashDecksInput, UserUncheckedCreateWithoutFlashDecksInput>
  }

  export type IconCreateWithoutFlashDecksInput = {
    iconId?: string
    icon: Uint8Array
    notebooks?: NotebookCreateNestedManyWithoutIconInput
  }

  export type IconUncheckedCreateWithoutFlashDecksInput = {
    iconId?: string
    icon: Uint8Array
    notebooks?: NotebookUncheckedCreateNestedManyWithoutIconInput
  }

  export type IconCreateOrConnectWithoutFlashDecksInput = {
    where: IconWhereUniqueInput
    create: XOR<IconCreateWithoutFlashDecksInput, IconUncheckedCreateWithoutFlashDecksInput>
  }

  export type NotebookCreateWithoutFlashDecksInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotebooksInput
    icon: IconCreateNestedOneWithoutNotebooksInput
    notes?: NoteCreateNestedManyWithoutNotebookInput
  }

  export type NotebookUncheckedCreateWithoutFlashDecksInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    iconId: string
    notes?: NoteUncheckedCreateNestedManyWithoutNotebookInput
  }

  export type NotebookCreateOrConnectWithoutFlashDecksInput = {
    where: NotebookWhereUniqueInput
    create: XOR<NotebookCreateWithoutFlashDecksInput, NotebookUncheckedCreateWithoutFlashDecksInput>
  }

  export type FlashCardCreateWithoutAlashDeckInput = {
    flashCardId?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: FlashCardAnswerCreateNestedManyWithoutFlashCardInput
  }

  export type FlashCardUncheckedCreateWithoutAlashDeckInput = {
    flashCardId?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: FlashCardAnswerUncheckedCreateNestedManyWithoutFlashCardInput
  }

  export type FlashCardCreateOrConnectWithoutAlashDeckInput = {
    where: FlashCardWhereUniqueInput
    create: XOR<FlashCardCreateWithoutAlashDeckInput, FlashCardUncheckedCreateWithoutAlashDeckInput>
  }

  export type FlashCardCreateManyAlashDeckInputEnvelope = {
    data: FlashCardCreateManyAlashDeckInput | FlashCardCreateManyAlashDeckInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFlashDecksInput = {
    update: XOR<UserUpdateWithoutFlashDecksInput, UserUncheckedUpdateWithoutFlashDecksInput>
    create: XOR<UserCreateWithoutFlashDecksInput, UserUncheckedCreateWithoutFlashDecksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlashDecksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlashDecksInput, UserUncheckedUpdateWithoutFlashDecksInput>
  }

  export type UserUpdateWithoutFlashDecksInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePicture?: ProfilePictureUpdateOneRequiredWithoutUsersNestedInput
    notebooks?: NotebookUpdateManyWithoutOwnerNestedInput
    calendar?: CalendarUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlashDecksInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    profilePictureId?: StringFieldUpdateOperationsInput | string
    notebooks?: NotebookUncheckedUpdateManyWithoutOwnerNestedInput
    calendar?: CalendarUncheckedUpdateOneWithoutUserNestedInput
  }

  export type IconUpsertWithoutFlashDecksInput = {
    update: XOR<IconUpdateWithoutFlashDecksInput, IconUncheckedUpdateWithoutFlashDecksInput>
    create: XOR<IconCreateWithoutFlashDecksInput, IconUncheckedCreateWithoutFlashDecksInput>
    where?: IconWhereInput
  }

  export type IconUpdateToOneWithWhereWithoutFlashDecksInput = {
    where?: IconWhereInput
    data: XOR<IconUpdateWithoutFlashDecksInput, IconUncheckedUpdateWithoutFlashDecksInput>
  }

  export type IconUpdateWithoutFlashDecksInput = {
    iconId?: StringFieldUpdateOperationsInput | string
    icon?: BytesFieldUpdateOperationsInput | Uint8Array
    notebooks?: NotebookUpdateManyWithoutIconNestedInput
  }

  export type IconUncheckedUpdateWithoutFlashDecksInput = {
    iconId?: StringFieldUpdateOperationsInput | string
    icon?: BytesFieldUpdateOperationsInput | Uint8Array
    notebooks?: NotebookUncheckedUpdateManyWithoutIconNestedInput
  }

  export type NotebookUpsertWithoutFlashDecksInput = {
    update: XOR<NotebookUpdateWithoutFlashDecksInput, NotebookUncheckedUpdateWithoutFlashDecksInput>
    create: XOR<NotebookCreateWithoutFlashDecksInput, NotebookUncheckedCreateWithoutFlashDecksInput>
    where?: NotebookWhereInput
  }

  export type NotebookUpdateToOneWithWhereWithoutFlashDecksInput = {
    where?: NotebookWhereInput
    data: XOR<NotebookUpdateWithoutFlashDecksInput, NotebookUncheckedUpdateWithoutFlashDecksInput>
  }

  export type NotebookUpdateWithoutFlashDecksInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotebooksNestedInput
    icon?: IconUpdateOneRequiredWithoutNotebooksNestedInput
    notes?: NoteUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateWithoutFlashDecksInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
    notes?: NoteUncheckedUpdateManyWithoutNotebookNestedInput
  }

  export type FlashCardUpsertWithWhereUniqueWithoutAlashDeckInput = {
    where: FlashCardWhereUniqueInput
    update: XOR<FlashCardUpdateWithoutAlashDeckInput, FlashCardUncheckedUpdateWithoutAlashDeckInput>
    create: XOR<FlashCardCreateWithoutAlashDeckInput, FlashCardUncheckedCreateWithoutAlashDeckInput>
  }

  export type FlashCardUpdateWithWhereUniqueWithoutAlashDeckInput = {
    where: FlashCardWhereUniqueInput
    data: XOR<FlashCardUpdateWithoutAlashDeckInput, FlashCardUncheckedUpdateWithoutAlashDeckInput>
  }

  export type FlashCardUpdateManyWithWhereWithoutAlashDeckInput = {
    where: FlashCardScalarWhereInput
    data: XOR<FlashCardUpdateManyMutationInput, FlashCardUncheckedUpdateManyWithoutAlashDeckInput>
  }

  export type FlashCardScalarWhereInput = {
    AND?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
    OR?: FlashCardScalarWhereInput[]
    NOT?: FlashCardScalarWhereInput | FlashCardScalarWhereInput[]
    flashCardId?: StringFilter<"FlashCard"> | string
    question?: StringFilter<"FlashCard"> | string
    createdAt?: DateTimeFilter<"FlashCard"> | Date | string
    updatedAt?: DateTimeFilter<"FlashCard"> | Date | string
    flashDeckId?: StringFilter<"FlashCard"> | string
  }

  export type FlashDeckCreateWithoutFlashCardsInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlashDecksInput
    icon: IconCreateNestedOneWithoutFlashDecksInput
    notebook?: NotebookCreateNestedOneWithoutFlashDecksInput
  }

  export type FlashDeckUncheckedCreateWithoutFlashCardsInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    iconId: string
    notebookId?: string | null
  }

  export type FlashDeckCreateOrConnectWithoutFlashCardsInput = {
    where: FlashDeckWhereUniqueInput
    create: XOR<FlashDeckCreateWithoutFlashCardsInput, FlashDeckUncheckedCreateWithoutFlashCardsInput>
  }

  export type FlashCardAnswerCreateWithoutFlashCardInput = {
    answerId?: string
    answer?: string
    isCorrect?: boolean
  }

  export type FlashCardAnswerUncheckedCreateWithoutFlashCardInput = {
    answerId?: string
    answer?: string
    isCorrect?: boolean
  }

  export type FlashCardAnswerCreateOrConnectWithoutFlashCardInput = {
    where: FlashCardAnswerWhereUniqueInput
    create: XOR<FlashCardAnswerCreateWithoutFlashCardInput, FlashCardAnswerUncheckedCreateWithoutFlashCardInput>
  }

  export type FlashCardAnswerCreateManyFlashCardInputEnvelope = {
    data: FlashCardAnswerCreateManyFlashCardInput | FlashCardAnswerCreateManyFlashCardInput[]
    skipDuplicates?: boolean
  }

  export type FlashDeckUpsertWithoutFlashCardsInput = {
    update: XOR<FlashDeckUpdateWithoutFlashCardsInput, FlashDeckUncheckedUpdateWithoutFlashCardsInput>
    create: XOR<FlashDeckCreateWithoutFlashCardsInput, FlashDeckUncheckedCreateWithoutFlashCardsInput>
    where?: FlashDeckWhereInput
  }

  export type FlashDeckUpdateToOneWithWhereWithoutFlashCardsInput = {
    where?: FlashDeckWhereInput
    data: XOR<FlashDeckUpdateWithoutFlashCardsInput, FlashDeckUncheckedUpdateWithoutFlashCardsInput>
  }

  export type FlashDeckUpdateWithoutFlashCardsInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlashDecksNestedInput
    icon?: IconUpdateOneRequiredWithoutFlashDecksNestedInput
    notebook?: NotebookUpdateOneWithoutFlashDecksNestedInput
  }

  export type FlashDeckUncheckedUpdateWithoutFlashCardsInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
    notebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlashCardAnswerUpsertWithWhereUniqueWithoutFlashCardInput = {
    where: FlashCardAnswerWhereUniqueInput
    update: XOR<FlashCardAnswerUpdateWithoutFlashCardInput, FlashCardAnswerUncheckedUpdateWithoutFlashCardInput>
    create: XOR<FlashCardAnswerCreateWithoutFlashCardInput, FlashCardAnswerUncheckedCreateWithoutFlashCardInput>
  }

  export type FlashCardAnswerUpdateWithWhereUniqueWithoutFlashCardInput = {
    where: FlashCardAnswerWhereUniqueInput
    data: XOR<FlashCardAnswerUpdateWithoutFlashCardInput, FlashCardAnswerUncheckedUpdateWithoutFlashCardInput>
  }

  export type FlashCardAnswerUpdateManyWithWhereWithoutFlashCardInput = {
    where: FlashCardAnswerScalarWhereInput
    data: XOR<FlashCardAnswerUpdateManyMutationInput, FlashCardAnswerUncheckedUpdateManyWithoutFlashCardInput>
  }

  export type FlashCardAnswerScalarWhereInput = {
    AND?: FlashCardAnswerScalarWhereInput | FlashCardAnswerScalarWhereInput[]
    OR?: FlashCardAnswerScalarWhereInput[]
    NOT?: FlashCardAnswerScalarWhereInput | FlashCardAnswerScalarWhereInput[]
    answerId?: StringFilter<"FlashCardAnswer"> | string
    answer?: StringFilter<"FlashCardAnswer"> | string
    isCorrect?: BoolFilter<"FlashCardAnswer"> | boolean
    flashCardId?: StringFilter<"FlashCardAnswer"> | string
  }

  export type FlashCardCreateWithoutAnswersInput = {
    flashCardId?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alashDeck: FlashDeckCreateNestedOneWithoutFlashCardsInput
  }

  export type FlashCardUncheckedCreateWithoutAnswersInput = {
    flashCardId?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flashDeckId: string
  }

  export type FlashCardCreateOrConnectWithoutAnswersInput = {
    where: FlashCardWhereUniqueInput
    create: XOR<FlashCardCreateWithoutAnswersInput, FlashCardUncheckedCreateWithoutAnswersInput>
  }

  export type FlashCardUpsertWithoutAnswersInput = {
    update: XOR<FlashCardUpdateWithoutAnswersInput, FlashCardUncheckedUpdateWithoutAnswersInput>
    create: XOR<FlashCardCreateWithoutAnswersInput, FlashCardUncheckedCreateWithoutAnswersInput>
    where?: FlashCardWhereInput
  }

  export type FlashCardUpdateToOneWithWhereWithoutAnswersInput = {
    where?: FlashCardWhereInput
    data: XOR<FlashCardUpdateWithoutAnswersInput, FlashCardUncheckedUpdateWithoutAnswersInput>
  }

  export type FlashCardUpdateWithoutAnswersInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alashDeck?: FlashDeckUpdateOneRequiredWithoutFlashCardsNestedInput
  }

  export type FlashCardUncheckedUpdateWithoutAnswersInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flashDeckId?: StringFieldUpdateOperationsInput | string
  }

  export type NotebookCreateWithoutIconInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutNotebooksInput
    notes?: NoteCreateNestedManyWithoutNotebookInput
    flashDecks?: FlashDeckCreateNestedManyWithoutNotebookInput
  }

  export type NotebookUncheckedCreateWithoutIconInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
    notes?: NoteUncheckedCreateNestedManyWithoutNotebookInput
    flashDecks?: FlashDeckUncheckedCreateNestedManyWithoutNotebookInput
  }

  export type NotebookCreateOrConnectWithoutIconInput = {
    where: NotebookWhereUniqueInput
    create: XOR<NotebookCreateWithoutIconInput, NotebookUncheckedCreateWithoutIconInput>
  }

  export type NotebookCreateManyIconInputEnvelope = {
    data: NotebookCreateManyIconInput | NotebookCreateManyIconInput[]
    skipDuplicates?: boolean
  }

  export type FlashDeckCreateWithoutIconInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlashDecksInput
    notebook?: NotebookCreateNestedOneWithoutFlashDecksInput
    flashCards?: FlashCardCreateNestedManyWithoutAlashDeckInput
  }

  export type FlashDeckUncheckedCreateWithoutIconInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    notebookId?: string | null
    flashCards?: FlashCardUncheckedCreateNestedManyWithoutAlashDeckInput
  }

  export type FlashDeckCreateOrConnectWithoutIconInput = {
    where: FlashDeckWhereUniqueInput
    create: XOR<FlashDeckCreateWithoutIconInput, FlashDeckUncheckedCreateWithoutIconInput>
  }

  export type FlashDeckCreateManyIconInputEnvelope = {
    data: FlashDeckCreateManyIconInput | FlashDeckCreateManyIconInput[]
    skipDuplicates?: boolean
  }

  export type NotebookUpsertWithWhereUniqueWithoutIconInput = {
    where: NotebookWhereUniqueInput
    update: XOR<NotebookUpdateWithoutIconInput, NotebookUncheckedUpdateWithoutIconInput>
    create: XOR<NotebookCreateWithoutIconInput, NotebookUncheckedCreateWithoutIconInput>
  }

  export type NotebookUpdateWithWhereUniqueWithoutIconInput = {
    where: NotebookWhereUniqueInput
    data: XOR<NotebookUpdateWithoutIconInput, NotebookUncheckedUpdateWithoutIconInput>
  }

  export type NotebookUpdateManyWithWhereWithoutIconInput = {
    where: NotebookScalarWhereInput
    data: XOR<NotebookUpdateManyMutationInput, NotebookUncheckedUpdateManyWithoutIconInput>
  }

  export type FlashDeckUpsertWithWhereUniqueWithoutIconInput = {
    where: FlashDeckWhereUniqueInput
    update: XOR<FlashDeckUpdateWithoutIconInput, FlashDeckUncheckedUpdateWithoutIconInput>
    create: XOR<FlashDeckCreateWithoutIconInput, FlashDeckUncheckedCreateWithoutIconInput>
  }

  export type FlashDeckUpdateWithWhereUniqueWithoutIconInput = {
    where: FlashDeckWhereUniqueInput
    data: XOR<FlashDeckUpdateWithoutIconInput, FlashDeckUncheckedUpdateWithoutIconInput>
  }

  export type FlashDeckUpdateManyWithWhereWithoutIconInput = {
    where: FlashDeckScalarWhereInput
    data: XOR<FlashDeckUpdateManyMutationInput, FlashDeckUncheckedUpdateManyWithoutIconInput>
  }

  export type NotebookCreateManyOwnerInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    iconId: string
  }

  export type FlashDeckCreateManyUserInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    iconId: string
    notebookId?: string | null
  }

  export type NotebookUpdateWithoutOwnerInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    icon?: IconUpdateOneRequiredWithoutNotebooksNestedInput
    notes?: NoteUpdateManyWithoutNotebookNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateWithoutOwnerInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconId?: StringFieldUpdateOperationsInput | string
    notes?: NoteUncheckedUpdateManyWithoutNotebookNestedInput
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateManyWithoutOwnerInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconId?: StringFieldUpdateOperationsInput | string
  }

  export type FlashDeckUpdateWithoutUserInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    icon?: IconUpdateOneRequiredWithoutFlashDecksNestedInput
    notebook?: NotebookUpdateOneWithoutFlashDecksNestedInput
    flashCards?: FlashCardUpdateManyWithoutAlashDeckNestedInput
  }

  export type FlashDeckUncheckedUpdateWithoutUserInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconId?: StringFieldUpdateOperationsInput | string
    notebookId?: NullableStringFieldUpdateOperationsInput | string | null
    flashCards?: FlashCardUncheckedUpdateManyWithoutAlashDeckNestedInput
  }

  export type FlashDeckUncheckedUpdateManyWithoutUserInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iconId?: StringFieldUpdateOperationsInput | string
    notebookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyProfilePictureInput = {
    userId?: string
    firstName: string
    lastName: string
    email: string
    isAdmin?: boolean
    hashedPassword: string
    passwordSalt: string
  }

  export type UserUpdateWithoutProfilePictureInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    notebooks?: NotebookUpdateManyWithoutOwnerNestedInput
    calendar?: CalendarUpdateOneWithoutUserNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfilePictureInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
    notebooks?: NotebookUncheckedUpdateManyWithoutOwnerNestedInput
    calendar?: CalendarUncheckedUpdateOneWithoutUserNestedInput
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProfilePictureInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    hashedPassword?: StringFieldUpdateOperationsInput | string
    passwordSalt?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateManyNotebookInput = {
    noteId?: string
    title: string
    content?: string
    tags?: NoteCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashDeckCreateManyNotebookInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    iconId: string
  }

  export type NoteUpdateWithoutNotebookInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateWithoutNotebookInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutNotebookInput = {
    noteId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: NoteUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashDeckUpdateWithoutNotebookInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlashDecksNestedInput
    icon?: IconUpdateOneRequiredWithoutFlashDecksNestedInput
    flashCards?: FlashCardUpdateManyWithoutAlashDeckNestedInput
  }

  export type FlashDeckUncheckedUpdateWithoutNotebookInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
    flashCards?: FlashCardUncheckedUpdateManyWithoutAlashDeckNestedInput
  }

  export type FlashDeckUncheckedUpdateManyWithoutNotebookInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    iconId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateManyCalendarInput = {
    eventId?: string
    title: string
    description?: string
    tags?: EventCreatetagsInput | string[]
    color?: string | null
  }

  export type EventUpdateWithoutCalendarInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimes?: EventTimeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCalendarInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
    eventTimes?: EventTimeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCalendarInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: EventUpdatetagsInput | string[]
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventTimeCreateManyEventInput = {
    eventTimeId?: string
    date: Date | string
    start_time: Date | string
    end_time: Date | string
  }

  export type EventTimeUpdateWithoutEventInput = {
    eventTimeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTimeUncheckedUpdateWithoutEventInput = {
    eventTimeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTimeUncheckedUpdateManyWithoutEventInput = {
    eventTimeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashCardCreateManyAlashDeckInput = {
    flashCardId?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlashCardUpdateWithoutAlashDeckInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: FlashCardAnswerUpdateManyWithoutFlashCardNestedInput
  }

  export type FlashCardUncheckedUpdateWithoutAlashDeckInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: FlashCardAnswerUncheckedUpdateManyWithoutFlashCardNestedInput
  }

  export type FlashCardUncheckedUpdateManyWithoutAlashDeckInput = {
    flashCardId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlashCardAnswerCreateManyFlashCardInput = {
    answerId?: string
    answer?: string
    isCorrect?: boolean
  }

  export type FlashCardAnswerUpdateWithoutFlashCardInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardAnswerUncheckedUpdateWithoutFlashCardInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlashCardAnswerUncheckedUpdateManyWithoutFlashCardInput = {
    answerId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotebookCreateManyIconInput = {
    notebookId?: string
    title: string
    color?: string | null
    tags?: NotebookCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    ownerId: string
  }

  export type FlashDeckCreateManyIconInput = {
    flashDeckId?: string
    title: string
    description?: string
    color?: string | null
    tags?: FlashDeckCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    notebookId?: string | null
  }

  export type NotebookUpdateWithoutIconInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutNotebooksNestedInput
    notes?: NoteUpdateManyWithoutNotebookNestedInput
    flashDecks?: FlashDeckUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateWithoutIconInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
    notes?: NoteUncheckedUpdateManyWithoutNotebookNestedInput
    flashDecks?: FlashDeckUncheckedUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateManyWithoutIconInput = {
    notebookId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NotebookUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type FlashDeckUpdateWithoutIconInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlashDecksNestedInput
    notebook?: NotebookUpdateOneWithoutFlashDecksNestedInput
    flashCards?: FlashCardUpdateManyWithoutAlashDeckNestedInput
  }

  export type FlashDeckUncheckedUpdateWithoutIconInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    notebookId?: NullableStringFieldUpdateOperationsInput | string | null
    flashCards?: FlashCardUncheckedUpdateManyWithoutAlashDeckNestedInput
  }

  export type FlashDeckUncheckedUpdateManyWithoutIconInput = {
    flashDeckId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: FlashDeckUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    notebookId?: NullableStringFieldUpdateOperationsInput | string | null
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