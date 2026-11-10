export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className='mx-auto mb-12 max-w-2xl text-center'>
      <p className='text-sm font-semibold uppercase tracking-widest text-brand'>
        {eyebrow}
      </p>
      
      <h2 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
        {title}
      </h2>

      {subtitle && <p className='mt-4 text-muted'>{subtitle}</p>}
    </div>
  );
}