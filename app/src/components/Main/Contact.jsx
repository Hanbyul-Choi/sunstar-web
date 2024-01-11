'use client';
import React, {useState} from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('');
  const [text, setText] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangePhone = e => {
    setPhone(e.target.value);
  };

  const onChangeCompany = e => {
    setCompany(e.target.value);
  };

  const onChangeBudget = e => {
    setBudget(e.target.value);
  };

  const onChangeText = e => {
    setText(e.target.value);
  };

  return (
    <section id="service" className="h-screen">
      {/* title */}
      <div className="px-4 py-6 space-y-4 border-l-4">
        <h2 className="font-normal">상담신청</h2>
        <p className="ml-2">
          편하게 문의 주시면 상세히 답변해드립니다.
          <br />
          대략적인 견적과 제작기간 등 어떠한 질문도 괜찮습니다.
        </p>
      </div>
      {/* content */}
      <form action="submit" className="flex flex-col items-start gap-2 mt-20 w-80">
        <label htmlFor="name">이름</label>
        <input type="text" name="name" value={name} onChange={onChangeName} className="w-full h-8 text-black" />
        <label htmlFor="phone">연락처</label>
        <input type="tel" name="phone" value={phone} onChange={onChangePhone} className="w-full h-8 text-black" />
        <label htmlFor="email">이메일</label>
        <input type="email" name="email" value={email} onChange={onChangeEmail} className="w-full h-8 text-black" />
        <label htmlFor="company">회사명</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={onChangeCompany}
          className="w-full h-8 text-black"
        />
        <label htmlFor="budget">예산</label>
        <select type="text" name="budget" value={budget} onChange={onChangeBudget} className="w-full h-8 text-black">
          <option value="50만원 미만">50만원 미만</option>
          <option value="50 ~ 100만원">50 ~ 100만원</option>
          <option value="100 ~ 300만원">100 ~ 300만원</option>
          <option value="300만원 이상">300만원 이상</option>
        </select>
        <label htmlFor="text">문의내용</label>
        <textarea name="text" value={text} onChange={onChangeText} className="w-full text-black resize-none" />
      </form>
    </section>
  );
}

export default Contact;
