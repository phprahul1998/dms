"use client";
import { useState, useEffect, useCallback } from 'react';
import Sidebar from "../component/sidebar";
import Footer from "../component/footer";
import Upload from "../component/Upload";
import { useSession } from "next-auth/react";
import Link from 'next/link';

const Allfile = () => {
  const { data: session } = useSession();
  const [tabledata, setTableData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const page_size = 10;

  useEffect(() => {
    if (session && session.user) {
      fetchData();
    }
  }, [session]);

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await fetch(`${process.env.BASE_URL_ENDPOINT}/api/get_data/?offset=${offset}&page_size=${page_size}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.token}`,
        },
        body: JSON.stringify({
          folder_id: "",
          search_text: "",
          recent: false,
        }),
      });

      const result = await response.json();

      if (result && result.results && result.results.data && result.results.data.folder_structure) {
        const newData = result.results.data.folder_structure;
        setTableData(prevData => [...prevData, newData]);
        setOffset(prevOffset => prevOffset + page_size);
        setHasMore(!!result.next);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [offset, loading, hasMore, session?.token]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && hasMore && !loading) {
      fetchData();
    }
  }, [fetchData, hasMore, loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <Sidebar />
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-12 col-md-12 col-xl-12">
              <div className="d-flex justify-content-between mb-2">
                <div className="header-title">
                  <h4 className="card-title">All Files</h4>
                </div>
                <div className="header-title">
                  <Upload />
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Updated</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  {tabledata.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                          <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"></path>
                          <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"></path>
                        </svg> <Link href="folder/${}">{item.folder_name || 'My file'}</Link>
                      </td>
                      <td>{new Date(item.last_modified).toLocaleDateString()} by {item.owner || 'RAHUL KUMAR'}</td>
                      <td><span>{item.folder_size || '1'} KB</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {loading && <div>Loading more files...</div>}
              {!hasMore && <div></div>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Allfile;