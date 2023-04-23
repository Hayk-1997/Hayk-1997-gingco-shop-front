import { NextPage } from 'next';

interface Props {
  title: string;
  breadcrumbs: string[];
}

const Breadcrumb: NextPage<Props> = (props) => {
  const { title, breadcrumbs } = props;

  return (
    <div className="col-sm-12">
      <div className="breadcrumb ptb_20">
        <h1>{title}</h1>
        <ul>
          {breadcrumbs.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
