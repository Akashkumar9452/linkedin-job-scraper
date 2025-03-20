import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    id: String,
    title: String,
    img: String,
    url: String,
    companyUrl: String,
    date: String,
    postedDate: Date,
    company: String,
    location: String,
    countryCode: String,
    countryText: String,
    descriptionHtml: String,
    city: String,
    remoteOk: Boolean,
    salaryMin: Number,
    salaryMax: Number,
    salaryCurrency: String,
    stackRequired: [String],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
