import { create } from 'zustand';
import axiosInstance from '../utility/axios';
import toast from 'react-hot-toast';
import _ from 'lodash';

const useJob = create((set, get) => ({
  jobs: [],
  originalJobs: [],
  isLoading: false,
  isError: false,

  filters: {
    location: '',
    jobType: '',
    maxSalary: 80000, // Default 80k
    title: '',
  },

  fetchJobs: async () => {
    set({ isLoading: true, isError: false });
    try {
      const res = await axiosInstance.get('/job/getAlljob');
      set({
        jobs: res.data,
        originalJobs: res.data,
        filters: {
          location: '',
          jobType: '',
          maxSalary: 80000, 
          title: '',
        },
      });
    } catch (err) {
      set({ isError: true });
      toast.error('Failed to fetch jobs');
    } finally {
      set({ isLoading: false });
    }
  },

  setFilter: (key, value) => {
    set(state => ({
      filters: { ...state.filters, [key]: value }
    }));
    get().applyFilters();
  },

  clearFilters: () => {
    set({
      filters: {
        location: '',
        jobType: '',
        maxSalary: 80000,
        title: '',
      },
    });
    get().applyFilters();
  },

  applyFilters: () => {
    const { originalJobs, filters } = get();
    
    const filtered = originalJobs.filter(job => {
      const matchLocation = filters.location 
        ? job.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      const matchJobType = filters.jobType
        ? job.jobType === filters.jobType
        : true;

      const matchSalary = job.salaryRange.min <= filters.maxSalary;

      const matchTitle = filters.title
        ? job.jobTitle.toLowerCase().includes(filters.title.toLowerCase()) ||
          job.companyName.toLowerCase().includes(filters.title.toLowerCase()) ||
          job.jobDescription.toLowerCase().includes(filters.title.toLowerCase())
        : true;

      return matchLocation && matchJobType && matchSalary && matchTitle;
    });

    set({ jobs: filtered });
  },

  debouncedApply: null,
  scheduleApply: () => {
    if (!get().debouncedApply) {
      const debounced = _.debounce(() => get().applyFilters(), 300);
      set({ debouncedApply: debounced });
    }
    get().debouncedApply();
  },

  createJob: async (jobData) => {
    set({ isLoading: true, isError: false });
    try {
      await axiosInstance.post('/job/create', jobData);
      toast.success('Job created successfully');
      get().fetchJobs();
    } catch (error) {
      set({ isError: true });
      toast.error('Failed to create job');
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useJob;
