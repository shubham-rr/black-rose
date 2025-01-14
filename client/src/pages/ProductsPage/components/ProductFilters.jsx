import { Form, Accordion } from 'react-bootstrap';

const ProductFilters = ({ filters, onFilterChange }) => {
  const handleFilterChange = (category, value) => {
    const updatedFilters = { ...filters };
    const index = updatedFilters[category].indexOf(value);
    
    if (index === -1) {
      updatedFilters[category] = [...updatedFilters[category], value];
    } else {
      updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
    }
    
    onFilterChange(updatedFilters);
  };

  // Get unique brand names from the logos folder
  const brandOptions = [
    'Canon',
    'Olympus',
    'Panasonic',
    'SONY',
    'Nikon',
    'Fujifilm'
  ].sort();

  return (
    <div className="product-filters">
      <h4>Filters</h4>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Brand</Accordion.Header>
          <Accordion.Body>
            <Form>
              {brandOptions.map(brand => (
                <Form.Check
                  key={brand}
                  type="checkbox"
                  label={brand}
                  checked={filters.brand.includes(brand)}
                  onChange={() => handleFilterChange('brand', brand)}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Price Range</Accordion.Header>
          <Accordion.Body>
            <Form>
              {[
                { label: 'Under $500', value: '0-500' },
                { label: '$500 - $1000', value: '500-1000' },
                { label: '$1000 - $2000', value: '1000-2000' },
                { label: 'Over $2000', value: '2000+' }
              ].map(range => (
                <Form.Check
                  key={range.value}
                  type="checkbox"
                  label={range.label}
                  checked={filters.priceRange.includes(range.value)}
                  onChange={() => handleFilterChange('priceRange', range.value)}
                />
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProductFilters;
