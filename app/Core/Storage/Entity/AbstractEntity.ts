export abstract class AbstractEntity {

    private _id: number;

    private _creationDate: Date;

    private _modifiedDate: Date;

    /**
     * @return number
     */
    get id(): number {
        return this._id;
    }

    /**
     * @return Date
     */
    get creationDate(): Date {
        return this._creationDate;
    }

    /**
     * @return Date
     */
    get modifiedDate(): Date {
        return this._modifiedDate;
    }

}
