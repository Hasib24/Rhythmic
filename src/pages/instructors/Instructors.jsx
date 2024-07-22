import React from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import InstructorCard from './InstructorCard';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {
  useTitle('Instractor')

  const instructorCollection = [
    {
      id: 1,
      instructorName: 'Aldex Martin',
      instructorEmail: 'jaber@gmail.com',
      image: 'https://images.pexels.com/photos/7521074/pexels-photo-7521074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi provident officiis fuga repellat quos.',
      numberOfClasses: 213,
      slug: 'Aldex-Martin'
    },
    {
      id: 2,
      instructorName: 'Bldex Martin',
      instructorEmail: 'jaber@gmail.com',
      image: 'https://images.pexels.com/photos/7521074/pexels-photo-7521074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi provident officiis fuga repellat quos.',
      numberOfClasses: 213,
      slug: 'Aldex-Martin'
    },
    {
      id: 3,
      instructorName: 'Aldex Martin',
      instructorEmail: 'jaber@gmail.com',
      image: 'https://images.pexels.com/photos/7521074/pexels-photo-7521074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi provident officiis fuga repellat quos.',
      numberOfClasses: 213,
      slug: 'Aldex-Martin'
    },
    {
      id: 4,
      instructorName: 'Aldex Martin',
      instructorEmail: 'jaber@gmail.com',
      image: 'https://images.pexels.com/photos/7521074/pexels-photo-7521074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi provident officiis fuga repellat quos.',
      numberOfClasses: 213,
      slug: 'Aldex-Martin'
    },
    {
      id: 5,
      instructorName: 'Aldex Martin',
      instructorEmail: 'jaber@gmail.com',
      image: 'https://images.pexels.com/photos/7521074/pexels-photo-7521074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, suscipit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi provident officiis fuga repellat quos.',
      numberOfClasses: 213,
      slug: 'Aldex-Martin'
    },
  ]

  return (
    <section className='container mx-auto my-24 px-5 md:px-0'>
      <SectionHeader>Our Instractors</SectionHeader>
      <div className='grid md:grid-cols-2 gap-5 text-slate-200'>
        {
          instructorCollection.map(instructor => <InstructorCard instructor={instructor} key={instructor.id} />)
        }
      </div>
    </section>
  );
};

export default Instructors;