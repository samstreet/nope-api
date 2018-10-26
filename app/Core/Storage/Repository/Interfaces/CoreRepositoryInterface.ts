import * as mongoose from 'mongoose';

interface CoreRepositoryInterface {

    getModel(): mongoose.Schema;

}

export default CoreRepositoryInterface;