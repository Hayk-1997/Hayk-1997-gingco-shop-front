import React from 'react';
import { Table, Row, Col, Tooltip, User, Text } from '@nextui-org/react';
import Swal from 'sweetalert2'
import { IconButton } from './IconButton';
import { EditIcon } from './EditIcon';
import { DeleteIcon } from './DeleteIcon';

export const CustomTable = ({ tableProps }: any) => {
  const { data = [], actions, columns } = tableProps;

  const renderCell = (item: any, columnKey: React.Key) => {
    const cellValue = item[columnKey];

    if ('cell' in columns[columnKey]) {
      return (
        <Col>
          <Row>
            <Text b size={14} css={{ tt: "capitalize" }}>
              {columns[columnKey].cell(item)}
            </Text>
          </Row>
      </Col>
      )
    } else if (columnKey === 'actions') {
      return (
        <Row justify="center" align="center">
          <Col css={{ d: "flex" }}>
            <Tooltip content="Edit">
              <IconButton onClick={() => actions.onEdit(item.id)}>
                <EditIcon size={20} fill="#979797" />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: "flex" }}>
            <Tooltip
              content="Delete"
              color="error"
              onClick={() => onDelete(item.id)}>
              <IconButton>
                <DeleteIcon size={20} fill="#FF0080" />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      );
    } else {
      return (
        <Col>
          <Row>
            <Text b size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </Row>
        </Col>
      );
    }
  };

  const onDelete = async (id: number) => {
    const { isConfirmed } = await Swal.fire({
      title: 'Are you sure?',
      icon: 'info',
      html: '',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Delete',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: 'Cancel',
      cancelButtonAriaLabel: 'Thumbs down'
    })
    if (isConfirmed) {
      actions.onEdit(id)
    }
  }

  const tableColumns = Object.values(columns);

  return (
    <Table
      aria-label="Categories list"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={tableColumns}>
        {(column: { key: string, label: string }) => (
          <Table.Column
            key={column.key}
            align={column.key === "actions" ? "center" : "start"}
          >
            {column.label}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={data}>
        {(item: any) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={3}
        onPageChange={(page) => console.log({ page })}
      />
    </Table>
  )
};
