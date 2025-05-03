import { api } from "../services/api";
import { useQuery } from "@tanstack/react-query";

// faqs
const getFaqs = async (lang) => {
  const res = await api.get("/faqs/");
  return res.data.map((item) => ({
    question: item[`question_${lang}`],
    answer: item[`answer_${lang}`],
  }));
};

export const useFaqs = (lang) => {
  return useQuery({
    queryKey: ["faqs", lang],
    queryFn: () => getFaqs(lang),
    staleTime: 1000 * 60 * 5,
  });
};

// about values
const getAboutValues = async (lang) => {
  const res = await api.get("/values/");
  return res.data.map((item) => ({
    title: item[`title_${lang}`],
    description: item[`description_${lang}`],
  }));
};

export const useAboutValues = (lang) => {
  return useQuery({
    queryKey: ["values", lang],
    queryFn: () => getAboutValues(lang),
    staleTime: 1000 * 60 * 5,
  });
};

// about timeline
const getTimeLine = async (lang) => {
  const res = await api.get("/journeys/");
  return res.data.map((item) => ({
    year: item["year"],
    title: item[`title_${lang}`],
    description: item[`description_${lang}`],
  }));
};

export const useTimeLine = (lang) => {
  return useQuery({
    queryKey: ["journeys", lang],
    queryFn: () => getTimeLine(lang),
    staleTime: 1000 * 60 * 5,
  });
};

//achievements
const getAchievement = async (lang) => {
  const res = await api.get("/achievements/");
  return res.data;
};

export const useAchievements = (lang) => {
  return useQuery({
    queryKey: ["achievements", lang],
    queryFn: () => getAchievement(lang),
    staleTime: 1000 * 60 * 5,
  });
};

//teachers
const getTeachers = async (lang) => {
  const res = await api.get("/teachers/");
  return res.data.map((item) => ({
    first: item[`full_name_${lang}`],
    image: item[`image`],
    subject: item[`subject_${lang}`],
    edu: item[`edu_level_${lang}`],
    exp: item["num_of_experience"],
    langs: item["languages"],
    phone: item["phone_number"],
    tg: item["telegram_url"],
    linkedin: item["linkedIn_url"],
    insta: item["insta_url"],
    face: item["facebook_url"],
    x: item["x_url"],
  }));
};

export const useTeachers = (lang) => {
  return useQuery({
    queryKey: ["teachers", lang],
    queryFn: () => getTeachers(lang),
    staleTime: 1000 * 60 * 5,
  });
};

//tariffs
const getTariffs = async (lang) => {
  const res = await api.get("/subscriptions/");
  return res.data.map((item) => ({
    subType: item[`sub_type_${lang}`],
    feature: item[`features_${lang}`],
    moprice: item[`monthly_price`],
    year: item[`yearly_price`],
    description: item[`description_${lang}`],
  }));
};

export const useTariffs = (lang) => {
  return useQuery({
    queryKey: ["subscriptions", lang],
    queryFn: () => getTariffs(lang),
    staleTime: 1000 * 60 * 5,
  });
};

//admission dates
const getAdmissions = async (lang) => {
  const res = await api.get("/admissions/");
  return res.data.map((item) => ({
    dates: item[`dates_${lang}`],
    exam: item[`exam_date_${lang}`],
    req: item[`requirements_${lang}`],
  }));
};

export const useAdmissions = (lang) => {
  return useQuery({
    queryKey: ["admissions", lang],
    queryFn: () => getAdmissions(lang),
    staleTime: 1000 * 60 * 5,
  });
};

//admission steps
// const getAdmSteps = async (lang) => {
//   const res = await api.get("/admsteps/");
//   return res.data.map((item) => ({
//     dates: item[`dates_${lang}`],
//     exam: item[`exam_date_${lang}`],
//     req: item[`requirements_${lang}`],
//   }));
// };

// export const useAdmSteps = (lang) => {
//   return useQuery({
//     queryKey: ["admsteps", lang],
//     queryFn: () => getAdmSteps(lang),
//     staleTime: 1000 * 60 * 5,
//   });
// };

//info
const getInfo = async (lang) => {
  const res = await api.get("/info/");
  return res.data.map((item) => ({
    address: item[`address_${lang}`],
    long: item[`long`],
    lat: item[`lat`],
    phone: item[`phone_number`],
    tg: item[`telegram_url`],
    insta: item[`insta_url`],
    face: item[`facebook_url`],
    linkedin: item[`linkedIn_url`],
  }));
};

export const useInfo = (lang) => {
  return useQuery({
    queryKey: ["info", lang],
    queryFn: () => getInfo(lang),
    staleTime: 1000 * 60 * 5,
  });
};

//gallery
const getGallery = async (lang) => {
  const res = await api.get("/gallery/");
  return res.data.map((item) => ({
    id: item[`type_${lang}`],
    title: item[`title_${lang}`],
    image: item[`image`],
  }));
};

export const useGallery = (lang) => {
  return useQuery({
    queryKey: ["gallery", lang],
    queryFn: () => getGallery(lang),
    staleTime: 1000 * 60 * 5,
  });
};

//news
const getNews = async (lang) => {
  const res = await api.get("/news/");
  return res.data.map((item) => ({
    image: item[`image`],
    title: item[`title_${lang}`],
    desc: item[`description_${lang}`],
    date: item[`created_at`],
    titleUz: item[`title_uz`],
  }));
};

export const useNews = (lang) => {
  return useQuery({
    queryKey: ["news", lang],
    queryFn: () => getNews(lang),
    staleTime: 1000 * 60 * 5,
  });
};

//timeTable
const getTable = async (lang) => {
  const res = await api.get(`/timetabel/`);
  return res.data.map((item) => ({
    image: item[`image`],
    title: item[`title_${lang}`],
    desc: item[`description_${lang}`],
  }));
};

export const useTable = (lang) => {
  return useQuery({
    queryKey: ["news", lang],
    queryFn: () => getTable(lang),
    staleTime: 1000 * 60 * 5,
  });
};
