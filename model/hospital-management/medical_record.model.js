import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    Patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    diagonseWith: [
      {
        type: String,
        required: true,
      },
    ],
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
  },
  { timeseries: true }
);

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
