import React from 'react';
import {
  AppProvider,
  Page,
  Card,
  ResourceList,
  Avatar,
  Text,
} from '@shopify/polaris';
import { useState } from 'react';
function Contenta() {
  const [test, setTest] = useState([]);
  var requestOptions = {
    method: 'GET',
    mode:'cors'
    // body: JSON.stringify(newrecord),
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin':  'http://127.0.0.1:3000',
    //     'Access-Control-Allow-Methods': 'GET',
    //     //  'Access-Control-Allow-Headers': Content-Type, Authorization
    //     // 'Authorization':localStorage.getItem("bearer")??""
    //     // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     // 'Access-Control-Allow-Credentials': 'true'
    //     // 'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjJjYzA4YmZiYTY0ZjA5N2Q1MDNiMGI5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjkyMTgxMzUzLCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYyZmI2ZmU5MDBjZjc5Y2M0NzA5N2ExMiJ9.HSk-HNaBeOEZezRCM7UFsQFp7JSF_iCPXbmqL2bnPogtzo1rJakLiH81_C7H9BIf_Tyf_RdNcJXrShmJAHdbRLhUpZL71OkgM9O117mdP9RXbDqzlVx5XBQaP54rhvwRnTdmTkVbgELlOVJVptDq2hWZL6CUW4YLAj7iNm1DrfTb-KMwB4hELOTQa2Y3Lmobal8Nd7WlVL6E1ekFB5qH7m41qnwbi1pwd2sWjOICGuHzpCWbV1Qgi-nwGEQIg8ZmsMgqFxr1TCvgqb50M6Zvs4F0_IUZiyhfvuurU7ySnM81Ys7L6gI9p9KIbaIvPHh27Ji6oMSjVJ-8ltsveW5WvA"
    // },
};
let url = "http://127.0.0.1:8000/shop/get_shop_data";
fetch(url, requestOptions).then(response => response.json()).then(response => {
    if (response?.data?.success) {

        console.log('aya', response);
        setTest(response['data']['data']['payload']);
        // setColData(response['data'])
    }
    // setState
}).catch(err => console.error(err));
  return (
    <AppProvider
      i18n={{
        Polaris: {
          ResourceList: {
            sortingLabel: 'Sort by',
            defaultItemSingular: 'item',
            defaultItemPlural: 'items',
            showing: 'Showing {itemsCount} {resource}',
            Item: {
              viewItem: 'View details for {itemName}',
            },
          },
          Common: {
            checkbox: 'checkbox',
          },
        },
      }}
    >
      <Page>
        <Card>
          <ResourceList
            showHeader
            items={[
              {
                id: 341,
                url: 'customers/341',
                name: 'Mae Jemison',
                location: 'Decatur, USA',
              },
              {
                id: 256,
                url: 'customers/256',
                name: 'Ellen Ochoa',
                location: 'Los Angeles, USA',
              },
            ]}
            renderItem={(item) => {
              const { id, url, name, location } = item;
              const media = <Avatar customer size="medium" name={name} />;

              return (
                <ResourceList.Item id={id} url={url} media={media}>
                  <Text variant="bodyMd" fontWeight="bold" as="h3">
                    {name}
                  </Text>
                  <div>{location}</div>
                </ResourceList.Item>
              );
            }}
          />
        </Card>
      </Page>
    </AppProvider>
  );
}

export default Contenta;